function AppData() {
    let time =  new Date();
  return (
    <div>
      <h3>This is the clock that shows the time in Bharat at all times</h3>
      <p>This is the current time: {time.toLocaleDateString()} -{" "} {time.toLocaleTimeString()}</p>
    </div>
  );
}


export default AppData;
