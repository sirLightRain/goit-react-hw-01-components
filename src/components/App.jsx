import React, { useState } from 'react';

import user from './task_1/user.json';
import { Profile } from './task_1/Profile/Profile';

import data from './task_2/data.json';
import { Statistics } from './task_2/Statistics/Statistics';
import { addSimilar } from './task_2/StatisticsElement/AddSimilar';
import { coloredStats } from './task_2/StatisticsElement/Colored';

import friend from './task_3/friends.json';
import { FriendList } from './task_3/FriendListI';

import transaction from './task_4/transactions.json';
import { TransactionHistory } from './task_4/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { ButtonCover, Button } from './App.styled';

export const App = () => {
  const [selectedModule, setSelectedModule] = useState('profile');

  const renderSelectedModule = () => {
    switch (selectedModule) {
      case 'profile':
        return <Profile info={user} />;
      case 'statistics':
        const newStats = addSimilar(data);
        const coloredNewStats = coloredStats(newStats);
        return <Statistics stats={coloredNewStats} title={'UPLOADT STATS'} />;
      case 'friendlist':
        return <FriendList friends={friend} />;
      case 'transaction':
        return <TransactionHistory item={transaction} />;

      default:
        return <Profile info={user} />;
    }
  };

  return (
    <Layout>
      <ButtonCover>
        <Button onClick={() => setSelectedModule('profile')}>Profile</Button>
        <Button onClick={() => setSelectedModule('statistics')}>
          Statistics
        </Button>
        <Button onClick={() => setSelectedModule('friendlist')}>
          FriendList
        </Button>
        <Button onClick={() => setSelectedModule('transaction')}>
          Transaction History
        </Button>
      </ButtonCover>
      {renderSelectedModule()}
      <GlobalStyle />
    </Layout>
  );
};
