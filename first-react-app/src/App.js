import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onCLick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API ....");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onCLick}>click</button>
    </div>
  );
}

export default App;
