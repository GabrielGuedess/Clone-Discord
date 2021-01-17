import React from 'react';

import { Container, HashtagIcon, Invited, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected}) => {
  return(
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <Invited />
        <SettingsIcon />
      </div>
    </Container>
  )
};

export default ChannelButton;