import "./about_us.css";
import about_us from "./about-us.svg";

export const AboutUs = () => {
    return (
        <section className="AboutUs">
            <div className="container">
                <div className="wrapper">
                    <div className="content_wrapper">
                        <div className="subject">
                            <div className="subject__name">
                                <h4>ABOUT US</h4>
                            </div>
                            <div className="subject__title">
                                <h2>Welcome to <br />
                                    Hurdle Gardening</h2>
                            </div>
                            <div className="subject__subtitle">
                                <p>Hurdle is a contemporary and innovative service provider, working solely with people
                                    with a disability funded with supports from the National Disability Insurance
                                    Agency. Hurdle differs from other organisations with their structure of
                                    supports. </p>
                            </div>
                            <div className="content_wrapper d-none">
                                <img src={about_us} alt="" />
                            </div>
                            <div className="btn">
                                <div className="btn__item btn--primary">
                                    <a href="#"> LEARN MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content_wrapper">
                        <img src={about_us} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};