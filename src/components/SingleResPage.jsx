import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// resID varies from 52764 to 52788
const SingleResPage = (props) => {
    const [singleResData, setSingleResData] = useState();

    const {resID} = useParams(); // useParams() is a hook that returns an object which has params from url (query).
    console.log(resID);

    // const {ID} = props; // destructuring of props

    useEffect(()=>{
        fetchData();
    }, []);
    async function fetchData(){
        const data = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+resID);

        const jsonDATA = await data.json();
        setSingleResData(jsonDATA);
    }

    // if(singleResData == null){
    //     return <Shimmer />
    // }
    // destructuring
    console.log(singleResData.meals[0]);
    const {strMeal, strCategory, strArea, strInstructions} = singleResData?.meals[0];
    return(
    <div>
      <h1>resId = {resID}</h1>
      <h2>{strMeal}</h2>
      <p>{strCategory}</p>
      <p>{strArea}</p>
      <p>{strInstructions}</p>
    </div>
  );
};

export default SingleResPage;
