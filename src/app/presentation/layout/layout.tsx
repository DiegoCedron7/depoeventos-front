import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CLIENT_ROUTES } from "../../shared/routes/client.routes.ts";
import Courses from "../client/courses/courses.js";
import Events from "../client/events/events.js";
import Home from "../client/home/home.js";
import Packs from "../client/packs/packs.js";
import Footer from "./components/footer/footer.jsx";
import Navbar from "./components/navbar/navbar.jsx";

export default function Layout() {
    return (
        <>
            <Navbar></Navbar>
            <BrowserRouter>
                <Routes>
                    {/* Rutas Cliente */}
                    <Route index path={CLIENT_ROUTES.HOME} element={<Home />} />
                    <Route index path={CLIENT_ROUTES.COURSES} element={<Courses />} />
                    <Route index path={CLIENT_ROUTES.EVENTS} element={<Events />} />
                    <Route index path={CLIENT_ROUTES.PACKS} element={<Packs />} />

                    {/* Rutas Admin */}
                    <Route index path="/" element={<Home />} />
                    <Route index path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    );
}
