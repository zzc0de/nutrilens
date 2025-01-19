import Container from "../../components/atoms/Container/Container";

const About = () => {
  return (
    <>
      <div className="relative w-full h-screen -z-10">
        <img
          src="/src/assets/health.jpg"
          alt="health"
          className="absolute object-cover w-full h-full brightness-50"
        />
        <Container className={"text-white h-screen z-10 relative w-full px-2 "}>
          <div className="flex flex-col items-start justify-center h-screen max-w-xs md:max-w-screen-sm">
            <h1 className="text-4xl font-bold tracking-wider">Tentang Kami</h1>
            <p>
              Di <span className="text-orange-400">Nutilens</span>, kami percaya
              bahwa makanan adalah kunci kesehatan yang baik. Kami berdedikasi
              untuk membantu Anda membuat keputusan yang lebih baik tentang
              nutrisi dengan menyediakan informasi yang akurat dan dapat
              diakses.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
