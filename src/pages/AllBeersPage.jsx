import  {useState, useEffect} from "react"
import axios from "axios"

function AllBeersPage() {
    const [beers, setBeers] = useState(null) // null or [] ?

    useEffect(()=> {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((beersFromApi)=> {
            console.log(beersFromApi, 'beers from API')
            setBeers(beersFromApi.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

}

export default AllBeersPage;
