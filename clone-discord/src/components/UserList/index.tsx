import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Kaique oliver" />

      <Role>Offline</Role>
      <UserRow nickname="futebolatras" isBot /> 
      <Role>Offline</Role>
      <UserRow nickname="catcholatras" isBot />
      <Role>Offline</Role>
      <UserRow nickname="ciriguela" isBot />
      <Role>Offline</Role>
      <UserRow nickname="pangua" isBot />
      <Role>Offline</Role>
      <UserRow nickname="bicu-asa" isBot />

    </Container>
  );
};

export default UserList;
