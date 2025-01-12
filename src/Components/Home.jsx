import React, { useState } from 'react'
import {
  BsFillDropletFill, BsBellFill, BsGraphUp, BsFillPeopleFill
} from 'react-icons/bs'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from 'recharts';

import "reactflow/dist/style.css";
import ReactFlow, { Handle } from 'reactflow';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useUsers } from "../Context/UsersContext";


import "./Home.css";

function Home() {
  const { users } = useUsers();
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const data = [
    { name: "Tank A", level: 75, alerts: 2 },
    { name: "Tank B", level: 50, alerts: 1 },
    { name: "Tank C", level: 90, alerts: 3 },
    { name: "Tank D", level: 30, alerts: 0 },
    { name: "Tank E", level: 65, alerts: 1 },
  ];
  const userCountData = [
    { name: "Users", count: users.length },
  ];
  const [selectedTank, setSelectedTank] = useState(null);

  const nodes = [
    { id: '1', data: { label: 'Tank' }, position: { x: 400, y: 50 } },
    { id: '2', data: { label: 'Tank A' }, position: { x: 200, y: 150 } },
    { id: '3', data: { label: 'Tank B' }, position: { x: 400, y: 150 } },
    { id: '4', data: { label: 'Tank C' }, position: { x: 600, y: 150 } },
    { id: '5', data: { label: 'Tank D' }, position: { x: 800, y: 150 } },
    { id: '6', data: { label: 'Tank E' }, position: { x: 1000, y: 150 } },
    { id: '7', data: { label: 'Tank A1' }, position: { x: 100, y: 250 } },
    { id: '8', data: { label: 'Tank A2' }, position: { x: 200, y: 250 } },
    { id: '9', data: { label: 'Tank A3' }, position: { x: 300, y: 250 } },
    { id: '10', data: { label: 'Tank A4' }, position: { x: 400, y: 250 } },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e1-6', source: '1', target: '6' },
    { id: 'e2-7', source: '2', target: '7' },
    { id: 'e2-8', source: '2', target: '8' },
    { id: 'e2-9', source: '2', target: '9' },
    { id: 'e2-10', source: '2', target: '10' },
  ];

  const tankDetails = {
    'Tank A': { level: '75%', location: 'Area A', alerts: 2 },
    'Tank B': { level: '50%', location: 'Area B', alerts: 1 },
    'Tank C': { level: '90%', location: 'Area C', alerts: 3 },
    'Tank D': { level: '30%', location: 'Area D', alerts: 0 },
    'Tank E': { level: '65%', location: 'Area E', alerts: 1 },
    'Tank A1': { level: '80%', location: 'Sub Area A1', alerts: 1 },
    'Tank A2': { level: '60%', location: 'Sub Area A2', alerts: 0 },
    'Tank A3': { level: '70%', location: 'Sub Area A3', alerts: 2 },
    'Tank A4': { level: '50%', location: 'Sub Area A4', alerts: 0 },
  };

  const onNodeClick = (event, node) => {
    setSelectedTank(tankDetails[node.data.label]);
  };

  



  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>

        <div className='main-title'>
          <h3> DASHBOARD</h3>
        </div>

        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>TOTAL TANKS</h3>
              <BsFillDropletFill className='card_icon' />
            </div>
            <h1>5</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>AVERAGE WATER LEVEL</h3>
              <BsGraphUp className='card_icon' />
            </div>
            <h1>62%</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ALERTS</h3>
              <BsBellFill className='card_icon' />
            </div>
            <h1>6</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>USERS</h3>
              <BsFillPeopleFill className='card_icon' />
            </div>
            <h1>{users.length}</h1>
          </div>
        </div>

        <div className='charts'>
          <div className='chart'>
            <h3>Water Levels in Tanks</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="level" fill="#007BFF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className='chart'>
            <h3>Alerts Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="alerts" stroke="#FF0000" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className='chart'>
            <h3>Total Users Count</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={userCountData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#00FF00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
        </div>
        
        <div style={{ width: '100%', height: '500px', position: 'relative', marginTop: '400px' }}>
      <h3 style={{ color: 'black',paddingTop:"50px"}}>Tank Tree Structure</h3>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodeClick={onNodeClick} // Changed interaction to "click"
      />
      {selectedTank && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h4>Tank Details</h4>
          <p>Water Level: {selectedTank.level}</p>
          <p>Location: {selectedTank.location}</p>
          <p>Alerts: {selectedTank.alerts}</p>
        </div>
      )}
    </div>
        
        
      </main>
      
    </div>
  )
}

export default Home
