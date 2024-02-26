import { Link } from "react-router-dom";
import LogoIcon from "../../../../assets/logo.png";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";

export default function Register() {
  const onFinish = (values: any) => {
    values.birth_date = values.birth_date.format("YYYY-MM-DD");

    console.log("Success:", values);
  };
  return (
    <>
      <div className="flex items-center w-full h-screen">
        <>
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
        </>
        <>
          <Form
            name="register"
            onFinish={onFinish}
            autoComplete="off"
            className="w-[750px] flex flex-col justify-between max-md:mx-20 md:mx-32"
          >
            {/* ------------------Input Nombre------------------ */}
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su nombre",
                },
              ]}
            >
              <Input
                className="w-full border rounded-2xl p-4 mb-3"
                placeholder="Nombre"
                size="large"
              />
            </Form.Item>

            {/* ------------------Input Apellido Paterno------------------ */}
            <div className={`grid grid-cols-2 gap-4 mb-3`}>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su apellido paterno",
                  },
                ]}
              >
                <Input
                  className="w-full border rounded-2xl p-4"
                  placeholder="Apellido Paterno"
                  size="large"
                />
              </Form.Item>

              {/* ------------------Input Apellido Materno------------------ */}
              <Form.Item
                name="mothersLastName"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su apellido materno",
                  },
                ]}
              >
                <Input
                  className="w-full border rounded-2xl p-4"
                  placeholder="Apellido Materno"
                  size="large"
                />
              </Form.Item>
            </div>

            {/* ------------------Input Tipo de Documento------------------ */}
            <div className={`grid grid-cols-2 gap-4 `}>
              <Form.Item
                name="documentType"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su tipo de documento",
                  },
                ]}
              >
                <Select
                  size="large"
                  className="w-full border rounded-2xl mb-3"
                  placeholder="Tipo de Documento"
                >
                  <Select.Option value="DNI">DNI</Select.Option>
                  <Select.Option value="PASSPORT">Passport</Select.Option>
                </Select>
              </Form.Item>

              {/* ------------------Input Número de Documento------------------ */}
              <Form.Item
                name="document_number"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su número de documento",
                  },
                ]}
              >
                <InputNumber
                  className="w-full border rounded-2xl p-4 mb-3"
                  placeholder="Número de Documento"
                  size="large"
                />
              </Form.Item>
            </div>

            {/* ------------------Input Correo Electronico------------------ */}
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su correo electrónico",
                },
              ]}
            >
              <Input
                className="w-full border rounded-2xl p-4 mb-3"
                placeholder="Correo Electrónico"
                size="large"
              />
            </Form.Item>

            {/* ------------------Input Contraseña------------------ */}

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su contraseña",
                },
              ]}
            >
              <Input.Password
                className="w-full border rounded-2xl p-4 mb-3"
                placeholder="Contraseña"
                size="large"
              />
            </Form.Item>

            {/* ------------------Input Número de Contacto------------------ */}
            <div className={`grid grid-cols-2 gap-4`}>
              <Form.Item
                name="contact_number"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su número de contacto",
                  },
                ]}
              >
                <InputNumber
                  className="w-full border rounded-2xl p-4"
                  placeholder="Número de Contacto"
                  size="large"
                />
              </Form.Item>

              {/* ------------------Input Número de Emergencia------------------ */}
              <Form.Item
                name="emergency_contact_number"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su número de emergencia",
                  },
                ]}
              >
                <InputNumber
                  className="w-full border rounded-2xl p-4 mb-4"
                  placeholder="Número de Emergencia"
                  size="large"
                />
              </Form.Item>
            </div>
            {/* ------------------Input País------------------ */}

            <div className={`grid grid-cols-2 gap-4 mb-3 `}>
              <Form.Item
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su país",
                  },
                ]}
              >
                <Input
                  className="w-full border rounded-2xl p-4"
                  placeholder="País"
                  size="large"
                />
              </Form.Item>

              {/* ------------------Input Fecha de Nacimiento------------------ */}
              <Form.Item
                name="birth_date"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su fecha de nacimiento",
                  },
                ]}
              >
                <DatePicker
                  className="w-full border rounded-2xl p-4"
                  placeholder="Fecha de Nacimiento"
                  size="large"
                />
              </Form.Item>
            </div>

            {/* ------------------Input Dirección------------------ */}
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su dirección",
                },
              ]}
            >
              <Input
                className="w-full border rounded-2xl p-4 mb-4"
                placeholder="Dirección"
                size="large"
              />
            </Form.Item>

            {/* ------------------Botón de Registro------------------ */}
            <Form.Item>
              <button
                type="submit"
                className="w-full bg-[#f46e16] text-white font-semibold rounded-2xl p-4"
              >
                Registrarse
              </button>
            </Form.Item>
          </Form>
        </>

        {/* <form action="">
          <div className="w-[550px] flex flex-col justify-between max-md:mx-20 md:mx-32">
            <div>
              <h2 className="text-3xl text-center font-semibold mb-8">
                Crea un Cuenta
              </h2>
              <div>
                <div className={`grid grid-cols-2 gap-4 mb-8 `}>
                  <div className="col-span-2">
                    <p className="font-semibold mb-2">Nombre</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={firstName}
                      //   onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Apellido Paterno</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={lastName}
                      //   onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Apellido Materno</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={motherLastName}
                      //   onChange={(e) => setMotherLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Tipo de Documento</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={documentType}
                      //   onChange={(e) => setDocumentType(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Número de Documento</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={documentNumber}
                      //   onChange={(e) => setDocumentNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold mb-2">Email</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={username}
                      //   onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold mb-2">Password</p>
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
                    <p className="font-semibold mb-2">Telefono de Contacto</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={contactNumber}
                      //   onChange={(e) => setContactNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Telefono de Emergencia</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={emergencyContactNumber}
                      //   onChange={(e) => setEmergencyContactNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Country</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={country}
                      //   onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fecha de Nacimiento</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={birthDate}
                      //   onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold mb-2">Dirección</p>
                    <input
                      className="w-full border rounded-2xl p-4 outline-slate-600 focus:border-4 focus:shadow-[#f46e16]"
                      type="text"
                      //   value={address}
                      //   onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                

                <p className=" text-center mt-4">
                  Do you have an account? {""}
                  <Link to="/login" className="text-gray-500">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
}
