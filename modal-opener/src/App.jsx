import './App.css'
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

function App() {
  const [isModal, setIsModal] = useState(false);

  function handleClick() {
    setIsModal(true);
  }   

  function handleCloseDiv() {
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
          <div className='modal-overlay' onClick={handleCloseDiv}></div>
          <div className='modal-container'>
            <CloseOutlined className='icon-modal' onClick={handleCloseDiv} />
            <p>This is a modal !</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
