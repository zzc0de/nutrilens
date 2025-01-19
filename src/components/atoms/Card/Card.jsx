const Card = ({ title, desc, className }) => {
  return (
    <>
      <div
        className={`p-4 flex gap-y-2 flex-col shadow-2xl rounded-lg ${className}`}
      >
        <h1 className="text-xl font-bold tracking-wide">{title}</h1>
        <p className="tracking-wide">{desc}</p>
      </div>
    </>
  );
};

export default Card;
