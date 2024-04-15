import {IoMdContact} from "react-icons/io";

function NavSm() {
  return (
    <>
     <div className="flex items-center justify-between px-2 py-3 shadow-md">
       <div className="w-24 ml-4">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
             alt="logo"
             className="w-full h-full"
         />
       </div>
       <div className="w-8 text-red-500">
        <IoMdContact className="w-full h-full" />
       </div>
     </div>
    </>
  )
};

function NavMd() {
  return (
    <>
     <div>
      <h1 className="text-blue-600">I'm Navbar</h1>
     </div>
    </>
  )
};

function NavLg() {
  return (
    <>
     <div>
      <h1 className="text-blue-600">I'm Navbar</h1>
     </div>
    </>
  )
};

// Main Component
const Navbar = () => {
return (
<nav className="">
   {/* Mobile Screen NavBar */}
   <div className="md:hidden">
      <NavSm />
   </div>
   {/* Medium/Tab Screen NavBar */}
   <div className="hidden md:flex lg:hidden">
      <NavMd />
   </div>
   {/* Large Screen NavBar */}
   <div className="hidden md:hidden lg:flex">
      <NavLg />
   </div>
</nav>
);
};

export default Navbar;
