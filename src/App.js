import { Header } from './components/header/Header';
import { AboutUs } from './components/about_us/AboutUs';
import { OurServices } from './components/our_services/OurServices';
import { Carousel } from './components/carousel/Carousel';


function App() {
    return (
        <>
            <Header />
            <main>
                <AboutUs />
                <OurServices />
                <Carousel />
            </main>
        </>
    );
}

export default App;
