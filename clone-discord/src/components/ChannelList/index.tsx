import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="fifinha" />
      <ChannelButton channelName="call of duty" />
      <ChannelButton channelName="counter strike" />
      <ChannelButton channelName="nba 2k 2020" />
    </Container>
  );
};

export default ChannelList;
