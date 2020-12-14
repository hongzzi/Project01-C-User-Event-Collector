import { useRouter } from 'next/router';
import useFetch from '@hooks/useFetch';
import api from '@api/index';
import Playlistdetail from '../../src/pages/Detail/Playlist';

export function Index({ referer }) {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch(`/playlist/${id}`);

  if (isLoading) return <div>...Loading</div>;
  if (isError) {
    console.log(isError);
    return <div>...Error</div>;
  }

  const logData = {
    eventTime: new Date(),
    eventName: 'MoveEvent',
    parameters: { prev: referer || 'external', next: router.asPath },
  };
  api.post('/log', logData);

  return (
    <>
      <Playlistdetail playlistInfo={data.data} />
    </>
  );
}
export async function getServerSideProps({ req }) {
  const regex = /(http:\/\/)([A-Z,a-z,:,0-9]*)/;
  const host = req.headers?.referer?.match(regex)[0];
  const referer = req.headers?.referer?.slice(host.length);

  return { props: { referer: referer || 'external' } };
}

export default Index;
