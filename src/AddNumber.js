import React from 'react'

const AddNumber = (props) => {
  return (
      <>    
    <div className='todo_style'>

<i className="fa fa-window-close-o" onClick={() => {props.khatam(props.id)}}/>
<p>{props.text}</p>

    </div>
    </>

  )
}

export default AddNumber

