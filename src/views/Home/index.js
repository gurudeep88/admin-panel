import React from 'react';
import './index.scss';
import Sidebar from '../../components/shared/Sidebar';
import Navbar from '../../components/shared/Navbar';
import Widget from '../../components/home/Widget';
import FeaturedCharts from '../../components/home/FeaturedCharts';
import Charts from '../../components/home/Charts';
import Tables from '../../components/home/Tables';

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeaturedCharts />
          <Charts />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  )
}

export default Home