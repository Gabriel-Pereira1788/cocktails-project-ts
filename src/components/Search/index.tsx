import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  memo,
} from "react";
import { useApiContext } from "../../contexts/ApiContext";
import { useFetch } from "../../hooks/useFetch";
type Props = {};

const Search = () => {
  const { setFindByText } = useApiContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFindByText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default memo(Search);
