import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";
import LogoIcon from "../../../../assets/logo.png";
import { UserApi } from "../../../infrastructure/api/user.api";

// React Icons
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

export default function Login() {
  const userApi = new UserApi();

  type LoginType = {
    email?: string;
    password?: string;
  };

  const handleSignIn = async (values: any) => {
    try {
      console.log(values);
      await userApi.signIn(values.email, values.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center w-full h-screen">
        <>
          <img
            className="w-1/4 h-screen object-cover max-md:hidden relative"
            src="https://www.gifcen.com/wp-content/uploads/2023/08/avengers-gif-6.gif"
            alt=""
          />
          <Link
            className="pointer flexNullCenter absolute top-5 left-5"
            to="/"
            //   smooth={true}
          >
            <img
              src={LogoIcon}
              alt="DepoEventos"
              style={{ width: "70px", marginBottom: "30px" }}
            />
          </Link>
        </>

        <Form
          name="login"
          onFinish={handleSignIn}
          onFinishFailed={() => {
            console.log("Fallo");
          }}
          className="max-md:mx-20 md:mx-32"
        >
          <h2 className="text-3xl text-center font-semibold mb-8">
            Bienvenido a DepoEventos
          </h2>

          {/* Input Email */}
          <Form.Item<LoginType>
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor, ingresa tu correo electrónico.",
              },
              {
                type: "email",
                message: "Ingresa un correo electrónico válido.",
              },
            ]}
            className="mb-10"
          >
            <Input
              placeholder="Ingresa tu username"
              size="large"
              prefix={<MdEmail className="site-form-item-icon me-1" />}
            />
          </Form.Item>

          {/* Input Password */}
          <Form.Item<LoginType>
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su contraseña!",
              },
            ]}
            className="mb-10"
          >
            <Input.Password
              placeholder="Ingresa tu contraseña"
              size="large"
              prefix={<FaKey className="site-form-item-icon me-1" />}
            />
          </Form.Item>

          {/* Buttom */}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              className="bg-[#0D0C22] text-white font-semibold w-full border rounded-full"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
          <p className=" text-center mt-4">
            Don't have an account? {""}
            <Link to="/register" className="text-gray-500">
              Sign up
            </Link>
          </p>
        </Form>

        {/* <form action="" onSubmit={handleSubmit}> */}
      </div>
      {/* LOADER */}
      {/* <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            onClick={() => setLoading(false)}
          >
            <CircularProgress color="inherit" />
          </Backdrop> */}
      {/* LOADER */}
    </>
  );
}
