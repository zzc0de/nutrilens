const Card = ({ title, desc, className }) => {
  return (
    <>
      <div
        className={`p-4 flex gap-y-2 flex-col shadow-2xl rounded-lg ${className} max-w-xs`}
      >
        <h1 className="text-xl tracking-wide font-bold">{title}</h1>
        <p className="tracking-wide">{desc}</p>
      </div>
    </>
  );
};

export default Card;
