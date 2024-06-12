
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemberAccounts, memberDeposit,loanTypes } from "../../redux/ApiSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function LoanApplication() {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.ApiSlice.accounts);
  const loanTypes = useSelector((state) => state.ApiSlice.loanTypes);
  const notification = useSelector((state) => state.ApiSlice.notification);

  useEffect(() => {
    dispatch(loanTypes());
  }, []);
  const [principleAmount, setprincipleAmount] = useState(0);
  const [loanType, setloanType] = useState(0);
  const [security,setsecurity]=useState("N/A");
  const [loanPeriod,setloanPeriod]=useState("");
  const [firstWitnessName,setfirstWitnessName]=useState("");
  const [firstWitnessAddress,setfirstWitnessAddress]=useState("");
  const [firstWitnessContact,setfirstWitnessContact]=useState("");
  const [secondWitnessName,setsecondWitnessName]=useState("");
  const [secondWitnessAddress,setsecondWitnessAddress]=useState("");
  const [secondWitnessContact,setsecondWitnessContact]=useState("");

  const loanDetails = {
    principleAmount,security,loanPeriod,firstWitnessAddress,firstWitnessContact,firstWitnessName,secondWitnessAddress,secondWitnessContact,secondWitnessName,
    loanType,
  };
  const saveLoan = (e) => {
    e.preventDefault();
    dispatch(memberDeposit(loanDetails));
    if (notification !== "") {
      navigate("/accounts", { replace: true });
    }
  };
  return (
    <>
      <div className="w-[30%] m-auto  login_form">
        <h4 className=" my-6 font-bold   underline-offset-2  
     text-center font-lobs "  > Loan Application </h4>   
          <form
          onSubmit={(e) => {
            saveLoan(e);
          }}
        >
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block"> Loan Type </label>

            <select
              className="font-bold    block w-full"
              required
              value={loanType}
              onChange={(e) => {
                setloanType(e.target.value);
              }}
            >
              <option className=" font-thin text-red-900">...select...</option>

              {loanTypes.length > 0 ? (
             loanTypes.map((item) => (
                  <option value={item.loanTypeId}
                    key={item.loanTypeId}
                    className="font-bold"
                  >
                      {item.description}
                    </option>              
                ))
              ) : (
                <p>No loan type in database</p>
              )}
            </select>
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Amount</label>
            <input
              required
              value={principleAmount}
              onChange={(e) => {
                setprincipleAmount(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="number"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Security</label>
            <input
              required
              value={security}
              onChange={(e) => {
                setsecurity(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Loan Period</label>
            <input
              required
              value={loanPeriod}
              onChange={(e) => {
                setloanPeriod(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="number"
            />
          </div>

          <h4 className=" my-2 font-bold   text-[0.77em] 
     text-center font-lobs "  > First Witness  </h4>   
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Name</label>
            <input
              required
              value={firstWitnessName}
              onChange={(e) => {
                setfirstWitnessName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Contact</label>
            <input
              required
              value={firstWitnessContact}
              onChange={(e) => {
                setfirstWitnessContact(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div> <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Address</label>
            <input
              required
              value={firstWitnessAddress}
              onChange={(e) => {
                setfirstWitnessAddress(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <h4 className=" my-2 font-bold   text-[0.77em] 
     text-center font-lobs "  > Second Witness  </h4>   
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Name</label>
            <input
              required
              value={secondWitnessName}
              onChange={(e) => {
                setsecondWitnessName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Contact</label>
            <input
              required
              value={secondWitnessContact}
              onChange={(e) => {
                setsecondWitnessContact(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div> <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Address</label>
            <input
              required
              value={secondWitnessAddress}
              onChange={(e) => {
                setsecondWitnessAddress(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          
          
          
      

          <div
            className="mt-6 text-white submit   font-bold w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-700"
          >
            <input
              className="uppercase  font-lobs text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-300"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}






export default LoanApplication