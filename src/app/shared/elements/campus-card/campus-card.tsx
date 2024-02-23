
export default function CampusCard() {
    return (
        <div className="w-[90%] h-[28rem] m-auto mb-20 rounded-2xl flex shadow-md">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <div className="px-12">
                    <h3 className="text-md font-medium">La Molina, Lima, Perú</h3>
                    <h2 className="text-3xl font-extrabold mb-3">Colegio San Pedro</h2>
                    <p className="text-sm">
                        Ubicado en una comunidad vibrante, el Colegio San Pedro se destaca por ofrecer una educación integral que nutre el intelecto y el espíritu. Con instalaciones modernas y un compromiso con la excelencia académica, nuestro colegio es un lugar donde los estudiantes florecen y se preparan para enfrentar los desafíos del mundo con confianza y ética.
                    </p>
                </div>
                <img
                    src="https://educacionalfuturo.com/wp-content/uploads/2018/08/Logo-SP.png"
                    className="w-20 pt-8"
                    alt=""
                />
            </div>
            <div className="w-1/2 h-full flex justify-center items-center">
                <img
                    src="https://www.colsanpedro.com/imagenes/DSC_0014.jpg"
                    className="rounded-3xl object-cover w-[90%] shadow-xl"
                    alt=""
                />
            </div>
        </div>
    )
}
