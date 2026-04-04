export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  country,
  setCountry,
}) => {
  const handleInputChange = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const handleFilterChange = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };

  // des or asc
  const handleSortCountry = (value) => {
    console.log("yes");
    const sortCountry = [...country].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountry(sortCountry);
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
        <button onClick={() => handleSortCountry("asc")}>ASC</button>
      </div>

      <div>
        <button onClick={() => handleSortCountry("dsc")}>DES</button>
      </div>

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
