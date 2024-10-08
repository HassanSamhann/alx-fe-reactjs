import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

function HomePage() {
  let [data, Setdata]= useState([]);

  useEffect(
    () => {
      fetch("../data.json")
      .then((res) =>res.json())
        .then((sf) => Setdata(sf))},
    []
  );
  
  let resdata = data.map((data,index) => <Card key={index} reCard={data}  />   )
  return (<>
    <div className="flex justify-between flex-wrap gap-6 mx-10">
    {resdata}
    </div>
    <div className="card xl:w-1/5 overflow-hidden  border-2 grid   grid-cols-3 border-cyan-500 my-5 shadow-xl rounded-md sm:w-full  flex-col gap-3 items-center hover:shadow-2xl transition ">
      <img className="w-40 hover:scale-110 transition" src="" alt="" />
      <h2 className="text-center text-black font-bold">{}</h2>
      <p className="text-center text-black">{}</p>
    </div>
    <div className="card xl:w-1/5 overflow-hidden  border-2 grid grid-cols-1  border-cyan-500 my-5 shadow-xl rounded-md sm:w-full  flex-col gap-3 items-center hover:shadow-2xl transition ">
      <img className="w-40 hover:scale-110 transition" src="" alt="" />
      <h2 className="text-center text-black font-bold">{}</h2>
      <p className="text-center text-black">{}</p>
    </div>
    <div className="card xl:w-1/5 overflow-hidden  border-2 grid grid-cols-2  border-cyan-500 my-5 shadow-xl rounded-md sm:w-full  flex-col gap-3 items-center hover:shadow-2xl transition ">
      <img className="w-40 hover:scale-110 transition" src="" alt="" />
      <h2 className="text-center text-black font-bold">{}</h2>
      <p className="text-center text-black">{}</p>
      <Link  to={""}></Link>
    </div>

  </>);
}

export default HomePage;