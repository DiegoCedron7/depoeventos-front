import Courses from "./components/courses/courses";
import Campuses from "./components/campuses/campuses";
import Intro from "./components/intro/intro";
import Packages from "./components/packages/packages";
import AddImage1 from "../../../../assets/logo.png";
import AddImage2 from "../../../../assets/logo.png";
import AddImage3 from "../../../../assets/logo.png";
import AddImage4 from "../../../../assets/logo.png";
import LogoVillaCaritas from "../../../../assets/logo.png";
export default function Home() {
  const data = [
    {
      id: 1,
      direction: "La Molina, Lima, Perú",
      title: "Colegio San Pedro",
      description:
        "Ubicado en una comunidad vibrante, el Colegio San Pedro se destaca por ofrecer una educación integral que nutre el intelecto y el espíritu. Con instalaciones modernas y un compromiso con la excelencia académica, nuestro colegio es un lugar donde los estudiantes florecen y se preparan para enfrentar los desafíos del mundo con confianza y ética.",
      img1: AddImage1,
      img2: AddImage2,
      img3: AddImage3,
      img4: AddImage4,
    },
    {
      id: 2,
      direction: "La Molina, Lima, Perú",
      title: "Colegio Villa Caritas",
      description:
        "En el corazón de la encantadora Villa Caritas, nuestro colegio es un faro de aprendizaje y desarrollo personal. Con un enfoque centrado en los valores y una comunidad educativa acogedora, el Colegio Villa Caritas se esfuerza por inspirar la curiosidad intelectual y fomentar habilidades para la vida en un ambiente enriquecedor y estimulante",
      img1: AddImage1,
      img2: AddImage2,
      img3: LogoVillaCaritas,
      img4: AddImage4,
    },
    {
      id: 3,
      direction: "Santiago de surco, Lima, Perú",
      title: "Club Palestino-Árabe",
      description:
        "El Club Palestino-Árabe es más que un lugar de encuentro, es una comunidad que celebra la rica herencia cultural y promueve la amistad entre personas de diversas raíces. Con instalaciones deportivas de primera clase y eventos culturales emocionantes, el club es un espacio donde la diversidad se une para compartir experiencias, fortalecer lazos y construir un futuro inclusivo.",
      img1: AddImage1,
      img2: AddImage2,
      img3: AddImage3,
      img4: AddImage4,
    },
  ];
  return (
    <>
      <div className="mt-12">
        <Intro />
        <Courses />
        <Packages />
        <Campuses slide={data} />
      </div>
    </>
  );
}
