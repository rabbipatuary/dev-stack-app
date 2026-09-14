import type { Itechnologies } from "../../types/technologies";

interface SelectedTechProps {
  selectedTech: Itechnologies[];

  setSelectedTech: React.Dispatch<
    React.SetStateAction<Itechnologies[]>
  >;
}

const YourStackCard = ({
  selectedTech,
  setSelectedTech,
}: SelectedTechProps) => {
  return (
    <div className="col-span-3">

      <h1>Your Stack</h1>


      <div>
        <p>Your stack is empty</p>
      </div>
      {selectedTech.map((tech)=>{
        return tech.name

      })}

    </div>
  );
};

export default YourStackCard;