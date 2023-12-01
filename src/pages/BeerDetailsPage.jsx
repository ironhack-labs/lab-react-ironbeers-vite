import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [beers, setBeers] = useState({});
  const [data, setData] = useState(false);
  const { _id } = useParams();
  useEffect(() => {
    axios
      .get(API_URL + _id)
      .then((resp) => {
        setBeers(resp.data);
        setData(true);
      })
      .catch((err) => {
        console.log("Error fetching data from API", err);
      });
  }, [_id]);

  return (
    <div>
      {data && (
        <div className="BeerDetailsPage">
          <img src={beers.image_url} />
        </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
