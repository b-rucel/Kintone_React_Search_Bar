// SearchBar.js - Search Bar component - Creates the search bar input

// Accepts a “props” (i.e. properties) object passed from parent component
// Returns a React element

// visually-hidden label is for accessibility purpose: screen reader sees it while others don't

import { ImSearch } from "react-icons/im";

export default function SearchBar(props) {

  return (
    <div className='Search'>
      <form action='/' method='get'>
        <label htmlFor='header-search'>
          <span className='visually-hidden'>Search Manga Titles</span>
        </label>
        <input
          className='SearchBar'
          type='text'
          id='header-search'
          placeholder='Search Manga Titles'
          name='Search Bar for Manga Titles'
          onChange={props.handleChange}
        />
        <button className="SearchButton" type='button'><ImSearch /></button>
      </form>
    </div>
  );
};