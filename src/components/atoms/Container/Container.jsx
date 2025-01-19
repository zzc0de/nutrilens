// eslint-disable-next-line react/prop-types
const Container = ({ className, children }) => {
  return (
    <>
      <div className={`w-full max-w-screen-xl font-Inter mx-auto ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
