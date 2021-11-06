import "./SearchResults.js";

export const SearchBar = () => {
  document.getElementById('search').innerHTML = `
    <input id="search-bar" type="search" class="form-control" placeholder="Search...">
  `;
}