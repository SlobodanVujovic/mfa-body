import { useState } from 'react';
import './Body.css';

function Body2() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Remote body 2</div>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default Body2;
