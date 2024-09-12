import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
    
    function RecipeDetail() {
     let { id } = useParams()

        let [proudct,SetProudct] = useState([]) ; 

        let api = "../data.json" ; 


        useEffect(() =>{
            fetch(`${api}`)
           .then((res) => res.json())
           .then((data) => SetProudct(data))
        },[])   

        let prom  = proudct.map((pro ,index)=> pro.id === parseInt(id) &&  <Card key={index}  reCard={pro} /> ) ; 
      return (
      <>
        {prom}
       
        </>
      )
    }
    // "ingredients", "instructions", "image"
    export default RecipeDetail ; 