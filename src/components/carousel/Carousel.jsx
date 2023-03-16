import "./carousel.css";
import avatar from "./shutterstock_1556791883.png";
import {React, useState} from "react";

export const Carousel = () => {

    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
        <section className="Carousel">
            <div className="container">
                <div className="content_wrapper">
                    <div className="subject">
                        <div className="subject__name">
                            <h4>TESTIMONIALS</h4>
                        </div>
                        <div className="subject__title">
                            <h2>Client's Testimonials</h2>
                        </div>
                    </div>
                    <input type="radio" name="comment_input" id="comment_input" checked={checked} onChange={() => setChecked(!checked)} />
                    <input type="radio" name="comment_input" id="comment_input2" checked={checked2} onChange={() => setChecked2(!checked2)} />
                    <input type="radio" name="comment_input" id="comment_input3" checked={checked3} onChange={() => setChecked3(!checked3)} />
                    <div id="comment" className="comment">
                        <div className="comment__item">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="comment__avatar">
                            <div className="">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <h3>John Doe</h3>
                                </div>
                                <div className="dear">
                                    <p>From Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="comment2" className="comment">
                        <div className="comment__item">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="comment__avatar">
                            <div className="">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <h3>John e</h3>
                                </div>
                                <div className="dear">
                                    <p>From Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="comment3" className="comment">
                        <div className="comment__item">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        <div className="comment__avatar">
                            <div className="">
                                <img src={avatar} alt="" />
                            </div>
                            <div className="info">
                                <div className="name">
                                    <h3>John Doe</h3>
                                </div>
                                <div className="dear">
                                    <p>From Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};