import "./intro.css";

export default function Intro() {
  return (
    <div className="Wrapper" id="home">
      <div className="LeftSide">
        <div>
          <h1 className="extraBold font60">Talleres extracurriculares</h1>
          <div className="HeaderP font13 semiBold">
            Somos una empresa especializada en el desarrollo de talleres
            deportivos para niños y adolescentes, con el objetivo de formarlos
            integralmente en valores y fundamentos que les permitan
            desenvolverse de manera óptima en la disciplina que elijan.
          </div>
        </div>
      </div>
      <div className="RightSide">
        <div className="ImageWrapper">
          {/* <Img
          className="radius8"
          src={HeaderImage}
          alt="office"
          style={{ zIndex: 9, width: "426px", height: "607px" }}
        /> */}
          <div className="QuoteWrapper">
            <div className="QuotesWrapper">{/* <QuotesIcon /> */}</div>
            <div>
              <p className="font15 whiteColor">
                <em>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit..."
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                El Coco
              </p>
            </div>
          </div>
          <div className="DotsWrapper">{/* <Dots /> */}</div>
        </div>
        <div className="GreyDiv lightBg"></div>
      </div>
    </div>
  );
}
