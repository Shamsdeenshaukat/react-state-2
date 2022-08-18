import { useState } from "react";

import Profilecard from "./components/Profilecard";
import Profileform from "./components/Profileform";

function App() {
  const [allprofiles, setALLprofiles] = useState([
    {
      fisrtname: "shaukat",
      lastname: "shamsdeen",
      email: "shaukatshamsdeen7@gmail.com",
      phone: "0505504493",
    },
  ]);

  const updateallprofiles = (profiles) => {
    let arr = allprofiles;
    arr.push(profiles);
    setALLprofiles({ ...arr });
  };
  return (
    <>
      <div className="App">
        <hi>Our profile maker</hi>
      </div>
      <Profileform submit={updateallprofiles} />
      <hr />
      <div className="list">
        {allprofiles.map((person, index) => (
          <Profilecard key={index} card={person} />
        ))}
      </div>
    </>
  );
}

export default App;
