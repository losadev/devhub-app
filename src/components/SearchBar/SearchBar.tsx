import { ChangeEvent } from 'react';
import './index.css'

type Props = {
  searchResource: (event:ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = ({searchResource}:Props) => {

  return (
    <div className="searchbar-container">
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
      onChange={searchResource}
        type="text"
        name="resourceInput"
        placeholder="Search developer resources..."
      />
    </div>
  );
};

export default SearchBar;
