const Container = ({ className, children }) => {
  return (
    <>
      <div className={`w-full max-w-screen-lg font-Inter mx-auto ${className}`}>
        {children}
      </div>
    </>
  );
};

export default Container;
