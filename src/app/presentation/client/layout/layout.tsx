import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

export default function Layout({ component }: any) {
    return (
        <>
            <Navbar />
            {component}
            <Footer />
        </>
    );
}
