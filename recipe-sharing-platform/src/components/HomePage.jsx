import { useEffect, useState } from "react";
import Card from "./Card";

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
  </>);
}

export default HomePage;