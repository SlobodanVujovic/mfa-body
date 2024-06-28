import { useState } from 'react';
import './Body.css';

function Body1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Remote body 1</div>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Body1;
