import React, { useState } from 'react';
import AddNumber from './AddNumber'

function App() {
  let [Inpval, setInpval] = useState();
  let [btn, setBtn] = useState(false)
  let [svalue, setValue] = useState()
  let [Enter, setEnter] = useState([])

  const clicking = () => {
    if (Inpval == '123456789') {
      setBtn(true)
    }

    else if (svalue.length) {
        setEnter((prev) => {
        return [...prev, svalue]
      })
    }
    setValue("")
  }
  // //
  const dblclick = () => {
    setBtn(false)
  }
  // //
  const updateInput = ((event) => {
    const value = event.target.value
    setInpval(value)
    setValue(value)
  })
  // //

  const Deleted = (id) => {
    return setEnter((prev) => {
      return prev.filter((val, indx) => {
        return indx !== id
      })
    })
  }
  return (
    <>
      <input value={svalue} className='inputFild' autoFocus placeholder='Enter Your Passward..' onDoubleClick={dblclick} onChange={updateInput} />
      <button className='btn' onClick={clicking}>LOGIN</button>
      <br />
      <br />
      <br />

      {btn ? <div className="outer">
        <ul>
          <li><span>Aayat </span>         <br />9773758285 </li>
          <li><span>Jasmen</span>         <br />7840809421 </li>
          <li><span>Ayesha</span>         <br />2378564099</li>
          <li><span>Mannat</span>         <br />4599098700</li>
          <li><span>Humaena-khan</span>   <br />1212906790</li>

        </ul>
      </div> : null}

      {Enter.map((val, index) => {
        return <AddNumber
          key={index}
          id={index}
          text={val}
          khatam={Deleted}

        />
      })}

    </>
  );
}

export default App;
