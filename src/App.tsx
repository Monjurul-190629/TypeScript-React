import { useState } from "react";
import { Person } from "./Person";




function App() {
  const name:string = "Monjurul";
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleMinus = () => {
    setCount(count - 1)
  }
  return (
    
    <>
     <div>
      {name} is 25 years old.
     </div>
     <Person name={"Monjurul"} age = {"25"}/>
     <Person name = {"Shourav"} age = {"24"} />
     <div>
        <button onClick={handleMinus}>-</button>{count}
        <button onClick={handleAdd}>+</button>
     </div>
    </>
  )
}

export default App
