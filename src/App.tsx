import { useState } from "react";
import Router from "./routes/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

