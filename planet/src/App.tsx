import { useEffect, useState } from "react";
import { getTracts } from "./api/tracts";
import { Tract } from "./common/Tract/Tract";
import { Tract as TractType } from "./types/Tract";

function App() {
  const [tracts, setTracts] = useState<TractType[]>();

  useEffect(() => {
    const asyncGetTracts = async () => {
      const tracts = await getTracts();
      setTracts(tracts);
    };
    asyncGetTracts();
  }, []);

  return (
    <div className="App">
      <div className="tracts">
        {tracts?.map((tract) => (
          <Tract key={tract.fid} data={tract} />
        ))}
      </div>
    </div>
  );
}

export default App;
