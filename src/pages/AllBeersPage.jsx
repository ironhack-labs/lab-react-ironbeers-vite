
import beersService from "../services/beers.services";
import BeerList from "../components/BeerList/BeerList"
import { useEffect, useState } from "react";

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <BeerList beers={beers} />
        </div>

    )

}

export default AllBeersPage;
