import React from "react";
import "./nuduraseriesproduct.css";
// Re-using images from Home or placeholders if available
import product1 from "../images/prod-1.png";
import product2 from "../images/prod-2.png";
import product3 from "../images/prod-3.png";
import imgVideo from "../images/Img2.png"; // Placeholder for video thumb
import brandLogo from "../images/logo.png"; // Assuming logo exists or similar

const Nuduraseriesproduct = () => {
    return (
        <div className="nudura-product-page">

            {/* --- Header Section (Inside 1290px container) --- */}
            <div className="nudura-container">
                <section className="nudura-header">
                    <h1 className="nudura-title">The Nudura ICF Series</h1>
                    <p className="nudura-features-text">
                        1” (25mm) R-value 28 & U-value 0.21, 2” (51mm) R-value 32 & U-value 0.18,
                        4” (102mm) R-value 40 & U-value 0.15, and 6” (152mm) R-value 48 & U-value 0.12
                    </p>
                </section>
            </div>

            {/* --- Gallery Section (Inside 1900px container) --- */}
            <div className="nudura-gallery-container">
                <section className="nudura-gallery">
                    <div className="nudura-gallery-item">
                        <img src={product1} alt="ICF Series 1" className="nudura-gallery-img" />
                    </div>
                    <div className="nudura-gallery-item">
                        <img src={product2} alt="ICF Series 2" className="nudura-gallery-img" />
                    </div>
                    <div className="nudura-gallery-item">
                        <img src={product3} alt="ICF Series 3" className="nudura-gallery-img" />
                    </div>
                </section>
            </div>

            {/* --- Main Body Layout (Inside 1290px container) --- */}
            <div className="nudura-container">
                <div className="nudura-main-layout">

                    {/* Left Content Column */}
                    <div className="nudura-content-col">

                        {/* Description */}
                        <div className="content-block">
                            <h3 className="section-title">Description</h3>
                            <p className="nudura-text-block">
                                The Nudura ICF Series, manufactured from Expanded Polystyrene (EPS) foam, and high-density polypropylene plastic,
                                coupled with reinforcement and concrete, offers a robust flat wall system. Available in standard concrete core widths
                                ranging from 4 to 12" (102 - 305 mm), and boasting an R-value of R24. All forms feature full height fastening strips to
                                eliminate compression of the forms during concrete placement. The ICF series provides unmatched design flexibility and
                                sustainability. Architects, contractors, and installers benefit from its easy installation and minimal waste. Homeowners
                                enjoy superior sound insulation, lower energy bills, and enhanced disaster resistance.
                            </p>
                            <a href="#" className="view-more-link">View More</a>
                        </div>

                        {/* Overview */}
                        <div className="content-block">
                            <h3 className="section-title">Overview</h3>
                            <div className="overview-grid">
                                <div className="overview-item">
                                    <div className="overview-icon-box"><i className="fa-solid fa-layer-group"></i></div>
                                    <div className="overview-details">
                                        <h6>Type:</h6>
                                        <p>4-way flip</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon-box"><i className="fa-solid fa-ruler-combined"></i></div>
                                    <div className="overview-details">
                                        <h6>Land Size:</h6>
                                        <p>All Sizes</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon-box"><i className="fa-solid fa-shapes"></i></div>
                                    <div className="overview-details">
                                        <h6>Shape:</h6>
                                        <p>All Shapes</p>
                                    </div>
                                </div>
                                <div className="overview-item">
                                    <div className="overview-icon-box"><i className="fa-solid fa-calendar"></i></div>
                                    <div className="overview-details">
                                        <h6>Year Built:</h6>
                                        <p>2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video */}
                        <div className="content-block">
                            <h3 className="section-title">Video</h3>
                            <div className="video-wrapper">
                                <img src={imgVideo} alt="Video Thumbnail" />
                                <div className="play-button">
                                    <i className="fa-solid fa-play"></i>
                                </div>
                            </div>
                        </div>

                        {/* Best For */}
                        <div className="content-block">
                            <h3 className="section-title">Best For</h3>
                            <div className="best-for-grid">
                                <div className="best-for-item"><span className="bullet-dot"></span>Residential construction</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Basements & Crawl Spaces</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Mixed Use</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Commercial construction</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Community and Sub-Divisions</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Net-Zero</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Basements</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Government & Military Buildings</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Pools & Spas</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Pools</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Hotel & Hospitality Buildings</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Safe Rooms maker</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Safe rooms & storm shelters</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Medical Buildings</div>
                                <div className="best-for-item"><span className="bullet-dot"></span>Specialty Builds</div>
                            </div>
                        </div>

                        {/* Drawings */}
                        <div className="content-block">
                            <h3 className="section-title">Drawings</h3>
                            <div className="drawing-card">
                                <div style={{ fontWeight: 700, marginBottom: '10px' }}>Concrete Core</div>
                                {/* Placeholder for drawing schematic */}
                                <div style={{ width: '100%', height: '300px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <p style={{ color: '#ccc' }}>Drawing Schematic Visualization</p>
                                </div>
                            </div>
                        </div>

                        {/* File Attachments */}
                        <div className="content-block">
                            <h3 className="section-title">File Attachments</h3>
                            <div className="file-row">
                                <a href="#" className="file-btn">
                                    <i className="fa-solid fa-file-pdf" style={{ color: 'red' }}></i> B6A01 (mm 152) 6”.pdf
                                </a>
                                <a href="#" className="file-btn">
                                    <i className="fa-solid fa-file-image" style={{ color: 'blue' }}></i> B6A01 (mm 152) 6”.dwg
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Sidebar Column */}
                    <div className="nudura-sidebar-col">

                        {/* Contact Card */}
                        <div className="sidebar-card">
                            <h4 className="sidebar-title">Contact Ecobuild</h4>
                            <div className="contact-info">
                                <img src={brandLogo} alt="Logo" className="contact-logo" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>Jayesh Italiya</div>
                                    <div style={{ fontSize: '13px', color: '#666' }}>+91-93166-57001</div>
                                    <div style={{ fontSize: '13px', color: '#666' }}>info@ecobuild.com</div>
                                </div>
                            </div>
                            <form className="inquiry-form">
                                <input type="text" placeholder="Full Name" />
                                <input type="tel" placeholder="Phone Number" />
                                <input type="email" placeholder="Email Address" />
                                <textarea rows="4" placeholder="Your Message"></textarea>
                                <button type="submit" className="submit-btn">Submit Inquiry <i className="fa-solid fa-arrow-right"></i></button>
                            </form>
                        </div>

                        {/* Why Choose Us Card */}
                        <div className="sidebar-card">
                            <h4 className="sidebar-title">Why Choose Us?</h4>
                            <div className="why-choose-list">
                                <div className="why-item">
                                    <i className="fa-solid fa-leaf why-icon"></i> Environmentally Friendly
                                </div>
                                <div className="why-item">
                                    <i className="fa-solid fa-recycle why-icon"></i> Sustainable construction
                                </div>
                                <div className="why-item">
                                    <i className="fa-solid fa-trash-arrow-up why-icon"></i> Non-Biodegradable Waste
                                </div>
                                <div className="why-item">
                                    <i className="fa-solid fa-headset why-icon"></i> Available Support 24/7
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nuduraseriesproduct;
