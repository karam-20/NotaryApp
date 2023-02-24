import React from "react";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { motion } from "framer-motion";
import axios from "axios";

const FormData = () => {
  const [pkg, setPkg] = useState("");
  const [extrasign, setextrasign] = useState("");
  const [signers, setsigners] = useState("");
  const [noOfUpload, setnoOfUpload] = useState("");
  const [name, setname] = useState("");
  const [number, setNumber] = useState("");
  const [email, setemail] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [signerloc, setsignerloc] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [formNo, setFormNo] = useState(0);
  const nextFromHandler = () => {
    setFormNo(formNo + 1);
  };
  const backFromHandler = () => {
    if (formNo <= 0) {
      setFormNo(0);
    } else {
      setFormNo(formNo - 1);
    }
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails",
        {
          pkg,
          extrasign,
          signers,
          noOfUpload,
          name,
          number,
          email,
          companyName,
          signerloc,
          date,
          time,
        }
      )
      .then((res) => console.log("Posted data", res))
      .catch((err) => console.log(err));

    setPkg("");
    setextrasign("");
    setsigners("");
    setnoOfUpload("");
    setname("");
    setemail("");
    setcompanyName("");
    setsignerloc("");
    setdate("");
    settime("");
  };
  const buttonHandler = () => {
    if (formNo <= 1) {
      return (
        <>
          <button
            className="bg-slate-200 py-3 px-7 rounded-lg mx-auto"
            onClick={backFromHandler}
          >
            <p className="text-base font-medium text-black">Back</p>
          </button>
          <button
            className="bg-[#4C00A4] py-3 px-7 rounded-lg mx-auto"
            onClick={nextFromHandler}
          >
            <p className="text-base font-medium text-white">Next</p>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="bg-slate-200 py-3 px-7 rounded-lg mx-auto"
            onClick={backFromHandler}
          >
            <p className="text-base font-medium text-black">Back</p>
          </button>
          <button
            className="bg-slate-300 py-3 px-7 rounded-lg mx-auto"
            onClick={(e) => submitForm(e)}
          >
            <p className="text-base font-medium text-[#4C00A4]">
              Schedule Appointment
            </p>
          </button>
        </>
      );
    }
  };
  const forms = (formNo) => {
    switch (formNo) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mt-20"
          >
            <div className="p-20 w-[650px]">
              <form>
                <div className="p-10 border-2 flex gap-5 items-center mt-2 rounded-lg cursor-pointer">
                  <input
                    onChange={(e) => setPkg(e.target.value)}
                    type="radio"
                    name="select-pkg"
                    value="Loan Signing Agent"
                  />
                  <p className="text-xl font-medium">Loan Signing Agent</p>
                </div>
                <div className="p-10 border-2 mt-2 flex gap-5 items-center rounded-lg cursor-pointer">
                  <input
                    onChange={(e) => setPkg(e.target.value)}
                    name="select-pkg"
                    type="radio"
                    value="Remote
Online Notary"
                  />
                  <p className="text-xl font-medium">Remote Online Notary</p>
                </div>
                <div className="p-10 border-2 mt-2 flex gap-5 items-center rounded-lg cursor-pointer">
                  <input
                    onChange={(e) => setPkg(e.target.value)}
                    type="radio"
                    name="select-pkg"
                    value="Mobile General Notary"
                  />
                  <p className="text-xl font-medium">Mobile General Notary</p>
                </div>
              </form>
            </div>
            <div className="border-2 rounded-lg p-8 w-[500px] shadow-lg">
              <form>
                <div className="flex flex-col gap-10">
                  <div className="flex items-center justify-between gap-5">
                    <p className="font-medium">No of extra signatures</p>
                    <input
                      value={extrasign}
                      onChange={(e) => {
                        setextrasign(e.target.value);
                      }}
                      className="border rounded-lg p-3"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <p className="font-medium">No of signers</p>
                    <input
                      value={signers}
                      onChange={(e) => {
                        setsigners(e.target.value);
                      }}
                      className="border rounded-lg p-3"
                      type="text"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-5">
                    <p className="font-medium">
                      how many will you be uploading ?
                    </p>
                    <input
                      value={noOfUpload}
                      onChange={(e) => {
                        setnoOfUpload(e.target.value);
                      }}
                      className="border rounded-lg p-3"
                      type="text"
                    />
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        );
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center p-20 w-full mx-auto"
          >
            <form>
              <div className="flex items-center gap-2 pb-2 ">
                <BiUser size={28} />
                <h2 className="text-2xl font-medium">Signer Details</h2>
              </div>
              <hr />
              <div className="mt-5 flex flex-col gap-6 justify-center px-16 w-[800px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Full Name</p>
                  <input
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    className="border rounded-lg p-3"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Phone Number</p>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border rounded-lg p-3"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Email</p>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="border rounded-lg p-3"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Company Name</p>
                  <input
                    value={companyName}
                    onChange={(e) => setcompanyName(e.target.value)}
                    className="border rounded-lg p-3"
                    type="text"
                  />
                </div>
              </div>
            </form>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center p-20 w-full mx-auto"
          >
            <form>
              <div className="flex items-center gap-2 pb-2 ">
                <BiUser size={28} />
                <h2 className="text-2xl font-medium">Signer Location</h2>
              </div>
              <hr />
              <div className="mt-5 flex flex-col gap-6 justify-center px-16 w-[800px]">
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Enter Signing Location</p>
                  <input
                    value={signerloc}
                    onChange={(e) => setsignerloc(e.target.value)}
                    className="border rounded-lg p-3"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Date</p>
                  <input
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    className="border rounded-lg p-3"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Time</p>
                  <input
                    value={time}
                    onChange={(e) => settime(e.target.value)}
                    className="border rounded-lg p-3"
                    type="time"
                  />
                </div>
              </div>
            </form>
          </motion.div>
        );
      default:
        return "foo";
    }
  };
  return (
    <div className="relative justify-center">
      {forms(formNo)}
      {/* next-btn */}
      <div className="absolute bottom-24 left-28 px-10 flex gap-4">
        {buttonHandler()}
      </div>
    </div>
  );
};

export default FormData;
