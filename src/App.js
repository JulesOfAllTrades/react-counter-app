import { useState } from "react";
import "./styles.css";

import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          This counter app was created during a Codecademy Detroit chapter React
          workshop.
          <br></br>You can watch the YouTube recording{" "}
          <a href="https://www.youtube.com/watch?v=j8-1F34AtEs&t=376s">here.</a>
        </p>
        <Counter count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
