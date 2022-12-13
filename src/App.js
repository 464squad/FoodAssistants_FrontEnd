import logo from './logo.svg';
import './App.css';
import React from 'react';

const App =() =>{
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th colspan="2">Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* this is where the data goes */}
            <td>Jenny</td>
            <td>plum street</td>
            <td>800-888-8888</td>
            <td>h=jenny1@gmail.com</td>
            
          </tr>
        </tbody>
      </table>
     
        <h1>test run</h1>
        
  
    </div>
  );
}

export default App;
