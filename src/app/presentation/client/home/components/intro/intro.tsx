import "./intro.css";

export default function Intro() {
  return (
    <div className="w-full  flex flex-row">
      <div className="w-[60%] p-3">
        <h1 className="font-bold text-4xl text-center mt-10">
          Talleres extracurriculares
        </h1>
        <div className="font-normal text-sm mt-4">
          Somos una empresa especializada en el desarrollo de talleres
          deportivos para niños y adolescentes, con el objetivo de formarlos
          integralmente en valores y fundamentos que les permitan desenvolverse
          de manera óptima en la disciplina que elijan.
        </div>
      </div>
      <div className="w-[40%] h-screen bg-red-700">
        {/* <img
          src="https://w0.peakpx.com/wallpaper/58/22/HD-wallpaper-spider-man-game-art-vertical-artwork-comic-art-portrait-display-marvel-super-heroes.jpg"
          alt=""
          className="h-[500px] w-full object-cover rounded-xl shadow-2xl"
        /> */}
      </div>
    </div>
  );
}
