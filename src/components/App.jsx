import React, { useState } from 'react';

import user from '../user.json';
import { Profile } from './task_1/Profile';

import data from '../data.json';
import { Statistics } from './task_2/Statistics';

import friend from '../friends.json';
import { FriendList } from './task_3/FriendListI';

import transaction from '../transactions.json';
import { TransactionHistory } from './task_4/TransactionHistory';

export const App = () => {
  const [selectedModule, setSelectedModule] = useState('profile');

  const renderSelectedModule = () => {
    switch (selectedModule) {
      case 'profile':
        return <Profile info={user} />;
      case 'statistics':
        return <Statistics stats={data} title="Можна не передавати заголовок Upload stats"/>;
      case 'frienlist':
        return <FriendList friends={friend} />;
      case 'transaction':
        return <TransactionHistory item={transaction}/>;

      default:
        return <Profile info={user} />;
    }
  };

  return (
    <div>
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
    </div>
  );
};
