import React, { useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current

    if(div){
      div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return(
    <Container>
      <Messages ref={messageRef}>
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
 
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Gabriel Guedes"
          date="21/03/2021"
          content="React God!"
        />
        <ChannelMessage
          author="Rafael Batista"
          date="21/03/2021"
          content={
            <>
            <Mention>@Gabriel Guedes</Mention>, React God!
            </>
          }
          hasMentions
          isBot
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;