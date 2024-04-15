import DefaultLayoutHoc from "../layouts/Default.layout.Hoc";
import Master from "../components/master";

function MasterPage() {
  return (
    <>
     <div className="">
      <Master />
     </div>
    </>
  )
};

export default DefaultLayoutHoc(MasterPage);
