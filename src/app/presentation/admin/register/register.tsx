import { Link } from "react-router-dom";
import LogoIcon from "../../../../assets/logo.png";

export default function Register() {
    return (
        <>
            <div className="flex items-center w-full h-screen">
                <img
                    className="w-1/4 h-screen object-cover max-md:hidden relative"
                    src="https://media.tenor.com/FWAw0kfPBZoAAAAM/regular-show-rigby.gif"
                    alt=""
                />
                <Link className="pointer flexNullCenter absolute top-5 left-5" to="/">
                    <img
                        src={LogoIcon}
                        alt="DepoEventos"
                        style={{ width: "70px", marginBottom: "30px" }}
                    />
                </Link>
                {/* <form action="" onSubmit={handleSubmit}> */}
                <form action="">
                    <div className="w-[550px] flex flex-col justify-between max-md:mx-20 md:mx-32">
                        <div>
                            <h2 className="text-3xl text-center font-semibold mb-8">
                                Crea un Cuenta
                            </h2>
                            <div>
                                <div className={`grid grid-cols-2 gap-4 mb-8 `}>
                                    <div className="col-span-2">
                                        <p className="font-semibold mb-2">
                                            Nombre
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={firstName}
                                        //   onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Apellido Paterno
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={lastName}
                                        //   onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Apellido Materno
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={motherLastName}
                                        //   onChange={(e) => setMotherLastName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Tipo de Documento
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={documentType}
                                        //   onChange={(e) => setDocumentType(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Número de Documento
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={documentNumber}
                                        //   onChange={(e) => setDocumentNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <p className="font-semibold mb-2">
                                            Email
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={username}
                                        //   onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <p className="font-semibold mb-2">
                                            Password
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="password"
                                        //   value={password}
                                        //   onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={`grid grid-cols-2 gap-4 mb-8 `}>

                                    <div>
                                        <p className="font-semibold mb-2">
                                            Telefono de Contacto
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={contactNumber}
                                        //   onChange={(e) => setContactNumber(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Telefono de Emergencia
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={emergencyContactNumber}
                                        //   onChange={(e) => setEmergencyContactNumber(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Country
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={country}
                                        //   onChange={(e) => setCountry(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-semibold mb-2">
                                            Fecha de Nacimiento
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={birthDate}
                                        //   onChange={(e) => setBirthDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <p className="font-semibold mb-2">
                                            Dirección
                                        </p>
                                        <input
                                            className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                                            type="text"
                                        //   value={address}
                                        //   onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Botón Siguiente */}
                                
                                <p className=" text-center mt-4">
                                    Do you have an account? {""}
                                    <Link
                                        to="/login"
                                        className="text-gray-500"
                                    >
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
