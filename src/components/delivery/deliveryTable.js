function deliveryTable() {
    return ( <div className="app-container">
    <h1> Delivery Table</h1>
    <table>
      <thead>
        <tr>
          <th>Name, # in Home</th>
          <th>Grocery Items</th>
          <th>General Hygiene</th>
          <th>Feminine Hygiene</th>
          <th>Cleaning/Health Supplies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* this is where the data goes */}
          <td>Lameisha 3 people in house hold</td>
          <td>chicken (1x)</td>
          <td>Deodorant(3x)</td>
          <td>Feminine Wipes (1x)</td>
          <td>All purpose Cleaner (1x)</td>
        </tr>
      </tbody>
    </table>
   
    
      

  </div>)
  }
  
  export default deliveryTable