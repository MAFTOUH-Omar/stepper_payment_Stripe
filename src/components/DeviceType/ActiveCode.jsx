import React, { useState, useRef } from 'react';

const ActiveCode = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const generateRandomNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 15; i++) {
      newNumbers.push(Math.floor(Math.random() * 100));
    }
    setRandomNumbers(newNumbers);
    setCopied(false);
  };

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
    setCopied(true);
  };

  return (
    <div className='flex flex-col mt-5'>
      <div className="mb-4">
        <input
          ref={inputRef}
          type="text"
          value={randomNumbers.join(', ')}
          readOnly
          className="bg-gray-100 py-2 px-16 rounded-md"
        />
        <button
          onClick={handleCopy}
          className="ml-2 bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Copy
        </button>
      </div>
      {copied && (
        <div className="text-green-600 font-semibold mb-2">Copied successfully!</div>
      )}
      {/* <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul> */}
      <button className={` py-2 mt-1 rounded-md text-white bg-green-500`} onClick={generateRandomNumbers}>
            Submit
      </button>
    </div>
  )
}

export default ActiveCode