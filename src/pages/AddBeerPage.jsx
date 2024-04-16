import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddBeerPage.css"

function BeerForm() {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm();

  const handleForm = (form) => {
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then((response) => console.log("Your beer is in our list!"))
      .catch((error) => console.error("The beer form was an error", error))

    reset();
  }

  return (

      <div className="d-flex justify-content-end container">
        <form onSubmit={handleSubmit(handleForm)}>

        <div className="modal">
          <div className="modal__header">
            <span className="modal__title">Add Beer</span>
            <button className="button button--icon">
              <svg width="24" viewBox="0 0 24 24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </div>
          <div className="modal__body">
            <div className="input">
              <label className="input__label" htmlFor="name">Name</label>
              <input className="input__field" type="text" maxLength={32}
                {...register("tagline")} />
            </div>

            <div className="input">
              <label className="input__label" htmlFor="tagline">Tagline:</label>
              <input className="input__field" type="text" maxLength={32}
                {...register("name", { required: true })}
              />
              {errors.name && <span className="error">Name is required</span>}
            </div>

            <div className="input">
              <label className="input__label" htmlFor="description">Description</label>
              <textarea className="input__field input__field--textarea"  {...register("description")}></textarea>
              <p className="input__description">Give your beer a good description so everyone knows what it's for</p>
            </div>
          </div>

          <div className="input">
            <label className="input__label" htmlFor="first_brewed">First Brewed:</label>
            <input className="input__field" type="text" maxLength={32}
              {...register("first_brewed")} />
          </div>

          <div className="input">
            <label className="input__label" htmlFor="brewers_tips">Brewer's Tips:</label>
            <input className="input__field" type="text" maxLength={32}
              {...register("brewers_tips")} />

          </div>

          <div className="input">
            <label className="input__label" htmlFor="attenuation_level">Attenuation Level (0-100):</label>
            <input className="input__field" type="number" maxLength={32}
              {...register("attenuation_level", {
                required: true,
                min: 0,
                max: 100,
              })}

            />

            <div className="input">
              <label className="input__label" htmlFor="contributed_by">Contributed By:</label>
              <input className="input__field" type="text" maxLength={32}
                {...register("contributed_by")} />

            </div>

          </div>

          <div className="modal__footer">
            <button className="button button--primary" type="submit">Add Beer</button>
          </div>
        </div>
        </form>

      </div>

  );
};



export default BeerForm;
