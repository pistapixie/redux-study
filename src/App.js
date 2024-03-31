import "./App.css";
import Box from "./component/Box";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    // setCount(count + 1);
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: -2 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  return (
    <div>
      <h1>
        {id},{password}
      </h1>
      <h2>{count}</h2>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrement}>감소!</button>
      <Box />
    </div>
  );
}

export default App;
