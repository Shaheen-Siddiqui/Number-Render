import React, { useState } from 'react';


function App() {
  let [Inpval, setInpval] = useState();

  const inputFac = ((event) => {
    const value = event.target.value;
  })



  return (
    <>

      <input className='inputFild' autoFocus placeholder='Enter Your Email..' onChange={inputFac} /><br />
      <button className='btn'>click for Result</button>

      <div class="card" style={{ width: "18rem", backgroundColor:"pink" }}>
        <div class="card-header">
          Featured
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
      </div>

    </>
  );
}

export default App;
