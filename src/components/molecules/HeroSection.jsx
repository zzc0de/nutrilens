import Container from "../atoms/Container/Container";
import Button from "../atoms/Button/Button";

const HeroSection = ({ title, desc }) => {
  return (
    <>
      <Container className={"h-screen flex justify-center items-center"}>
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-y-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p>{desc}</p>
          <Button className={"bg-primary-blue text-white"}>Get Started</Button>
        </div>
        <div className="w-1/2 h-full items-center justify-center flex">
          <img
            src="/src/assets/health.svg"
            alt="hero"
            className="object-cover h-96"
          />
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
