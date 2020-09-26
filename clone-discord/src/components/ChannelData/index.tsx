import React, { useRef, useEffect} from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => { 
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);  

  return (
    <Container>
      <Messages>
        {Array.from(Array(10).keys()).map((n) => (
          <ChannelMessage 
            author="Kaique oliver"
            date="02/07/2050"
            content="Today is day of my birthday"
          />
        ))}

        <ChannelMessage 
          author="Kaique oliver"
          date="02/07/2050"
          content={
            <>
              <Mention>@Kaiqueiras</Mention>, me load on the lol and cs again please?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="talks chat-free"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
