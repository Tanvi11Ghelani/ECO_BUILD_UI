import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import "./WhyChoose.css";
import product1 from "../images/prod-1.png";
import product2 from "../images/prod-2.png";
import product3 from "../images/prod-3.png";
import product4 from "../images/prod-4.png";
import product5 from "../images/prod-5.png";
import product6 from "../images/prod-6.png";
import b1 from "../images/eota-brand_logo.png";
import b2 from "../images/Icon3.png";
import b3 from "../images/Icon4.png";
import b4 from "../images/Icon5.png";
import b5 from "../images/Icon6.png";
import img from "../images/Img2.png";
import img2 from "../images/Img3.png";
import { hide } from "@popperjs/core";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // State for search form
  const [productType, setProductType] = useState("All Products");
  const [sizes, setSizes] = useState("Size");
  const [keyword, setKeyword] = useState("");

  const allPages = [
    { name: "Home", path: "/" },
    { name: "Plus Series", path: "/plus-series" },
    { name: "Login", path: "/login" },
    { name: "Registration", path: "/registration" },
    { name: "Below Construction Slope", path: "/belowtheconstructionslope" },
    { name: "Flamable Construction", path: "/flamableconstruction" },
    { name: "Non-Combustible Construction", path: "/noncombstibleconstruction" },
    { name: "Fire Wall", path: "/firewall" },
    { name: "Form Unit Profile", path: "/formunitprofile" },
    { name: "BIM Library", path: "/bimlibrary" },
    { name: "Early Design Criteria", path: "/earlydesigncriteria" },
    { name: "The Combined Series", path: "/thecombinedseries" },
    { name: "One Series", path: "/oneseries" },
    { name: "Nudura Series", path: "/nuduraseries" },
    { name: "Planning", path: "/planning" },
    { name: "Catalog", path: "/catalogfordirectviewing" },
    { name: "Files to Download", path: "/filestodownload" },
    { name: "Standard & Laboratory", path: "/standardandlaboratory" },
    { name: "Specifications", path: "/specification" },
    { name: "Brochures", path: "/brochures" },
    { name: "Project Description", path: "/projectdescription" },
    { name: "Articles", path: "/articales" },
    { name: "Rock Plaster", path: "/rockplaster" },
    { name: "Photo Gallery", path: "/photogallery" },
    { name: "Video Gallery", path: "/videogallery" },
    { name: "ICF Method", path: "/icf-method" },
    { name: "Academy", path: "/academy" },
    { name: "Contact Us", path: "/contactus" },
    { name: "FAQ", path: "/faq" },
    { name: "Thermal Mass", path: "/thermalmass" },
    { name: "Sustainable Construction", path: "/sustainable-construction" },
    { name: "Innovation", path: "/innovation" },
    { name: "Construction Methods", path: "/construction-methods" },
    { name: "Nodora Series", path: "/nodoraseries" },
    { name: "Nodora XR35", path: "/nodoraxr35" },
    { name: "Plus Series Product", path: "/plus-series-product" },
    { name: "About Us", path: "/aboutus" },
    { name: "About Us In Press", path: "/aboutusinpress" },
    { name: "Broadcast News", path: "/broadcastnews" },
  ];

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleKeywordChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    if (value.length > 0) {
      const filtered = allPages.filter(page =>
        page.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (path) => {
    navigate(path);
    setShowSuggestions(false);
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = keyword.toLowerCase().trim();

    // specific checks (keeping existing logic as priority)
    if (searchTerm.includes('nudura') || productType === 'ICF Blocks') {
      navigate('/nuduraseries');
    } else if (searchTerm.includes('panel') || productType === 'Panels') {
      navigate('/thecombinedseries');
    } else if (searchTerm.includes('accessories') || productType === 'Accessories') {
      navigate('/nuduraseries');
    } else if (searchTerm.includes('one')) {
      navigate('/oneseries');
    } else if (searchTerm.includes('plus')) {
      navigate('/plus-series');
    } else if (searchTerm.includes('sustainable')) {
      navigate('/sustainable-construction');
    } else if (searchTerm.includes('fire')) {
      navigate('/firewall');
    } else if (searchTerm.includes('thermal')) {
      navigate('/thermalmass');
    } else {
      // Fallback: check if we have a direct match in allPages
      const match = allPages.find(page => page.name.toLowerCase().includes(searchTerm));
      if (match) {
        navigate(match.path);
      } else {
        navigate('/construction-methods');
      }
    }
  };
  const settings = {
    dots: true, // show navigation dots
    infinite: true, // infinite loop
    speed: 500, // transition speed
    slidesToShow: 4, // how many items visible
    slidesToScroll: 1, // how many items move on scroll
    autoplay: true, // auto play
    autoplaySpeed: 1000, // speed for autoplay
    centerMode: false,
  };
  return (
    <div style={{ overflow: "hidden !important" }}>
      <section className="hero-band">
        <div className="container">
          <div className="row">
            <div className="hero-text-band">
              <span className="sub-head">
                {t("nudura_insulated_concrete_forms_and_panels")}
              </span>
              <h1 className="main-head">
                {t("nudura_israel")}
                <br />
                {t("advanced_ecological_building_systems")}
              </h1>

              <div className="btn-group">
                <a
                  className="btn-primary construction-methods-btn"
                  onClick={() => navigate('/construction-methods')}
                  style={{ cursor: 'pointer' }}
                >
                  {t("construction_methods")}
                  <span className="btn-triangle"></span>
                </a>
                <a
                  className="btn-secondary border-line-btn"
                  onClick={() => navigate('/icf-method')}
                  style={{ cursor: 'pointer' }}
                >
                  {t("icf_method")}
                </a>
              </div>
            </div>
            <div className="hero__search-card">
              <form className="hero__search-form" onSubmit={handleSearch}>
                <div className="hero__fields">
                  <div className="hero-field hero-field--type">
                    <span className="hero-field__label">
                      {t("product_type")}
                    </span>
                    <div className="hero-select__wrapper">
                      <select
                        className="hero-select"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        aria-label="Select product type"
                      >
                        <option value="All Products">
                          {t("all_products")}
                        </option>
                        <option value="ICF Blocks">{t("ICF_Blocks")}</option>
                        <option value="Panels">{t("Panels")}</option>
                        <option value="Accessories">{t("Accessories")}</option>
                      </select>
                      <span className="hero-select__chevron" aria-hidden="true">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div className="hero-field hero-field--sizes">
                    <span className="hero-field__label">{t("sizes")}</span>
                    <div className="hero-select__wrapper">
                      <select
                        className="hero-select"
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                        aria-label="Select size"
                      >
                        <option value="Size">{t("Size")}</option>
                        <option value="Small">{t("Small")}</option>
                        <option value="Medium">{t("Medium")}</option>
                        <option value="Large">{t("Large")}</option>
                      </select>
                      <i
                        className="fa-solid fa-crosshairs hero-select__chevron"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>

                  <div className="hero-field hero-field--keyword">
                    <span className="hero-field__label">{t("keyword")}</span>
                    <div className="hero-keyword">
                      <input
                        type="text"
                        className="hero-keyword__input"
                        placeholder={t("search_keyword")}
                        value={keyword}
                        onChange={handleKeywordChange}
                        autoComplete="off"
                      />

                    </div>
                  </div>

                  <button type="submit" className="hero-submit">
                    <span>{t("belowConstructionSlope.search")}</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 19L14.65 14.65"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="container">
          <div className="titile-band">
            <span>{t("featured_products")}</span>
            <h3>{t("recommended_for_you")}</h3>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100">
                  <img alt="" src={product1} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("the_nudura_icf_series")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")}:</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100 bg-white">
                  <img alt="" src={product2} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("casa_lomas_de_machal_machas")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")}:</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100">
                  <img alt="" src={product3} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("casa_lomas_de_machal_machas")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")}:</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100">
                  <img alt="" src={product4} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("casa_lomas_de_machal_machas")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")}:</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100">
                  <img alt="" src={product5} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("casa_lomas_de_machal_machas")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")}:</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")}:</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card gradient-card">
                <div className="img-band w-100">
                  <img alt="" src={product6} />
                </div>
                <div className="text-band p-3">
                  <h5>{t("casa_lomas_de_machal_machas")}</h5>
                  <ul>
                    <li>
                      <span>{t("type")} :</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("size")} :</span>
                      {t("4_way_flip")}
                    </li>
                    <li>
                      <span>{t("shape")} :</span>
                      {t("all_shapes")}
                    </li>
                  </ul>
                  <div className="review-band">
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <span>
                      <i className="fa-regular fa-star"></i>
                    </span>
                    <p>{t("45_reviews")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="action-band d-flex align-item-center justify-content-center">
              <a className="btn-primary icon-btn">
                {t("view_all_products")}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg pt-0">
        <div className="container">
          <div className="card gredient-card bg-primary-gradient">
            <div className="text-band text-left">
              <h5>{t("why_nudura")}</h5>
              <h6 className="text-white">
                {t(
                  "choosing_nudura_integrated_building_technology_products_for_your_next_design_project_is_undoubtedly_the_smart_and_right_choice_for_today_s_complex_design_challenges"
                )}
                <br />
                <br />
                {t(
                  "the_eps_formwork_system_for_casting_nodora_s_unique_concrete_walls_which_significantly_differentiates_them_from_other_concrete_formwork_products_or_traditional_construction_methods_available_on_the_market_today_for_a_smart_economical_and_greenest_construction_method"
                )}
                <br />
                <br />
              </h6>
              <p>
                {t(
                  "on_the_other_hand_nodora_leads_the_way_and_sets_new_standards_showing_planners_engineers_and_contractors_a_smart_fast_efficient_and_advanced_approach_to_both_planning_solutions_and_the_construction_of_residential_and_commercial_buildings"
                )}
                <br />
                <br />
                {t(
                  "nudura_s_award_winning_energy_efficient_technology_means_a_more_efficient_green_building_approach_that_outperforms_all_known_construction_methods_especially_in_the_construction_of_conventional_building_envelope_walls"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg pt-0">
        <div className="container-fuild">
          <div className="titile-band">
            <h3>{t("standard_certification")}</h3>
          </div>
          <div className="slider-band">
            <Slider {...settings}>
              <div className="item pl-2">
                <div className="border-card">
                  <div className="img-band">
                    <img alt="" src={b1} />
                  </div>
                  <div className="text-band">
                    <h3>
                      {t("european_organisation_for_technical_assessment")}
                    </h3>
                    <p>
                      {t(
                        "the_european_organisation_for_technical_assessment_eota_is_a_europe_wide_association_of_technical_assessment_bodies_for_construction_products_established_under_the_construction_products_regulation_cpr"
                      )}
                    </p>
                  </div>
                  <div className="action-band mt-3 d-flex align-item-center justify-content-center">
                    <a className="btn-primary icon-btn border-btn-primary">
                      {t("learn_more")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item pl-2">
                <div className="border-card">
                  <div className="img-band">
                    <img alt="" src={b2} />
                  </div>
                  <div className="text-band">
                    <h3>{t("es_icc_evaluation_service")}</h3>
                    <p>
                      {t(
                        "icc_es_is_a_certification_body_a_subsidiary_of_the_international_code_council_icc_that_provides_technical_evaluations_and_product_certifications_for_code_compliance"
                      )}
                    </p>
                  </div>
                  <div className="action-band mt-3 d-flex align-item-center justify-content-center">
                    <a className="btn-primary icon-btn border-btn-primary">
                      {t("learn_more")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item pl-2">
                <div className="border-card">
                  <div className="img-band">
                    <img alt="" src={b3} />
                  </div>
                  <div className="text-band">
                    <h3>{t("iso_9001_2015")}</h3>
                    <p>
                      {t(
                        "the_gii_is_proud_to_update_its_quality_management_system_to_iso_9001_2015_and_provide_consistent_top_quality_geophysical_services_to_it_s_clients"
                      )}
                    </p>
                  </div>
                  <div className="action-band mt-3 d-flex align-item-center justify-content-center">
                    <a className="btn-primary icon-btn border-btn-primary">
                      {t("learn_more")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item pl-2">
                <div className="border-card">
                  <div className="img-band">
                    <img alt="" src={b4} />
                  </div>
                  <div className="text-band">
                    <h3>{t("uk_green_building_council")}</h3>
                    <p>
                      {t(
                        "green_buildings_are_therefore_characterised_by_a_high_quality_ecological_design_and_superior_resource_efficiency_in_the_areas_of_energy_water_and_materials_damaging_effects_on_health_and_the_environment_are_reduced_to_a_minimum"
                      )}
                    </p>
                  </div>
                  <div className="action-band mt-3 d-flex align-item-center justify-content-center">
                    <a className="btn-primary icon-btn border-btn-primary">
                      {t("learn_more")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item pl-2">
                <div className="border-card">
                  <div className="img-band">
                    <img alt="" src={b5} />
                  </div>
                  <div className="text-band">
                    <h3>{t("council_of_icf_industries")}</h3>
                    <p>
                      {t(
                        "the_insulating_concrete_forms_manufacturers_association_icfma_is_the_north_american_non_profit_trade_association_for_the_insulated_concrete_form_industry_and_was_founded_in_2014_by_a_dedicated_group_of_manufacturers_with_the_interest_of_improving_the_quality_and_acceptance_of_insulated_concrete_form_construction"
                      )}
                    </p>
                  </div>
                  <div className="action-band mt-3 d-flex align-item-center justify-content-center">
                    <a className="btn-primary icon-btn border-btn-primary">
                      {t("learn_more")}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section
        className="why-choose-section"
        aria-labelledby="why-choose-heading"
      >
        <div className="why-choose-media">
          <img alt="" src="Images/benifit-banner.jpg" loading="lazy" />
        </div>

        <div className="why-choose-content">
          <div className="why-choose-heading" id="why-choose-heading">
            <span className="benefit-label">{t("your_benifit")}</span>
            <h3>{t("why_choose_ecobuild_system_ltd")}</h3>
            <p>
              {t(
                "embarked_on_a_global_search_visiting_8_countries_and_reviewing_11_advanced_building_systems_after_extensive_consultation_with_architects_contractors_and_engineers_we_found_one_solution_that_stood_out_nudura_icf_examining_eleven_different_construction_methods_in_depth"
              )}
            </p>
          </div>

          <div className="benefits-grid">
            <article className="benefit-card">
              <div className="benefit-card-icon" aria-hidden="true">
                <img alt="" src="Images/Icons/Proven-Expertise.svg" />
              </div>
              <div className="benefit-card-body">
                <h4>{t("proven_expertise")}</h4>
                <p>
                  {t(
                    "our_seasoned_team_excels_in_icf_products_with_years_of_successful_market_navigation_offering_informed_decisions_and_optimal_results"
                  )}
                </p>
              </div>
            </article>

            <article className="benefit-card">
              <div className="benefit-card-icon" aria-hidden="true">
                <img alt="" src="Images/Icons/Customized-Solutions.svg" />
              </div>
              <div className="benefit-card-body">
                <h4>{t("customized_solutions")}</h4>
                <p>
                  {t(
                    "we_pride_ourselves_on_crafting_personalised_strategies_to_match_your_unique_goals_ensuring_a_seamless_latest_constructions_journey"
                  )}
                </p>
              </div>
            </article>

            <article className="benefit-card">
              <div className="benefit-card-icon" aria-hidden="true">
                <img alt="" src="Images/Icons/Transparent-Partnerships.svg" />
              </div>
              <div className="benefit-card-body">
                <h4>{t("transparent_partnerships")}</h4>
                <p>
                  {t(
                    "transparency_is_key_in_our_client_relationships_we_prioritize_clear_communication_and_ethical_practices_fostering_trust_and_reliability_throughout"
                  )}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="light-bg testimonials-section">
        <div className="container-fuild">
          <div className="titile-band">
            <span className="sub-head-small text-blue">
              {t("our_testimonials")}
            </span>
            <h3>{t("what_do_the_customers_write_about_us")}</h3>
            <p>
              {t(
                "we_don_t_just_build_buildings_we_research_and_develop_new_products_every_day_to_improve_and_advance_the_construction_industry_in_israel"
              )}
            </p>
          </div>

          <div className="slider-band">
            {/* <div className="owl-carousel testimonials-slider owl-theme"> */}
            <Slider {...settings}>
              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="card">
                  <div className="icon-band">
                    <img alt="" src="Images/Icons/msg-mark.svg" />
                  </div>
                  <div className="text-band p-0">
                    <p>
                      {t(
                        "my_experience_with_property_management_services_has_exceeded_expectations_they_efficiently_manage_properties_with_a_professional_and_attentive_approach_in_every_situation_i_feel_reassured_that_any_issue_will_be_resolved_promptly_and_effectively"
                      )}
                    </p>
                    <div className="profile-card">
                      <div className="profile-img">
                        <img alt="" src="Images/profile-01.jpg" />
                      </div>
                      <div className="profile-text">
                        <h6>{t("courtney_henry")}</h6>
                        <span>{t("ceo_themesflat")}</span>
                        <div className="review-band">
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="white-bg">
        <div className="container-fuild">
          <div className="titile-band">
            <h3>{t("trusted_by_over_150_major_companies")}</h3>
          </div>
          <div className="brand-card-band">
            <ul>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-01.png" />{" "}
                </a>
              </li>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-02.png" />{" "}
                </a>
              </li>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-03.png" />{" "}
                </a>
              </li>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-04.png" />{" "}
                </a>
              </li>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-05.png" />{" "}
                </a>
              </li>
              <li>
                <a target="_blank">
                  {" "}
                  <img alt="" src="Images/brand-logo/brand-06.png" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="light-bg blog-section">
        <div className="container">
          <div className="titile-band">
            <span className="sub-head-small text-blue">{t("latest_new")}</span>
            <h3>{t("green_building_information")}</h3>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card">
                <div className="img-band">
                  <img alt="" src="Images/blog-01.jpg" />
                  <div className="blog-date">
                    <p>{t("may_31_2025")}</p>
                  </div>
                </div>
                <div className="text-band">
                  <h4>{t("what_is_green_building")}</h4>
                  <p>
                    {t(
                      "for_many_anything_that_is_considered_green_is_considered_environmentally_friendly_and_meets_the_need_to_prevent_as_many_harmful_effects_on_the_planet_as_possible_while_providing_an_ecological_and_considerate_solution_for_people_who_want_a_home_at_a_reasonable_price_and_without_harming_the_environment"
                    )}
                  </p>
                  <a>{t("read_more")}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card">
                <div className="img-band">
                  <img alt="" src={img} />
                  <div className="blog-date">
                    <p>{t("may_31_2025")}</p>
                  </div>
                </div>
                <div className="text-band">
                  <h4>
                    {t(
                      "the_benefits_of_green_building_using_the_nudura_method"
                    )}
                  </h4>
                  <p>
                    {t(
                      "one_of_the_unique_methods_of_green_construction_is_the_nudura_method_a_canadian_method_with_modular_and_insulated_construction_forms_in_which_the_concrete_is_poured_but_without_sacrificing_the_excellent"
                    )}
                  </p>
                  <a>{t("read_more")}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <div className="card">
                <div className="img-band">
                  <img alt="" src={img2} />
                  <div className="blog-date">
                    <p>{t("may_31_2025")}</p>
                  </div>
                </div>
                <div className="text-band">
                  <h4>
                    {t("design_libraries_made_from_ecological_materials")}
                  </h4>
                  <p>
                    {t(
                      "the_icf_method_has_many_advantages_one_of_the_main_advantages_is_a_significant_saving_in_construction_installation_times_which_makes_any_project_extremely_fast_the_technology_allows_for_stable"
                    )}
                  </p>
                  <a>{t("read_more")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
