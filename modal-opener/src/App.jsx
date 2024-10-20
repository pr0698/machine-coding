import './App.css'
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

function App() {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(true);
  }

  function handleClose() {
    setIsModal(false);
  }

  return (
    <div className='main-container'>
      {!isModal && (
        <div className='main-div'>
          <button onClick={handleClick}>Click Me</button>
        </div>
      )}

      {isModal && (
        <>
          <div className='modal-overlay' onClick={handleClose}></div>
          <div className='modal-container'>
            <CloseOutlined className='icon-modal' onClick={handleClose} />
            <p>This is a modal!</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
