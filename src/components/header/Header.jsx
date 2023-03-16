import "./header.css";
import logo from "./logo.svg";

export const Header = () => {
    return (
        <div className="wrapper_bg">
            <header className="header">
                <div className="wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <nav className="nav">
                        <div className="nav__item">
                            <a href="#">HOME</a>
                        </div>
                        <div className="nav__item">
                            <a href="#">ABOUT HURDLE GARDENING
                            </a>
                        </div>
                        <div className="nav__item">
                            <a href="#">OUR SERVICES
                            </a>
                        </div>
                        <div className="nav__item">
                            <a href="#">BLOGS
                            </a>
                        </div>
                        <div className="nav__item">
                            <a href="#">CONTACT US</a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="content_wrapper">
                <div className="subject">
                    <div className="subject__title">
                        <h1>We Believe That All People,
                            No Matter Their Disability,</h1>
                    </div>
                    <div className="subject__subtitle">
                        <p>have the same rights and should be given the same
                            opportunities to explore learning and work in the community</p>
                    </div>
                    <div className="bth">
                        <div className="btn__item btn--primary">
                            <a href="#">LEARN MORE</a>
                        </div>
                        <div className="btn__item btn--secondary">
                            <a href="#">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

