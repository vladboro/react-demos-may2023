import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slices/counter";
import { useState } from "react";

const App = () => {

  const [amount, setAmount] = useState(1)
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return <div>
    <div>Counter: {counter}</div>
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)}/>
    <button onClick={()=> dispatch(incrementByAmount(Number(amount)))}>Increment by amount</button>
  </div>
};

export default App;
