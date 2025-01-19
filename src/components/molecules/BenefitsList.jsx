import Card from "../atoms/Card/Card";
import Container from "../atoms/Container/Container";

const BenefitsList = ({ benefits }) => {
  return (
    <>
      <Container
        className={
          "grid grid-cols-1 md:grid-cols-3 max-w-fit gap-4 bg-white justify-items-center p-4 rounded-md"
        }
      >
        {benefits.map((benefit, index) => (
          <Card
            className={"text-white bg-primary-blue max-w-xs h-40"}
            title={benefit.title}
            key={index}
            desc={benefit.desc}
          />
        ))}
      </Container>
    </>
  );
};

export default BenefitsList;
