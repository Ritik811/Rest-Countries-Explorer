export const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const handleFilterChange = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };
  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
