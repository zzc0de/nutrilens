import Button from "../../components/atoms/Button/Button";
import Container from "../../components/atoms/Container/Container";

const Home = () => {
  return (
    <>
      <Container className={"h-screen flex justify-center items-center"}>
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-y-4">
          <h1 className="text-5xl font-bold">Kenali Kalori Makanan Anda</h1>
          <p>
            Dengan aplikasi ini, Anda bisa mengetahui kandungan kalori dan
            nutrisi setiap hidangan hanya dengan memindainya. Dilengkapi dengan
            teknologi AI canggih.
          </p>
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
      <Container className={"flex flex-col"}>
        <div className="w-full p-6 text-center">
          <h1 className="text-3xl font-extrabold underline underline-offset-8">
            Kenapa harus NutriLens?
          </h1>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col justify-center items-start gap-y-3">
            <h1 className="font-bold text-4xl">Tingkatkan Pola Makan Anda</h1>
            <p>
              Lihat mana dari 84 vitamin dan mineral penting yang Anda dapatkan
              paling banyak dan paling sedikit, yang membantu Anda mengonsumsi
              makanan yang lebih seimbang.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="/src/assets/diet-animate.svg"
              alt="diet"
              className="h-96"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
