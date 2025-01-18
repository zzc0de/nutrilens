import Container from "../../components/atoms/Container/Container";

const About = () => {
  return (
    <>
      <div className="h-screen -z-10 relative w-full">
        <img
          src="/src/assets/health.jpg"
          alt="health"
          className="w-full h-full object-cover absolute inset-0 z-0 brightness-50"
        />
        <Container className={"text-white h-screen z-10 relative w-full"}>
          <div className="flex flex-col items-start justify-center h-screen max-w-screen-sm">
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
