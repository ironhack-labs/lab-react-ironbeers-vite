import { useEffect, useState } from "react";
import Beer from '../components/Beer'
import FilterBeers from "../components/FilterBeers";
function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((response)=>response.json())
            .then((data)=>setBeers(data))
            .catch(err => console.log(err));
    },[])

    if(beers.length === 0){
        return <div>Loading...</div>;
    }

    function noResults(){
        return <div> There are no entries for the beer you are searching for </div>;
    }

    const allSearchVal = (data) => {
        //console.log(data);
        if(data.length>0){
            setBeers(data);
        }
    }

    return (
        <div>
            <FilterBeers allSearchVal={allSearchVal}/>
            {beers.map(beer=>{
               return (
                    <Beer key={beer._id} beer={beer}/>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
