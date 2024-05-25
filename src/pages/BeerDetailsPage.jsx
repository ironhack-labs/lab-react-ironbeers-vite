import * as beerApi from "../../api/beer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
  const [beerDetail, setbeerDetail] = useState({});
  const { beerId } = useParams();
  const imgStyle = {
    width: "90%"
  };
  const divStyle = {
     padding: "5px",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     margin: "10px"
  };
  const sideBySide = {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    margin: "5px"
  }

  useEffect(() => {
    beerApi
      .getOne(beerId)
      .then((response) => {
        console.log("abs",response)
        const { data } = response;
        setbeerDetail(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div style={divStyle} key={beerDetail._id}>
        <div>
          <img src={beerDetail.image_url} alt="beer" style={imgStyle} />
        </div>
        <div>
            <div style={sideBySide}>
                <h3 style={{ fontWeight: "100" }}>{beerDetail.name}</h3>
                <p style={{color:"grey", fontSize: "1.4em"}}>{beerDetail.attenuation_level}</p>
            </div>
            <div style={sideBySide}>
                <p style={{color:"grey"}}>{beerDetail.tagline}</p>
                <p style={{fontSize:"0.8em",fontWeight: "bold"}}>{beerDetail.first_brewed}</p>
            </div>
          <p>{beerDetail.description}</p>
          <p style={{color:"#888585", fontSize: "0.8em",padding:"10px 0",fontWeight: "bold"}}>{beerDetail.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetailsPage;
