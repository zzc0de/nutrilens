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
          <div className="flex flex-col items-start justify-center w-1/2 gap-y-3">
            <h1 className="text-4xl font-bold">Tingkatkan Pola Makan Anda</h1>
            <p>
              Lihat mana dari 84 vitamin dan mineral penting yang Anda dapatkan
              paling banyak dan paling sedikit, yang membantu Anda mengonsumsi
              makanan yang lebih seimbang.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/2">
            <img
              src="/src/assets/diet-animate.svg"
              alt="diet"
              className="h-96"
            />
          </div>
        </div>
      </Container>
      <div className="flex flex-col w-full p-10 bg-primary-blue gap-y-6">
        <h1 className="text-4xl font-bold text-center text-white font-Inter">
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
