import { Route, Routes } from "react-router-dom";
import { GLOBAL_ROUTES } from "../../shared/routes/global.routes";
import Login from "./login/login";
import Register from "./register/register";

export default function Admin() {
    return (
        <>
            <Routes>
                <Route path={GLOBAL_ROUTES.LOGIN} element={<Login />} />
                <Route path={GLOBAL_ROUTES.REGISTER} element={<Register />} />
            </Routes>
        </>
    )
}