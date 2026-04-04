import { startTransition, useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All"); 
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (curCountry) => {
    if (search) {
      return curCountry.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
    } else return curCountry;
  };

  // Filter by Region
  const filterRegion = (curCountry) => {
    if (filter === "All") return curCountry;
    return curCountry.region === filter;
  };

  // Logic of Search Filter in Input Box
  const filterCountries = country.filter(
    (curCountry) => searchCountry(curCountry) && filterRegion(curCountry),
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
