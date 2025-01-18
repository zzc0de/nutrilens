import Button from "../../components/atoms/Button/Button";
import Container from "../../components/atoms/Container/Container";
import BenefitsList from "../../components/molecules/BenefitsList";
import HeroSection from "../../components/molecules/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection
        title={"Kenali Kalori Makanan Anda"}
        desc={
          "Dengan aplikasi ini, Anda bisa mengetahui kandungan kalori dan nutrisi setiap hidangan hanya dengan memindainya. Dilengkapi dengan teknologi AI canggih."
        }
      />
      <Container className={"flex flex-col gap-y-6"}>
        <div className="w-full p-6 text-center">
          <h1 className="text-3xl font-extrabold">
            Kenapa harus <span className="text-orange-400">Nutrilens</span>?
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
      <div className="w-full bg-primary-blue p-10 gap-y-6 flex flex-col">
        <h1 className="text-center font-bold text-white text-4xl font-Inter">
          Manfaat Nutrilens
        </h1>
        <BenefitsList
          benefits={[
            {
              title: "Cepat",
              desc: "Dapatkan informasi nutrisi dalam hitungan detik.",
            },
            {
              title: "Tepat",
              desc: "Dapatkan informasi nutrisi yang akurat.",
            },
            {
              title: "Mudah",
              desc: "Pindai makanan Anda dan dapatkan informasi nutrisi.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Home;
