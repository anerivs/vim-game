import React, {useState} from 'react';
import './App.css';

const AllowedKeysInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== 'Backspace' && (event.key !== 'a' && event.key !== 's' && event.key !== 'd' && event.key !== 'f')) {
      event.preventDefault();
    }
    //arrow keys
     if(event.key === 'h'){
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    } else if(event.key === 'j'){
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
    } else if(event.key === 'k'){
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    } else if(event.key === 'l'){
      window.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowRight'}));
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
      <p>You can only use the keys 'a', 's', 'd', 'f'</p>
    </div>
  );
};

export default AllowedKeysInput;
