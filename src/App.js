import React from 'react';
import './App.css';
import './components/signUpForm';
import signUpForm from './components/signUpForm';

function App() {
  return (
    <div className="App">
      <h1>Sign up for classes here</h1>
      <h2>Click the time that you want to schedule</h2>
      <div className="daysAndClasses">
        <div>
          <h3>Monday</h3>
          <h4 className="canSchedule">10 - 11 Tumbling</h4>
          <h4 className="canSchedule">11 - 12 Cheer</h4>
        </div>
        <br/>
        <div>
          <h3>Tuesday</h3>
          <h4 className="cannotSchedule">No classes</h4>
        </div>
        <br/>
        <div>
          <h3>Wednesday</h3>
          <h4 className="canSchedule">9 - 10 Tumbling</h4>
          <h4 className="canSchedule">10 - 11 Cheer</h4>
        </div>
        <br/>
        <div>
          <h3>Thursday</h3>
          <h4 className="cannotSchedule">No classes</h4>
        </div>
        <br/>
        <div>
          <h3>Friday</h3>
          <h4 className="canSchedule">10 - 11 Tumbling</h4>
          <h4 className="canSchedule">11 - 12 Cheer</h4>
        </div>
        <br/>
        <div>
          <h3>Saturday</h3>
          <h4 className="canSchedule">10 - 11 Tumbling</h4>
          <h4 className="canSchedule">11 - 12 Cheer</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
