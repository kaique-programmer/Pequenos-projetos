/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';
import withAnalytics from '~/src/hocs/withAnalytics';

const User = ({ users }) => {
  <div>
    <Head>Usuários</Head>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.login}
          <Link href={`/users/${user.login}`}>
            <a>Acessar perfil</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </div>;
};

User.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/orgs/rocketseat/members'
  );

  return { users: response.data };
};

export default withAnalytics()(User);
