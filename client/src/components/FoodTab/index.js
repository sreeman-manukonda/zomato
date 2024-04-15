import {useParams} from "react-router-dom";
import {SlHandbag} from "react-icons/sl";
import {ImSpoonKnife} from "react-icons/im";
import {PiWineFill} from "react-icons/pi";

const FoodSm = () => {
  const {type} = useParams();
  const [allTypes, setAllTypes] = useState([
    {
      id: `delivery`,
      icon: <SlHandbag />,
      name: "Delivery",
      isActive: false
    },
    {
      id: `dining`,
      icon: <ImSpoonKnife />,
      name: "Dining Out",
      isActive: false
    },
    {
      id: `night`,
      icon: <PiWineFill />,
      name: "Nightlife",
      isActive: false
    }
  ]);


  return(
    <>
     <div className="lg:hidden bg-white p-3 shadow-inner shadow-gray-300 border fixed bottom-0 z-10 w-full flex items-center justify-around text-gray-600">
      <div className="flex flex-col items-center text-xl">
        <div className="w-7 h-7"><SlHandbag className="w-full h-full" /></div>
        <h5>Delivery</h5>
      </div>

      <div className="flex flex-col items-center text-xl">
        <div className="w-7 h-7"><ImSpoonKnife className="w-full h-full" /></div>
        <h5>Dining Out</h5>
      </div>

      <div className="flex flex-col items-center text-xl">
        <PiWineFill />
        <h5>Nightlife</h5>
      </div>

     </div>
    </>
  )
};

const FoodTab = () => {
  return(
    <>
     <div>
      <FoodSm />
     </div>
    </>
  )
};

export default FoodTab;

/*

MdOutlineDeliveryDining

*/
