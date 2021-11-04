import Input from "./Input";
const Search = ({ searchText, setSearchText }) => {
  return (
    <div>
      <header>
        <h1>💩 EmojiSearch 😆</h1>
        <Input setSearchText={setSearchText} searchText={searchText} />
      </header>
    </div>
  );
};

export default Search;
