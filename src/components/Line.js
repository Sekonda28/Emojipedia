import { useState } from "react";

const Line = (props) => {
  const [display, setDisplay] = useState(false);
  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(props.symbol);
    alert(["Emoji copied !"]);
  };
  return (
    <div
      className="line"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={copy}
    >
      <span>
        {props.symbol} {props.title}
      </span>
      {display && <span className="copy">Click to copy !</span>}
    </div>
  );
};

export default Line;
