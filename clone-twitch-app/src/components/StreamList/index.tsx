import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1}>rodz_oficial</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com Next.js, Chakra UI e GraphQL
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science and Technology
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
