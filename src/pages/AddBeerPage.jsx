import * as beerApi from "../../api/beer";
import { useState } from "react";
import "./AddBeerPage.css";
import Navbar from "../components/Navbar";

function AddBeerPage() {
  const [beerDetails, setbeerDetails] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(beerDetails);
    beerApi.create(beerDetails);
  }

  function handleField(field, value) {
    beerDetails[field] = value;
    setbeerDetails(beerDetails);
    console.log(beerDetails);
  }
  return (
    <div>
      <Navbar />
      <form method="get" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter beer name: </label>
          <input
            onChange={(e) => {
              handleField("name", e.target.value);
            }}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="tagline">Enter beer tagline: </label>
          <input
            onChange={(e) => {
              handleField("tagline", e.target.value);
            }}
            type="text"
            name="tagline"
            id="tagline"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Enter beer description: </label>
          <textarea
            onChange={(e) => {
              handleField("description", e.target.value);
            }}
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="first_brewed">
            Enter when beer was first brewed:{" "}
          </label>
          <input
            onChange={(e) => {
              handleField("first_brewed", e.target.value);
            }}
            type="text"
            name="first_brewed"
            id="first_brewed"
            required
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Enter brewers tips: </label>
          <input
            onChange={(e) => {
              handleField("brewers_tips", e.target.value);
            }}
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            required
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Enter attenuation level: </label>
          <input
            onChange={(e) => {
              handleField("attenuation_level", parseInt(e.target.value));
            }}
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            required
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Enter your contributor name: </label>
          <input
            onChange={(e) => {
              handleField("contributed_by", e.target.value);
            }}
            type="text"
            name="contributed_by"
            id="contributed_by"
            required
          />
        </div>
        <div>
          <button type="submit" value="Add Beer">
            Add Beer
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
