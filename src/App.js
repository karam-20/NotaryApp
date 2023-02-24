import axios from "axios";
import { useEffect, useState } from "react";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import FormData from "./components/FormData";

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse"
      )
      .then((res) => {
        setData1(res.data.response.personalInfo);
        setData2(res.data.response.personalInfo.businessDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid grid-cols-6 mx-auto font-body">
      {/* //left side */}
      <div className="h-[100vh] bg-[#4c00a4] p-8 flex flex-col gap-8 items-center pt-28">
        <div>
          <img
            className="h-28 w-28 object-cover rounded-full"
            src={data1.photoURL}
            alt="userImage"
          />
        </div>
        <div>
          <h1 className="text-white font-bold text-2xl">{`${data1.firstName}  ${data1.lastName}`}</h1>
        </div>
        {/* user personal details */}
        <div className="text-white flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MdEmail size={22} />
            <h2 className="text-sm">{data1.email}</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdPhone size={22} />
            <h2 className="text-sm">{data1.phoneNumber}</h2>
          </div>
          <div className="flex items-center gap-2">
            <MdLocationPin size={22} />
            <h2 className="text-sm">{data2.businessAddress}</h2>
          </div>
          <div className="flex items-center gap-2">
            <FaUser size={22} />
            <h2 className="text-sm">{data2.businessName}</h2>
          </div>
        </div>
      </div>
      {/* right side forms */}
      <div className="col-span-4 flex h-[100vh]">
        <FormData />
      </div>
    </div>
  );
}

export default App;
