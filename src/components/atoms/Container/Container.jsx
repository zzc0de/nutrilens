const Container = ({ className, children }) => {
  return (
    <>
      <div className={`w-full font-Inter ${className}`}>{children}</div>
    </>
  );
};

export default Container;
