
import { Suspense } from "react";
import Banner from "./component/Banner"
import Nav from "./component/Nav"
import Technologies from "../src/component/technologies/Technologies"
import type { Itechnologies } from "./types/technologies";


const technologiesPromise= async():Promise<Itechnologies[]>=>{
  const res = await fetch("/public/data.json");
  const data = res.json();
  return data ;

}
function App() {
  
  return (
    <>
      
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading Data ...</h1>}>
      <Technologies technologiesPromise={technologiesPromise()}></Technologies>

      </Suspense>
    </>
  )
}

export default App
