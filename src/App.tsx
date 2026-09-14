
import { Suspense } from "react";
import Banner from "./component/Banner"
import Nav from "./component/Nav"
import Technologies from "../src/component/technologies/Technologies"


const technologiesPromise= async()=>{
  const res = await fetch("/public/data.json");
  const data = res.json();
  return data ;

}
function App() {
  
  return (
    <>
      <Suspense fallback={<h1>Loading Data ...</h1>}>
      <Technologies technologiesPromise={technologiesPromise()}></Technologies>

      </Suspense>
      <Nav></Nav>
      <Banner></Banner>
    </>
  )
}

export default App
