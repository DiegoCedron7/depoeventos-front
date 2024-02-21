import Courses from "../courses/courses";
import Campuses from "./components/campuses/campuses";
import Intro from "./components/intro/intro";
import Packages from "./components/packages/packages";

export default function Home() {
  return (
    <>
      <Intro />
      <Courses />
      <Packages />
      <Campuses />
    </>
  );
}
