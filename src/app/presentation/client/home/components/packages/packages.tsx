import PackageCard from "../../../../../shared/elements/package-card/package-card";
import "./packages.css";

export default function Packages() {
  return (
    <div className="w-[80%] m-auto mt-20 mb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold mb-3">Paquetes</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="w-[80%] m-auto flex justify-around">
        <PackageCard />
        <PackageCard />
      </div>
    </div>
  );
}
