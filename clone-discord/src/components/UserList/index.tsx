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

      <Role>Offline - 33</Role>
      <UserRow nickname="futebolatras" isBot /> 
      <Role>Offline - 35</Role>
      <UserRow nickname="catcholatras" />
      <Role>Offline - 54</Role>
      <UserRow nickname="ciriguela" />
      <Role>Offline - 57</Role>
      <UserRow nickname="pangua" />
      <Role>Offline - 66</Role>
      <UserRow nickname="bicu-asa" />
      <Role>Offline - 77</Role>
      <UserRow nickname="nedauras" />
      <Role>Offline - 82</Role>
      <UserRow nickname="burrão" />
      <Role>Offline - 90</Role>
      <UserRow nickname="buneco" />
    </Container>
  );
};

export default UserList;
