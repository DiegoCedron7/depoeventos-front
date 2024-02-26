import { Route, Routes } from "react-router-dom";
import { GLOBAL_ROUTES } from "../../shared/routes/global.routes";
import Home from "./home/home";
import Layout from "./layout/layout";

export default function Client() {

    return (
        <>
            <Routes>
                <Route path={GLOBAL_ROUTES.HOME} element={<Layout component={<Home />} />} />
                <Route path={GLOBAL_ROUTES.COURSES} element={<Layout component={<Home />} />} />
            </Routes>
        </>
    )
}