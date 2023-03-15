import './our_services.css';
import img1 from './img/img1.svg';
import img2 from './img/img2.svg';
import img3 from './img/img3.svg';
import img4 from './img/img4.svg';
import img5 from './img/img5.svg';

export const OurServices = () => {
    return (
        <section className='OurServices'>
            <div className='container'>
                <div className='content_wrapper'>
                    <div className='subject'>
                        <div className='subject__name'>
                            <h4>OUR SERVICES</h4>
                        </div>
                        <div className='subject__title'>
                            <h2>What We Offer</h2>
                        </div>
                        <div className='subject__subtitle'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className='content_wrapper'>
                    <div className='services'>
                        <div className='services__item'>
                            <div className=''>
                                <img src={img1} alt='' />
                                <p>Lawn Mowing
                                    and Edging</p>
                            </div>
                        </div>
                        <div className='services__item'>
                            <div className=''>
                                <img src={img2} alt='' />
                                <p>Tree and
                                    Shrub Trimming</p>
                            </div>
                        </div>
                        <div className='services__item'>
                            <div className=''>
                                <img src={img3} alt='' />
                                <p>Flower Gardens;
                                    Maintenance & Design</p>
                            </div>
                        </div>
                        <div className='services__item'>
                            <div className=''>
                                <img src={img4} alt='' />
                                <p>Vegetable / Herb
                                    Gardens; Maintenance
                                    & Design</p>
                            </div>
                        </div>
                        <div className='services__item'>
                            <div className=''>
                                <img src={img5} alt='' />
                                <p>Landscaping</p>
                            </div>
                        </div>
                    </div>
                    <div className='btn--secondary'>
                        <a href='#'>KNOW MORE</a>
                    </div>
                </div>
            </div>
        </section>
    );
};