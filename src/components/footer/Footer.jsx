import logo from "../header/logo.svg";
import "./footer.css";
import facebook from "./facebook.png";
import linked_in from "./linked_in.png";
import insta from "./insta.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container_footer">
                <div className="content_wrapper">
                    <div className="logo_footer">
                        <img src={logo} alt="" />
                    </div>
                    <div className="icon">
                        <div className="icon__item">
                            <img src={facebook} alt="" />
                        </div>
                        <div className="icon__item">
                            <img src={linked_in} alt="" />
                        </div>
                        <div className="icon__item">
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content_wrapper">
                    <nav className="nav_footer">
                        <div className="nav_footer__item">
                            <a href="#"><h4>Home</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>ABOUT HURDLE GARDENING</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>OUR SERVICES</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>BLOGS</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>CONTACT US</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>PRIVACY POLICY</h4></a></div>
                        <div className="nav_footer__item">
                            <a href="#"><h4>TERMS OF USE</h4></a></div>
                    </nav>
                </div>
                <div className="content_wrapper">
                    <div className="reserved">
                        <p>Copyright © 2021 Hurdle Pty Ltd 2020 ABN 67 620 936 352</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};