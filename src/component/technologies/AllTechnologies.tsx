import { useState } from "react";
import type { Itechnologies } from "../../types/technologies";

import TechnologyCard from "./TechnologiesCard";
import YourStackCard from "./YourStackCard";

const AllTechnologies = ({ teches }: { teches: Itechnologies[] }) => {
  const [selectedTech, setSelectedTech] = useState<Itechnologies[]>([]);

  return (
    <div className="grid grid-cols-12 container mx-auto gap-12 justify-center">

      <div className="grid grid-cols-3 col-span-9 gap-4 p-4">
        {teches.map((tech) => {
          return (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              setSelectedTech={setSelectedTech}
              selectedTech = {selectedTech}
              
            />
          );
        })}
      </div>

      <YourStackCard
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
      />

    </div>
  );
};

export default AllTechnologies;