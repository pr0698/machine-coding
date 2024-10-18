import { useEffect, useState } from 'react'
import
{ Button }
from
"antd"
;
import './App.css'

function App() {
  const [pause, setPause] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  const [timerId, setTimerId] = useState(10);

  function handleStart() {
    if (hours <= 0 || minutes <= 0 || seconds <= 0) {
      alert('invalid input');
    }
    else {
      setIsStart(true);

    }
  }

  function runTimer(hours, minutes, seconds, tid) {
    if (seconds > 0) setSeconds((sec) => sec - 1);
    else if (seconds == 0 && minutes > 0) {
      setMinutes((min) => min - 1);
      setSeconds(59);
    }
    else if(minutes === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
  }
  if(seconds === 0 && minutes === 0 && hours === 0){
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(tid);
    alert('time is finished');
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(hours, minutes, seconds, tid);
      }, 1000)
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    }
  }, [isStart, hours, minutes, seconds]);



  function handleInput(e) {
    if (e.target.id === "hours") setHours(parseInt(e.target.value));
    else if (e.target.id === "minutes") setMinutes(parseInt(e.target.value));
    else setSeconds(parseInt(e.target.value));
  }


  function handlePause() {
    setPause(true);
    clearInterval(timerId);
  }
  function handleReset() {
    setIsStart(false);
  }
  function handleResume() {
    setPause(false);
    runTimer(hours, minutes, seconds, timerId);
  }






  return (
    <center className='App'>
      <h1>Countdown Timer</h1>
      {!isStart &&
        <div className='input-container'>
          <div className='input-timer'>
            <input id="hours" onChange={handleInput} placeholder='HH'></input>
            <input id="minutes" onChange={handleInput} placeholder='MM'></input>
            <input id="seconds" onChange={handleInput} placeholder='SS'></input>
          </div>
          <button onClick={handleStart} className='timer-button'>Start</button>
        </div>
      }


      {isStart && <div className='show-container'>
        <div className='timer-box'>
          <div>
            {hours > 9 ? hours : `0${hours}`}
          </div>
          <span>:</span>
          <div>
            {minutes > 9 ? minutes : `0${minutes}`}
          </div>
          <span>:</span>
          <div>
            {seconds > 9 ? seconds : `0${seconds}`}
          </div>
        </div>
        <div className='action-buttons'>
          { !pause && <Button  onClick={handlePause}  color='primary' variant='solid' className='timer-button'>Pause</Button>}
          { pause &&  <Button   onClick={handleResume} color='default' variant='solid' className='primary  timer-button'>Resume</Button>}
          <button onClick={handleReset} className='default timer-button'>Reset</button>


        </div>
      </div>
      }

    </center>
  )
}

export default App
