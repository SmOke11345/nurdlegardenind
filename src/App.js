import {Header} from "./components/header/Header";
import {AboutUs} from "./components/about_us/AboutUs";
import {OurServices} from "./components/our_services/OurServices";
import {Carousel} from "./components/carousel/Carousel";
import {Contact} from "./components/contacts/Contact";
import {Footer} from "./components/footer/Footer";


function App() {
    return (
        <>
            <Header />
            <main>
                <AboutUs />
                <OurServices />
                <Carousel />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
