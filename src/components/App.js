
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const [numbers, setNumbers] = useState([])
  const [sum, setSum]=useState(0)
  const [input, setInput]=useState("")

  useEffect(()=>{
    const timer= setTimeout(()=>{
      setSum(numbers.reduce((acc,curr)=>acc+curr,0));
    },0)

    return ()=> clearTimeout(timer)
  },[numbers])


  const handleInput=(e)=>{
    const value= e.target.value;
    setInput(value);

    if(value !=="" && !isNaN(Number(value))){
      setNumbers((prev)=>[...prev, Number(value)])
    }
  }

  return (
    <div>
      <input 
        type="number"
        value={input}
        onChange={handleInput}
       />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
