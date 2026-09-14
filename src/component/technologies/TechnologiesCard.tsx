import type { Itechnologies } from "../../types/technologies";



import { FaStar } from "react-icons/fa";



import { toast } from "react-toastify";





const TechnologyCard = ({



  tech,



  selectedTech,



  setSelectedTech,



}: {



  tech: Itechnologies;



  selectedTech:Itechnologies[];



  setSelectedTech: React.Dispatch<React.SetStateAction<Itechnologies[]>>;



}) => {



  const isAdd = selectedTech.some(



    selectTech => selectTech.name === tech.name



  );



  const HandleAddTehcnologies = () => {



    toast.success(`${tech.name} Added.`)



   setSelectedTech([...selectedTech,tech])



  };



  return (



    <div>



      <div className="card shadow-sm">



        <div className="card-body">



          <div className="flex justify-between items-center">



            <img



              src={tech.icon}



              alt={tech.name}



              className="w-10 h-10"



            />



            <span className="badge badge-soft badge-primary">



              {tech.badge}



            </span>



          </div>



          <h2 className="text-3xl font-bold pt-4">



            {tech.name}



          </h2>



          <p>{tech.description}</p>



          <div className="flex justify-between items-center gap-2">



            <span className="badge badge-soft badge-accent text-black">



              {tech.category}



            </span>



            <p>{tech.difficulty}</p>



            <div className="flex items-center">



              <FaStar className="text-yellow-400" />



              <p>{tech.rating}</p>



            </div>



          </div>



          <div className="mt-6">



            <button



              onClick={HandleAddTehcnologies}



              disabled={isAdd}



              className="btn btn-neutral w-full rounded-[10px]"



            >



              {isAdd ? "Added to Stack" : "Add to Stack"}



            </button>



          </div>



        </div>



      </div>



    </div>



  );



};



export default TechnologyCard;