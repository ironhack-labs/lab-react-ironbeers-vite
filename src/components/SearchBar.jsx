

const SearchBar = ({ filter, setFilter }) => {

  const handleSearch = (event) => {
    const query = event.target.value;
    setFilter(prevState => ({
      ...prevState,
      search: query
    }));
    
  
   
  };

  return (
    <input
      className="form-control mr-sm-2"
      placeholder="Search beer"
      type="search"
      name="search"
      id="search"
      value={filter.search}
      onChange={handleSearch} // Llama a handleSearch cada vez que el valor cambie
    />
  );
};

export default SearchBar;
