import type { Itechnologies } from "../../types/technologies";

import { RxCross2 } from "react-icons/rx";

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

  const HandleRemover = (tech: Itechnologies) => {

    const restTechnologies = selectedTech.filter(
      selectTech => selectTech.name != tech.name
    );

    setSelectedTech(restTechnologies);

  };

  const HandleRemoveAll = () => {

    setSelectedTech([]);

  };

  return (

    <div className="col-span-3 space-y-2">

      <h1 className="font-bold text-3xl">Your Stack</h1>

      <div>

        {selectedTech.length === 0 ? (
          <p>No technologies selected yet.</p>
        ) : (
          <p>{selectedTech.length} technologies selected.</p>
        )}

      </div>

      <div className="card shadow-sm">

        {selectedTech.length === 0 ? (

          <div className="flex justify-center items-center h-64">

            <p>Your stack is empty</p>

          </div>

        ) : (

          <div className="p-2">

            {selectedTech.map((tech) => {

              return (

                <div
                  key={tech.id}
                  className="card card-xs shadow-sm"
                >

                  <div className="flex justify-between gap-4 p-2 space-y-2 items-center">

                    <div className="flex items-center gap-4">

                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-10 h-10"
                      />

                      <div>

                        <h1>{tech.name}</h1>

                        <p>{tech.category}</p>

                      </div>

                    </div>

                    <div>

                      <span
                        className="text-2xl cursor-pointer text-gray-400"
                        onClick={() => HandleRemover(tech)}
                      >
                        <RxCross2 />
                      </span>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

      {selectedTech.length > 0 && (

        <button
          onClick={HandleRemoveAll}
          className="btn btn-error w-full"
        >
          Remove All
        </button>

      )}

    </div>

  );

};

export default YourStackCard;