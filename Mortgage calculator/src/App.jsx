import { useState } from 'react';
import './App.css';
import { UserOutlined } from '@ant-design/icons';
import { Input, Typography, Button } from 'antd';

function App() {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);
  const [emi, setEmi] = useState(null);

  function handleInput(e) {
    if (e.target.id === 'principal') {
      setPrincipal(e.target.value);
    } else if (e.target.id === 'interest') {
      setInterest(e.target.value);
    } else {
      setDuration(e.target.value);
    }
  }

  function calculateEMI() {
    const r = interest / 100 / 12; // Monthly interest rate
    const n = duration * 12; // Loan tenure in months
    const monthlyEMI = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(monthlyEMI.toFixed(2));
  }

  return (
    <div className='main-div'>
      <div>
        <Typography.Title level={5}>Principal Loan Amount</Typography.Title>
        <Input id="principal" size="large" onChange={handleInput} placeholder="50000" prefix={<UserOutlined />} />
      </div>

      <br />
      <div>
        <Typography.Title level={5}>Interest Rate (%)</Typography.Title>
        <Input id="interest" size="large" onChange={handleInput} placeholder="3" prefix={<UserOutlined />} />
      </div>

      <br />
      <div>
        <Typography.Title level={5}>Length of Loan (years)</Typography.Title>
        <Input id="duration" size="large" onChange={handleInput} placeholder="30" prefix={<UserOutlined />} />
      </div>

      <br />
      <div>
        <Button onClick={calculateEMI}>Calculate</Button>
      </div>

      <br />
      <div>
        {emi && <p>Your monthly mortgage payment will be ${emi}</p>}
      </div>
    </div>
  );
}

export default App;
