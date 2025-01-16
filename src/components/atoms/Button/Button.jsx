const Button = ({ children, onClick, className }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-6 py-2 rounded-xl font-Inter ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
