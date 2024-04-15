import Navbar from "../components/Navbar/Navbar.component";
import FoodTab from "../components/FoodTab";

const DefaultLayoutHoc = (Component) => ({...props}) => {
  return(
   <>
    <div className="container mx-auto lg:px-20">
      <Navbar />
      <Component {...props} />
    </div>
    <FoodTab />
   </>
  );
};

export default DefaultLayoutHoc;
