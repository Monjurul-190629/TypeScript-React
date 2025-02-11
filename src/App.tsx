import { Person } from "./Person";




function App() {
  const name:string = "Monjurul";

  return (
    <>
     <div>
      {name} is 25 years old.
     </div>
     <Person name={"Monjurul"} age = {"25"}/>
    </>
  )
}

export default App
