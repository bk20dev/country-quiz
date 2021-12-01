import CorrectIcon from "../assets/correct.svg";
import IncorrectIcon from "../assets/incorrect.svg";

const Guess = ({ indicator, title, state = "default", onClick, locked }) => {
  const getIcon = (state) => {
    const imageStyles = "w-6";

    if (state === "incorrect")
      return (
        <img src={IncorrectIcon} alt="Incorrect" className={imageStyles} />
      );
    if (state === "correct")
      return <img src={CorrectIcon} alt="Correct" className={imageStyles} />;
    return null;
  };

  const getStyle = (state, locked) => {
    if (state === "incorrect")
      return `border-red text-white bg-red cursor-default`;
    if (state === "correct")
      return `border-green text-white bg-green cursor-default`;

    const cursor = locked ? "cursor-default" : "cursor-pointer";
    const hover = locked
      ? ""
      : "hover:border-gold hover:text-white hover:bg-gold";
    return `border-purple text-purple bg-white ${cursor} ${hover}`;
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-12 rounded-xl border-2 px-5 py-3 w-full text-left ${getStyle(
        state,
        locked
      )}`}
    >
      <span className="font-medium text-2xl">{indicator}</span>
      <span className="flex-grow font-medium text-lg">{title}</span>
      {getIcon(state)}
    </button>
  );
};

export default Guess;
