import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Chat-free</Title>

      <Separator />

      <Description>Channel open for talks</Description>
    </Container>
  );
};

export default ChannelInfo;
