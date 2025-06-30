const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border w-full max-w-[360px] bg-palePink font-bold border-vividYellow p-2 text-vividYellow rounded hover:scale-750 hover:shadow-none hover:text-palePink hover:bg-vividYellow hover:border hover:border-palePink transition-all ">
      {btnText}
    </button>
  );
};

export default Button;
