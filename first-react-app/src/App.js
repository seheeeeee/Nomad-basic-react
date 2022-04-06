import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onCLick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' and 'keyword' changes");
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onCLick}>click</button>
    </div>
  );
}

export default App;
