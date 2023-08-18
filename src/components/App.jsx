import React, { useState } from 'react';

import user from './task_1/user.json';
import { Profile } from './task_1/Profile/Profile';

import data from './task_2/data.json';
import { Statistics } from './task_2/Statistics';

import friend from './task_3/friends.json';
import { FriendList } from './task_3/FriendListI';

import transaction from './task_4/transactions.json';
import { TransactionHistory } from './task_4/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  const [selectedModule, setSelectedModule] = useState('profile');

  const renderSelectedModule = () => {
    switch (selectedModule) {
      case 'profile':
        return <Profile info={user} />;
      case 'statistics':
        return (
          <Statistics
            stats={data}
            title={'Можна не передавати заголовок Upload stats'}
          />
        );
      case 'frienlist':
        return <FriendList friends={friend} />;
      case 'transaction':
        return <TransactionHistory item={transaction} />;

      default:
        return <Profile info={user} />;
    }
  };

  return (
    <Layout>
      <div>
        <button onClick={() => setSelectedModule('profile')}>Profile</button>
        <button onClick={() => setSelectedModule('statistics')}>
          Statistics
        </button>
        <button onClick={() => setSelectedModule('frienlist')}>
          FriendList
        </button>
        <button onClick={() => setSelectedModule('transaction')}>
          TransactionHistory
        </button>
      </div>
      {renderSelectedModule()}
      <GlobalStyle/>
    </Layout>
  );
};
