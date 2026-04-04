import { startTransition, useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/getApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/UI/CountryCard";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountry(res.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {country.map((curCountry, index) => {
          return <CountryCard curCountry={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
