import { use } from "react";


const Technologies = ({technologiesPromise}) => {
    const teches = use(technologiesPromise)
    console.log(teches)

    return (
        <div>
            
        </div>
    );
};

export default Technologies;