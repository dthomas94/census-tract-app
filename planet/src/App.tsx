import { useEffect } from "react";
import { getTracts } from "./api/tracts";

function App() {
  useEffect(() => {
    const asyncGetTracts = async () => {
      const tracts = await getTracts();
      console.log(tracts);
    };
    asyncGetTracts();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
