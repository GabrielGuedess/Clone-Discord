import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton'


const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName='Chat-livre'/>
      <ChannelButton channelName='Rainbow'/>
      <ChannelButton channelName='Sight'/>
      <ChannelButton channelName='TCC'/>
      <ChannelButton channelName='Eniac'/>
    </Container>
  )
};

export default ChannelList;