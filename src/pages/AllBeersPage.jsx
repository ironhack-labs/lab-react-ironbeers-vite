import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((resp) => {
        setBeers(resp.data);
      })
      .catch((err) => {
        console.log("Error fetching data from API", err);
      });
  }, []);

  return (
    <div className="AllBeers">
      {beers &&
        beers.map((beer) => {
          return (
            <div>
              <Link to={`/beers/${beer._id}`} className="Foundbeer">
                <div className="Imgcontainer">
                <img src={beer.image_url} />
                </div>
                <div className="Beerinfo">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>
                    <b>Created by: </b>
                    {beer.contributed_by}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default AllBeersPage;

//resp.data:
// attenuation_level
// 75
// brewers_tips
// :
// "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus."
// contributed_by
// :
// "Sam Mason <samjbmason>"
// description
// :
// "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once."
// expireAt
// :
// "2023-12-01T07:00:48.656Z"
// first_brewed
// :
// "09/2007"
// image_url
// :
// "https://images.punkapi.com/v2/keg.png"
// name
// :
// "Buzz"
// tagline
// :
// "A Real Bitter Experience."
// __v
// :
// 0
// _id
// :
// "656984a02bb64100027ba128"
