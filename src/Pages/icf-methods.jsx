import React, { useRef, useEffect } from "react";
// import './ICFMethods.css';
import { useTranslation } from "react-i18next";
import icf1 from "../images/icf1.png";
import icf2 from "../images/icf2.png";
import icf3 from "../images/icf3.png";
import icf4 from "../images/icf4.png";
import icf5 from "../images/icf5.png";
import icf6 from "../images/icf6.png";
import icf7 from "../images/icf7.png";
import icf8 from "../images/icf8.png";
import icf9 from "../images/icf9.png";
import icf10 from "../images/icf10.png";
import icf11 from "../images/icf11.png";
import icf12 from "../images/icf12.png";


const ICFMethods = () => {
    const { t } = useTranslation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
const scrollRef = useRef(null);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300, // move right
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    return (
        <div className="icf-methods-container">
            {/* Breadcrumb */}
            <div className="container">
                <div className="breadcrumb-band">
                    <div className="text-band">
                        <span>{t('icf1.breadcrumb')}</span>
                        <h2>{t('icf1.breadcrumbTitle')}</h2>
                    </div>
                </div>
            </div>

            {/* Section 1: Main Introduction */}
            <section className="main-intro py-5">
                <div className="container">
                    <h1 className="text-center mb-4 main-title">
                        {t('icf1.mainTitle')}
                    </h1>
                    <div className="text-center mb-3">
                        <div className="title-underline"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-14 mx-auto">
                            <p className="text-start mb-4 intro-text">
                                <strong>{t('icf1.principleTitle')}</strong> – {t('icf1.principleText')}
                            </p>
                            
                            <p className="text-start mb-4 description-text">
                                {t('icf1.moldsDescription')}
                            </p>
                            
                            <p className="text-start mb-5 description-text">
                                {t('icf1.methodDescription')}
                            </p>
                        </div>
                    </div>

                    {/* Four Cards */}
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm feature-card">
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-3">
                                        {t('icf1.card1Title')}
                                    </h5>
                                    <div className="card-underline"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop" 
                                        alt="NUDURA Features" 
                                        className="img-fluid mb-3 card-image"
                                    />
                                    <button 
                                        className="btn btn-primary-gold px-4 py-2"
                                        onClick={() => scrollToSection('features')}
                                    >
                                        {t('icf1.card1Button')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm feature-card">
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-3">
                                        {t('icf1.card2Title')}
                                    </h5>
                                    <div className="card-underline"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop" 
                                        alt="Construction Process" 
                                        className="img-fluid mb-3 card-image"
                                    />
                                    <button 
                                        className="btn btn-primary-gold px-4 py-2"
                                        onClick={() => scrollToSection('construction-process')}
                                    >
                                        {t('icf1.card2Button')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm feature-card">
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-3">
                                        {t('icf1.card3Title')}
                                    </h5>
                                    <div className="card-underline"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop" 
                                        alt="Planning" 
                                        className="img-fluid mb-3 card-image"
                                    />
                                    <button 
                                        className="btn btn-primary-gold px-4 py-2"
                                        onClick={() => scrollToSection('riba-programme')}
                                    >
                                        {t('icf1.card3Button')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card h-100 border-0 shadow-sm feature-card">
                                <div className="card-body text-center p-4">
                                    <h5 className="card-title mb-3">
                                        {t('icf1.card4Title')}
                                    </h5>
                                    <div className="card-underline"></div>
                                    <img 
                                        src="../images/gallery/gallery-img-all-01.jpg" 
                                        alt="Storm Resistance" 
                                        className="img-fluid mb-3 card-image"
                                    />
                                    <button 
                                        className="btn btn-primary-gold px-4 py-2"
                                        onClick={() => scrollToSection('storm-resistance')}
                                    >
                                        {t('icf1.card4Button')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: What to Expect & Environmental */}
            <section className="expect-environmental py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-3 section-subtitle">
                                        {t('icf1.expectTitle')}
                                    </h5>
                                    <p className="text-center mb-3 section-text">
                                        {t('icf1.expectText')}
                                    </p>
                                    <p className="text-center section-text-bold">
                                        {t('icf1.prideText')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-3 section-subtitle">
                                        {t('icf1.environmentTitle')}
                                    </h5>
                                    <p className="text-center mb-2 section-text">
                                        {t('icf1.environmentText')} 
                                        <span className="thermal-mass-highlight">{t('icf1.thermalMass')}</span> 
                                        {t('icf1.thermalDescription')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ICF vs Traditional Methods */}
                    <div className="row mt-4">
                        <div className="col-12">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body p-5">
                                    <h4 className="text-center mb-4 comparison-title">
                                        {t('icf1.comparisonTitle')}
                                    </h4>
                                    
                                    <p className="mb-3 comparison-text">
                                        {t('icf1.comparisonPara1')}
                                    </p>
                                    
                                    <p className="mb-3 comparison-text">
                                        {t('icf1.comparisonPara2')}
                                    </p>
                                    
                                    <p className="mb-3 comparison-text">
                                        {t('icf1.comparisonPara3')}
                                    </p>
                                    
                                    <p className="mb-0 comparison-text">
                                        {t('icf1.comparisonPara4')} 
                                        <span className="plus-series-highlight">{t('icf1.plusSeries')}</span>
                                        {t('icf1.comparisonPara5')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Construction Process */}
            <section id="construction-process" className="construction-process py-5">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">
                        {t('icf1.constructionProcess.title')}
                    </h2>
                    <div className="text-center mb-5">
                        <div className="title-underline"></div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-14">
                            <div className="process-intro-box">
                                <h4 className="text-start mb-3 steps-title">
                                    {t('icf1.constructionProcess.stepsTitle')}
                                </h4>
                                <p className="process-intro-text">
                                    {t('icf1.constructionProcess.intro')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Six Steps List */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8">
                            <div className="steps-list">
                                <ul className="list-unstyled text-start">
                                    <li className="step-item">{t('icf1.constructionProcess.step1')}</li>
                                    <li className="step-item">{t('icf1.constructionProcess.step2')}</li>
                                    <li className="step-item">{t('icf1.constructionProcess.step3')}</li>
                                    <li className="step-item">{t('icf1.constructionProcess.step4')}</li>
                                    <li className="step-item">{t('icf1.constructionProcess.step5')}</li>
                                    <li className="step-item">{t('icf1.constructionProcess.step6')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ICF Building Process */}
                    <div className="row justify-content-center">
                        <div className="col-lg-14">
                            <div className="icf-process-box">
                                <h4 className="mb-4 process-subtitle">
                                    {t('icf1.constructionProcess.icfTitle')}
                                </h4>
                                <p className="mb-3 process-description">
                                    {t('icf1.constructionProcess.icfDescription')}
                                </p>
                                <p className="process-description">
                                    {t('icf1.constructionProcess.icfDetails')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: RIBA Professional Development Programme */}
            <section id="riba-programme" className="riba-programme py-5">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">
                        {t('icf1.riba.title')}
                    </h2>
                    <div className="text-center mb-5">
                        <div className="title-underline"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-14">
                            <div className="riba-content-box">
                                <h4 className="text-start mb-4 riba-subtitle">
                                    {t('icf1.riba.overviewTitle')}
                                </h4>
                                
                                <p className="mb-3 riba-text">
                                    {t('icf1.riba.para1')}
                                </p>
                                
                                <p className="mb-3 riba-text">
                                    {t('icf1.riba.para2')}
                                </p>
                                
                                <p className="mb-4 riba-text">
                                    {t('icf1.riba.para3')}
                                </p>

                                <p className="mb-2 riba-text riba-highlight">
                                    {t('icf1.riba.highlight')}
                                </p>

                                <div className="cpd-info text-start mb-4">
                                    <p className="mb-1 cpd-label">{t('icf1.riba.cpdCourse')}</p>
                                    <p className="cpd-label">{t('icf1.riba.cpdOverview')}</p>
                                </div>

                                <h5 className="text-start mb-3 topics-title">
                                    {t('icf1.riba.topicsTitle')}
                                </h5>

                                {/* Topics List */}
                                <ul className="list-unstyled text-start topics-list">
                                    <li className="topic-item">{t('icf1.riba.topic1')}</li>
                                    <li className="topic-item">{t('icf1.riba.topic2')}</li>
                                    <li className="topic-item">{t('icf1.riba.topic3')}</li>
                                    <li className="topic-item">{t('icf1.riba.topic4')}</li>
                                    <li className="topic-item">{t('icf1.riba.topic5')}</li>
                                </ul>

                                <p className="text-center mt-4 plan-build-text">
                                    {t('icf1.riba.planBuild')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Storm Resistance */}
            <section id="storm-resistance" className="storm-resistance py-5">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">
                        {t('icf1.storm.title')}
                    </h2>
                    <div className="text-center mb-5">
                        <div className="title-underline"></div>
                    </div>

                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-14">
                            <div className="storm-intro-box">
                                <p className="mb-3 storm-text">
                                    {t('icf1.storm.intro')}
                                </p>
                                
                                <p className="mb-4 storm-text">
                                    <strong>{t('icf1.storm.exception')}</strong> {t('icf1.storm.exceptionText')}
                                    <strong className="storm-highlight">{t('icf1.storm.solidSkeleton')}</strong>
                                    {t('icf1.storm.conclusion')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Video Embed */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8">
                            <div className="video-container">
                                <iframe 
                                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                                    width="100%" 
                                    height="450" 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowFullScreen
                                    title="Storm Resistance Video"
                                />
                                <p className="text-center mt-2 video-caption">
                                    {t('icf1.storm.videoCaption')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Storm Images */}
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="storm-image-box">
                                <img 
                                    src="../images/gallery/gallery-img-all-06.jpg" 
                                    alt="Storm damage comparison" 
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="storm-image-box">
                                <img 
                                    src="../images/gallery/gallery-img-all-07.jpg" 
                                    alt="NUDURA house after storm" 
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Benefits and Performance */}
            <section id="features" className="benefits-performance py-5">
                <div className="container">
                    <h2 className="text-center mb-4 section-title">
                        {t('icf1.benefitsTitle')}
                    </h2>
                    <div className="text-center mb-5">
                        <div className="title-underline"></div>
                    </div>

                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-14">
                            <h4 className="text-center mb-3 building-value-title">
                                {t('icf1.buildingValue')}
                            </h4>
                            <p className="text-center building-value-text">
                                {t('icf1.buildingValueText')}
                            </p>
                        </div>
                    </div>

                    {/* Four Benefit Cards */}
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card h-100 border shadow-sm benefit-card">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-4 benefit-title">
                                        {t('icf1.comfortTitle')}
                                    </h5>
                                    
                                    <p className="mb-3 benefit-text">
                                        {t('icf1.comfortText')}
                                    </p>
                                    
                                    <p className="mb-0 benefit-text">
                                        {t('icf1.noiseText')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100 border shadow-sm benefit-card">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-4 benefit-title">
                                        {t('icf1.energyTitle')}
                                    </h5>
                                    
                                    <p className="mb-3 benefit-text">
                                        {t('icf1.energyText')}
                                    </p>
                                    
                                    <p className="mb-0 benefit-text">
                                        {t('icf1.energyText2')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100 border shadow-sm benefit-card">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-4 benefit-title">
                                        {t('icf1.longTermTitle')}
                                    </h5>
                                    
                                    <p className="mb-3 benefit-text benefit-text-bold">
                                        {t('icf1.longTermText')}
                                    </p>
                                    
                                    <p className="mb-0 benefit-text">
                                        {t('icf1.durabilityText')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="card h-100 border shadow-sm benefit-card">
                                <div className="card-body p-4">
                                    <h5 className="text-center mb-4 benefit-title">
                                        {t('icf1.safetyTitle')}
                                    </h5>
                                    
                                    <p className="mb-0 benefit-text">
                                        {t('icf1.safetyText')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section: Research & Certifications */}
            <section className="research-certifications py-5">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-14">
                            <p className="text-center research-text">
                                {t('icf1.footer.researchText1')}
                                <span className="research-highlight">{t('icf1.footer.researchHighlight')}</span>
                                {t('icf1.footer.researchText2')}
                            </p>
                        </div>
                    </div>

                    {/* Certification Logos */}
                    <div className="cert-scroll-wrapper">
      <div className="cert-scroll-container" ref={scrollRef}>
        <div className="cert-item"><img src={icf1} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf2} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf3} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf4} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf5} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf6} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf7} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf8} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf9} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf10} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf11} className="cert-logo" /></div>
        <div className="cert-item"><img src={icf12} className="cert-logo" /></div>
      </div>
    </div>

                    {/* Ecobuild Tag */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="ecobuild-banner">
                                <p className="text-center mb-0 ecobuild-text">
                                    {t('icf1.footer.ecobuild')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ICFMethods;