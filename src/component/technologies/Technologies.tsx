import { use } from "react";
import type { Itechnologies } from "../../types/technologies";
import AllTechnologies from "./AllTechnologies";

interface TechnologiesProps{
   technologiesPromise:Promise<Itechnologies[]> 
    
}
const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const teches = use(technologiesPromise)
    

    return (
        
        <div className="container mx-auto mt-9">
            <div className="pb-6">
                <h1 className="text-[40px] font-bold">Explore the <span className="text-pink-500">Technologies</span></h1>
                <p >Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
           <AllTechnologies teches = {teches}></AllTechnologies>
           </div>
        </div>
    );
};

export default Technologies;