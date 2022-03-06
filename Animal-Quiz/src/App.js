import React from 'react';
import WelcomePage from './components/WelcomePage';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';
import QuestionFour from './components/QuestionFour';
import QuestionFive from './components/QuestionFive';
import TryAgain from './components/TryAgain'
import {Routes,Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
<Routes>
<Route exact path="/" element={<WelcomePage/>} />
<Route path="/questionone" element={<QuestionOne/>}/>
<Route path="/questiotwo" element={<QuestionTwo/>}/>
<Route path="/questiothree" element={<QuestionThree/>}/>
<Route path="/Questionfour" element={<QuestionFour/>}/>
<Route path="/questiotfive" element={<QuestionFive/>}/>
<Route path="/tryagain" element={<TryAgain/>}/>





</Routes>
{/* <QuestionOne/> */}
      
    </div>
  )
}

export default App
