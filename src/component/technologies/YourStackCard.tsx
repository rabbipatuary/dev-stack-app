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

      {selectedTech.length === 0 ? (
        <p>No technologies selected yet.</p>
      ) : (
        <p>
          {selectedTech.length} technologies selected
        </p>
      )}

      <div>
        <p>Your stack is empty</p>
      </div>

    </div>
  );
};

export default YourStackCard;