
import React from 'react';

const Main: React.FC = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/assets/images/Maskgroup.png' className='mask-image'></img>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='mt-20'>Why <span className='kal'>Kal</span>Tech</h1>
                        <p className='detail-paragragh'>
                            <span className='p1'> KalTech is a fullstack venture studio providing comprehensive technical and marketing solutions to help startups scale their operations across various sectors including Fintech, Healthtech, E-commerce, and more.</span><br></br>

                            <span className='p2'> KalTech is co-founded by serial entrepreneurs with more than 35 years worth of experience around tech, product, and business. The core team is backed by a skilled team encompassing full-stack developers, back-end engineers, QA experts, product managers, UI/UX specialists, and social media marketing & branding specialists.</span><br></br>

                            <span className='p3'> Our offerings include short-term project support along with long-term full-stack services on monthly retainers.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* 2nd part */}
            <div className='container mt-9'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='box'>
                            <img src='/assets/images/cost.png'></img>
                            <h4>Cost</h4>
                            <p className='box-para'>Maximize your investment with KalPay Tech, an agile team that saves you time and money compared to building.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='box'>
                            <img src='/assets/images/market.png'></img>
                            <h4>Speed To Market</h4>
                            <p className='box-para'>Maximize your investment with KalPay Tech, an agile team that saves you time and money compared to building.</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='box'>
                            <img src='/assets/images/expertise.png'></img>
                            <h4>Expertise</h4>
                            <p className='box-para'>Maximize your investment with KalPay Tech, an agile team that saves you time and money compared to building.</p>
                        </div>
                    </div>

                </div>
            </div>


            {/* Our Expertise */}

            <div className='container'>
                <div className='row'>
                    <h3 className='expertise-heading'>Our <span className='expertise'>Expertise</span></h3>
                </div>
                <div className='row'>
                    <div className='col-md-2 ml-5'>
                        <div className='image-with-text'>
                            <img src='/assets/images/node.png'></img>
                            <p>Node</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='image-with-text'>
                            <img src='/assets/images/aws.png'></img>
                            <p className='mt-3'>Amazon Web Services</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='image-with-text'>
                            <img src='/assets/images/js.png'></img>
                            <p className='mt-3'>Java Springboot</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='image-with-text'>
                            <img src='/assets/images/react.png'></img>
                            <p className='mt-3'>React Stack</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='image-with-text'>
                            <img src='/assets/images/wordpress.png'></img>
                            <p className='mt-2'>wordpress</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* What we offer */}

            <div className='container'>
                <div className='offer-section pl-5'>
                    <h1 className='offer-heading'>What We Offer</h1>
                    <p className='paragraph-offer'>KalTech is a fullstack venture studio providing comprehensive technical and marketing solutions to help startups scale their operations across various sectors including Fintech, Healthtech, E-commerce, and more.</p>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='section'>
                                <h3 className='sub-heading'>Ideation/Prototyping</h3>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/pencil.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/boil.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/computer.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='col-md-4'>
                            <div className='section'>
                                <h3 className='sub-heading'>Ideation/Prototyping</h3>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/app-development.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/website.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/software.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>

                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/product.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='col-md-4'>
                            <div className='section'>
                                <h3 className='sub-heading'>Ideation/Prototyping</h3>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/technical.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/data.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/predictive.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>

                                <div className='d-flex gap-5'>
                                    <img src='/assets/images/visualization.png' className='offer-img'></img>
                                    <div className='d-flex flex-column'>
                                        <h6>UI/UX</h6>
                                        <p className='offer-paras'>Enhancing user satisfaction through
                                            intuitive interfaces</p>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                    {/* Portfolio part */}

                    <div className='row'>
                        <div className='portfolio'>
                            <h1 className='d-flex justify-content-center align-items-center pt-4 mb-3'>Portfolio</h1>

                            <div className='d-flex justify-content-center align-items-center gap-20 parent'>
                                <img src='/assets/images/kalpay.png'></img>
                                <img src='/assets/images/rasai.png'></img>
                                <img src='/assets/images/finja.png'></img>
                                <img src='/assets/images/muawin.png'></img>
                                <img src='/assets/images/sureti.png'></img>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



            {/* Footer */}
            <div className='footer'>
                <div className='container'>
                    <div className='row pare'>
                        <div className='col-md-6 bg-danger first-part'>
                            {/* <h1>Red</h1>     */}
                        </div>
                        <div className='col-md-3 flex gap-1 flex-column mt-5'>
                            <h4 className='footer-heading'>About</h4>
                            <p>We Are Kai Tech</p>
                            <p>We Are Kai Tech</p>
                            <p>We Are Kai Tech</p>
                        </div>

                        <div className='col-md-3 flex gap-1 flex-column mt-5'>
                            <h4 className='footer-heading'>Social Media</h4>

                            <div className='flex gap-3'>
                                <img src='/assets/images/linkedin.png'></img> <span>Linkedin</span>
                            </div>

                        </div>
                    </div>
                </div>

                <p className='pt-2 ml-5'>KalPay © 2023/ All Rights Reserved</p>
            </div>
        </>
    )
}


export default Main
