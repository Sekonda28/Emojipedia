const Input = ({ setSearchText }) => {
  const handleInput = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <input
      onChange={handleInput}
      type="text"
      placeholder="What emoji are you looking for ?"
    />
  );
};

export default Input;
