import Card from "../atoms/Card/Card";
import Container from "../atoms/Container/Container";

const BenefitsList = ({ benefits }) => {
  return (
    <>
      <Container
        className={
          "flex flex-row bg-white p-6 rounded-md justify-center items-center gap-x-4"
        }
      >
        {benefits.map((benefit, index) => (
          <Card
            className={"bg-primary-blue text-white"}
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
