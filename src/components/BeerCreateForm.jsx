
const BeerCreateForm = ({ handleSubmit, handleChange, formData }) => {
  return (
    <div>
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Tagline:
          <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <br />
        <label>
          First Brewed:
          <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />
        </label>
        <br />
        <label>
          Brewer's Tips:
          <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />
        </label>
        <br />
        <label>
          Attenuation Level:
          <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />
        </label>
        <br />
        <label>
          Contributed By:
          <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default BeerCreateForm;