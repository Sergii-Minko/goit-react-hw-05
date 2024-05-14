import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { AiFillWarning } from "react-icons/ai";

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      toast("Please, enter your query", {
        duration: 3000,
        icon: <AiFillWarning color="red" size={28} />,
      });

      // return alert("Please enter something to search");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={css.Searchbar}>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.SearchFormButton}>
          <span>
            <FiSearch size={20} stroke="#3f51b5" />
          </span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
export default Searchbar;
