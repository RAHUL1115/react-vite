import { useEffect, useState } from "react";
import { Button, Tooltip } from "@mui/material";
import Layout1 from "../layout/Layout1";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted");
    return function () {
      console.log("unmounted");
    };
  });

  function increament() {
    if (count == 100) {
      return;
    }
    setCount(count + 1);
  }

  function decrement() {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <Layout1>
      <div className="container mx-auto">
        <div className="flex items-center gap-5 justify-center">
          <Tooltip title="decrement" arrow>
            <Button variant="outlined" onClick={decrement}>
              <span className="text-2xl">-</span>
            </Button>
          </Tooltip>
          <p>{count}</p>
          <Tooltip title="Increment" arrow>
            <Button variant="outlined" onClick={increament}>
              <span className="text-2xl">+</span>
            </Button>
          </Tooltip>
        </div>
      </div>
    </Layout1>
  );
}

export default App;
