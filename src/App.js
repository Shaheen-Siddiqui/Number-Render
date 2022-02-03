import React, { useState } from 'react';

function App() {
  let [Inpval, setInpval] = useState();
  let [btn,setBtn] = useState(false)

  const inputFac = ((event) => {
    const value = event.target.value;
    
  })
const clicking=()=>{
  setBtn(true)
}
const dblclick=()=>{
  setBtn(false)
}


  return (
    <>

      <input className='inputFild' autoFocus placeholder='Enter Your Email..' onChange={inputFac}/><br />
      <button className='btn' onClick={clicking}  >click for Result</button>
      <br/>
      <br/>
      <br/>

   {btn? <div className="outer" DoubleClick={dblclick}>
      <ol>
        <li>1234567789 aadil ki ammi</li>
        <li>1234567789 aadil ki abbu</li>
        <li>1234567789 aadil ki khala</li>
        <li>1234567789 aadil ki fufi</li>
        <li>1234567789 aadil ki bahan</li>
        <li>1234567789 aadil ki bhaijaan</li>
        <li>1234567789 aadil ki bahan</li>

      </ol>
    </div> :null}

    </>
  );
}

export default App;
