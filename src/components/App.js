import { Provider, useStore, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as countAction from "../actions/countActions";
const App = (props) => {
   const count = useSelector(state => state.count)
  return (
      <div className="main-app">
        {count}
        <Child />
      </div>);
};

const Child = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(countAction.increment());
  };
  return (
    <div className="child">
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;