import React from 'react';
import Navbar from './Navbar';
import SummaryCards from './SummaryCards';
import ArticlesTable from './ArticlesTable';
import ActionButtons from './ActionButtons';

const MainPage = () => {
  return (
    <div className="p-6">
      <Navbar />
      <SummaryCards />
      <ArticlesTable />
      <ActionButtons />
    </div>
  );
};

export default MainPage;
