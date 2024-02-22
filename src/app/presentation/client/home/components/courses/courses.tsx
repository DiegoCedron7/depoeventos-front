import "./courses.css";
import ProjectImg3 from "../../../../../../assets/img/projects/3.png";
import ProjectImg4 from "../../../../../../assets/img/projects/4.png";
import ProjectImg5 from "../../../../../../assets/img/projects/5.png";
import ProjectImg6 from "../../../../../../assets/img/projects/6.png";
import ProjectImg2 from "../../../../../../assets/img/projects/tennis.jpg";
import CustomCard from "../../../../../shared/elements/card/card.tsx";

export default function Courses() {

  const projects = [
    {
      image: "https://yt3.googleusercontent.com/ytc/AIf8zZQDYAtrD9fQrLMzN22rP50lt2DlOp0UalGBU5RP4A=s900-c-k-c0x00ffffff-no-rj",
      title: "Futbol",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
      image: ProjectImg2,
      title: "Tennis",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
      image: ProjectImg3,
      title: "Basket",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
      image: ProjectImg4,
      title: "Natación",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
      image: ProjectImg5,
      title: "Gimnasia",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
      image: ProjectImg6,
      title: "Skate",
      description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
  ];


  return (
    <div className="w-[80%] m-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-3">Talleres</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      <div className="place-items-center grid grid-rows-2 grid-flow-col gap-4 gap-y-12 max-sm:grid-rows-6 max-lg:grid-rows-4">
        {projects.map(project => (
          <CustomCard data={project} />
        ))}
      </div>
    </div>
  );
}
