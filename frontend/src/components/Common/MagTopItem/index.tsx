import React from 'react';
import styled from 'styled-components';
import trimContentLength from '@utils/trimContentLength';
import MagTag from '@components/Common/MagTag';
import BoxItem from '@components/Common/BoxItem';

function MagTopItem({ magData: mag }) {
  return (
    <Wrapper>
      <ImgWrapper>
        <BoxItem imgUrl={mag.imgUrl} />
      </ImgWrapper>
      <MagContentWrapper>
        <TagWrapper>
          <MagTag type={mag.tag} />
        </TagWrapper>
        <MagTitle>{mag.title}</MagTitle>
        <MagContent>{trimContentLength(mag.content, 110)}</MagContent>
        <MagContent>{`VIBE MAG · ${mag.date}`}</MagContent>
      </MagContentWrapper>
    </Wrapper>
  );
}

const ImgWrapper = styled.div`
  width: ${props => props.theme.size.magTopItemHeight};
  height: ${props => props.theme.size.magTopItemHeight};
`;

const TagWrapper = styled.div`
  margin-bottom: 24px;
`;

const MagTitle = styled.a`
  ${props => props.theme.font.bigBoldTitle}
`;

const MagContentWrapper = styled.div`
  background: white;
  width: 640px;
  padding: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MagContent = styled.p`
  ${props => props.theme.font.sub}
  font-size: 14px;
  margin-top: 10px;
  line-height: 130%;
`;

const Wrapper = styled.div`
  width: ${props => props.theme.size.mainContentWidth};
  margin: 0 auto;
  height: ${props => props.theme.size.magTopItemHeight};
  background-color: white;
  display: flex;
`;

export default MagTopItem;
