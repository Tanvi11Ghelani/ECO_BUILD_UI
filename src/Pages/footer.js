// ./Pages/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row align-items-center g-3 mb-4">
            <div className="col-12 col-md-6 text-center text-md-start">
              <div className="footer-logo">
                <img
                  alt=""
                  src="Images/Logo-white.png"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-end gap-3">
                <p className="mb-0 text-white">{t("follow_us")}:</p>
                <ul className="soical-links d-flex align-items-center gap-2 mb-0 list-unstyled ps-0">
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      target="_blank"
                      className="
                        d-flex align-items-center justify-content-center
                        rounded-circle text-white
                        transition-all
                      "
                      style={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                        backgroundColor: "#345766",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      target="_blank"
                      className="
                        d-flex align-items-center justify-content-center
                        rounded-circle text-white
                        transition-all
                      "
                      style={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                        backgroundColor: "#345766",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      target="_blank"
                      className="
                        d-flex align-items-center justify-content-center
                        rounded-circle text-white
                        transition-all
                      "
                      style={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                        backgroundColor: "#345766",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  {/* LinkedIn */}
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      target="_blank"
                      className="
                        d-flex align-items-center justify-content-center
                        rounded-circle text-white
                        transition-all
                      "
                      style={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                        backgroundColor: "#345766",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>

                  {/* YouTube */}
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      target="_blank"
                      className="
                        d-flex align-items-center justify-content-center
                        rounded-circle text-white
                        transition-all
                      "
                      style={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        fontSize: "18px",
                        backgroundColor: "#345766",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 8px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#345766";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 4px rgba(0,0,0,0.1)";
                      }}
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-3">
              <h6 className="mb-3">
                {t(
                  "specialises_in_providing_high_class_tours_for_those_in_need_contact_us"
                )}
              </h6>
              <ul className="icon-links list-unstyled">
                <li className="mb-2">
                  <a target="_blank" className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-location-dot mt-1"></i>
                    <span>{t("address_moshav_tarom")}</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-clock mt-1"></i>
                    <span>{t("operating_hours_09_00_17_00")}</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-phone-volume mt-1"></i>
                    <span>{t("02_970_9705")}</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a target="_blank" className="d-flex align-items-start gap-2">
                    <i className="fa-solid fa-mobile-retro mt-1"></i>
                    <span>{t("02_533_6134")}</span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="mailto:info@ecobuild.co.il"
                    target="_blank"
                    className="d-flex align-items-start gap-2"
                  >
                    <i className="fa-solid fa-envelope mt-1"></i>
                    <span>{t("info_ecobuild_co_il")}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="mb-3">{t("most_viewed")}</h5>
              <ul className="footer-nav-links list-unstyled">
                <li className="mb-2">
                  <a target="_blank">{t("nudura_adapter_for_high_walls")}</a>
                </li>
                <li className="mb-2">
                  <Link className="dropdown-item" to="/thecombinedseries">
                    {t("ceiling_and_floor_technology")}{" "}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="dropdown-item" to="/standardandlaboratory">
                    {t("explosion_resistance_test")}
                  </Link>
                </li>
                <li className="mb-2">
                  <a target="_blank">{t("alignment_systems")}</a>
                </li>
                <li className="mb-2">
                  <a href="https://zap.dbusiness.co/" target="_blank">
                    {t("website_accessibility_statement")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <h5 className="mb-3">{t("links_on_the_site")}</h5>
              <ul className="footer-nav-links list-unstyled">
                <li className="dropdown mb-2">
                  <a
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("about")}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/aboutus">
                        {t("write_about_us")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/aboutusinpress">
                        {t("write_about_us_in_the_press")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/broadcastnews">
                        {t("broadcast_news")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/faq">
                        {t("frequently_asked_questions_about_nudura_ecobuild")}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="mb-2">
                  <a target="_blank">{t("icf")}</a>
                </li>
                <li className="mb-2">
                  <Link className="mb-2" to="/thecombinedseries">
                    {t("nudura_combined_series")}
                  </Link>
                </li>
                <Link className="mb-2" to="/thecombinedseries">
                  {t("retrofit_insulation_technology")}
                </Link>
                <li className="mb-2">
                  <Link className="dropdown-item" to="/construction-methods">
                    {t("advanced_construction_methods")}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="newsletter-band">
                <h5 className="mb-3">{t("newsletter")}</h5>
                <p className="mb-3">
                  {t(
                    "subscribe_to_our_newsletter_now_and_receive_hot_updates_in_the_construction_industry"
                  )}
                </p>
                <div className="form-group position-relative">
                  <span
                    className="send-icon position-absolute top-50 end-0 translate-middle-y pe-3"
                    style={{ zIndex: 10 }}
                  >
                    <img alt="" src="Images/Icons/send.svg" />
                  </span>
                  <input
                    type="email"
                    className="form-control w-100"
                    id="inputEmail4"
                    placeholder={t("your_email_address")}
                    style={{ color: "white", paddingRight: "50px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <hr className="line-divider my-3" />
          <div className="row g-3 align-items-center">
            <div className="col-12 col-md-7 text-center text-md-start">
              <p className="p-bg-text mb-0">
                {t("2025")}
                <a target="_blank" className="text-white ms-1">
                  {t("ecobuild_system_ltd")}
                </a>
                {t("all_rights_reserved")}
              </p>
            </div>

            <div className="col-12 col-md-5">
              <ul
                className="footer-nav-links mb-0 list-unstyled ps-0"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <li style={{ display: "inline-block" }}>
                  <a target="_blank" style={{ whiteSpace: "nowrap" }}>
                    {t("terms_of_use_of_the_website")}
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a target="_blank" style={{ whiteSpace: "nowrap" }}>
                    {t("privacy_policy")}
                  </a>
                </li>
                <li style={{ display: "inline-block" }}>
                  <a target="_blank" style={{ whiteSpace: "nowrap" }}>
                    {t("cookie_policy")}
                  </a>
                </li>
              </ul>

              <style>{`
        @media (min-width: 768px) {
            .footer_bottom .footer-nav-links {
                justify-content: flex-end !important;
            }
        }
        .footer_bottom .footer-nav-links li a::after {
            content: '' !important;
        }
        .footer_bottom .footer-nav-links li a::before {
            content: '' !important;
        }
    `}</style>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
