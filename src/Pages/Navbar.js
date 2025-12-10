import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import sublogo from "../images/nudura-logo.png";
import { useEffect, useState } from "react";
import EcobuildChat from "./ecobuildChat";
import { useTranslation } from "react-i18next";
import quoteIcon from "../images/Icons/quote.svg";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    contractorType: "",
    phone: "",
    email: "",
    firstNameLastName: "",
    stage: "",
    area: "",
    files: null,
    promotions: false,
  });

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "he", name: "עברית", flag: "🇮🇱" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setShowLangDropdown(false);
    localStorage.setItem("selectedLanguage", langCode);

    if (langCode === "ar" || langCode === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("quote_request_submitted"));
    setShowQuoteForm(false);
    setFormData({
      contractorType: "",
      phone: "",
      email: "",
      firstNameLastName: "",
      stage: "",
      area: "",
      files: null,
      promotions: false,
    });
  };

  useEffect(() => {
    const submenuLinks = document.querySelectorAll(
      ".dropdown-submenu > .dropdown-toggle"
    );

    const handleSubmenuClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const nextMenu = e.target.nextElementSibling;
      if (nextMenu) {
        nextMenu.classList.toggle("show");
      }

      document
        .querySelectorAll(".dropdown-submenu .dropdown-menu.show")
        .forEach((menu) => {
          if (menu !== nextMenu) menu.classList.remove("show");
        });
    };

    submenuLinks.forEach((link) => {
      link.addEventListener("click", handleSubmenuClick);
    });

    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown-wrapper")) {
        setShowLangDropdown(false);
      }

      if (
        showQuoteForm &&
        !e.target.closest(".quote-form-popup") &&
        !e.target.closest(".quote-icon-band")
      ) {
        setShowQuoteForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      submenuLinks.forEach((link) => {
        link.removeEventListener("click", handleSubmenuClick);
      });
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQuoteForm]);

  return (
    <div>
      <header className="header">
        <style>
          {`
    .dropdown-submenu {
      position: relative;
    }
      
    .dropdown-submenu .dropdown-menu {
      top: 0;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "right: 100%;"
          : "left: 100%;"
      }
      margin-top: -1px;
    }

    .language-dropdown-wrapper {
      position: relative;
    }

    .language-dropdown {
      position: absolute;
      top: 50%;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "left: 100%;"
          : "right: 100%;"
      }
      transform: translateY(-50%);
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-width: 200px;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "margin-left: 10px;"
          : "margin-right: 10px;"
      }
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 10000;
    }

    .language-dropdown.show {
      opacity: 1;
      visibility: visible;
      animation: slideUpFade 0.3s ease;
    }

    @keyframes slideUpFade {
      from {
        transform: translateY(-50%) translateX(${
          i18n.language === "he" || i18n.language === "ar" ? "-10px" : "10px"
        });
        opacity: 0;
      }
      to {
        transform: translateY(-50%) translateX(0);
        opacity: 1;
      }
    }

    .language-dropdown-header {
      padding: 12px 16px;
      border-bottom: 1px solid #e5e7eb;
      font-weight: 600;
      font-size: 14px;
      color: #374151;
    }

    .language-option {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      transition: background-color 0.2s;
      border: none;
      background: none;
      width: 100%;
      text-align: ${
        i18n.language === "he" || i18n.language === "ar" ? "right" : "left"
      };
      font-size: 14px;
      direction: ${
        i18n.language === "he" || i18n.language === "ar" ? "rtl" : "ltr"
      };
    }

    .language-option:hover {
      background-color: #f3f4f6;
    }

    .language-option.active {
      background-color: #e0f2fe;
      color: #0284c7;
    }

    .language-flag {
      font-size: 20px;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "margin-left: 10px;"
          : "margin-right: 10px;"
      }
    }

    .language-name {
      flex: 1;
    }

    .language-checkmark {
      color: #0284c7;
      font-size: 16px;
    }

    .icon-band {
      cursor: pointer;
      transition: transform 0.2s;
    }

    .icon-band:hover {
      transform: scale(1.1);
    }

    .chat-popup-wrapper {
      position: fixed;
      bottom: 20px;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "left: 20px;"
          : "right: 20px;"
      }
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "right: auto;"
          : "left: auto;"
      }
      z-index: 9999;
      display: none;
    }

    .chat-popup-wrapper.show {
      display: block;
      animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .fixed-nav {
      position: fixed;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "left: 20px;"
          : "right: 20px;"
      }
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "right: auto;"
          : "left: auto;"
      }
      bottom: 20px;
      z-index: 9998;
    }

    /* Quote Form Styles */
    .quote-form-popup {
      position: fixed;
      bottom: 80px;
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "left: 20px;"
          : "right: 20px;"
      }
      ${
        i18n.language === "he" || i18n.language === "ar"
          ? "right: auto;"
          : "left: auto;"
      }
      width: 500px;
      max-width: 90vw;
      background: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      z-index: 10001;
      animation: slideUp 0.3s ease;
      max-height: 80vh;
      overflow-y: auto;
    }

    .quote-form-header {
      padding: 20px;
      background: #f8f9fa;
      border-bottom: 1px solid #dee2e6;
      border-radius: 8px 8px 0 0;
      font-weight: bold;
      font-size: 18px;
      color: #333;
    }

    .quote-form-content {
      padding: 20px;
    }

    .quote-form-table {
      width: 100%;
      border-collapse: collapse;
    }

    .quote-form-table td {
      padding: 10px 0;
      vertical-align: top;
    }

    .quote-form-table td:first-child {
      width: 40%;
      padding-right: 15px;
    }

    .form-label {
      font-weight: 600;
      color: #333;
      margin-bottom: 5px;
      display: block;
    }

    .required-star {
      color: #e74c3c;
    }

    .form-input {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }

    .form-input:focus {
      outline: none;
      border-color: #4a6491;
    }

    .form-select {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      background: white;
    }

    .file-upload-section {
      margin-top: 10px;
    }

    .file-input-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .file-input-btn {
      padding: 8px 15px;
      background: #4a6491;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }

    .file-name {
      font-size: 12px;
      color: #666;
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 20px;
    }

    .submit-btn {
      width: 100%;
      padding: 12px;
      background: #00d4ff;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      margin-top: 20px;
      transition: background 0.3s;
    }

    .submit-btn:hover {
      background: #3a5471;
    }
.quote-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Quote Form Centered */
.quote-form-popup {
  width: 600px;
  max-width: 90vw;
  max-height: 85vh;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: slideDown 0.3s ease;
  position: relative;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.quote-form-header {
  padding: 20px 24px;
  background: linear-gradient(135deg, #00d4ff 0%, #00a3ff 100%);
  color: white;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quote-form-close {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.quote-form-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.quote-form-content {
  padding: 24px;
  max-height: calc(85vh - 80px);
  overflow-y: auto;
}

.quote-form-table {
  width: 100%;
  border-collapse: collapse;
}

.quote-form-table td {
  padding: 10px 0;
  vertical-align: top;
}

.quote-form-table td:first-child {
  width: 40%;
  padding-right: 15px;
}

.form-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  display: block;
  font-size: 14px;
}

.required-star {
  color: #e74c3c;
}
.form-input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #00b9ff;
  box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.15);
}

.form-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
}

.form-select:focus {
  outline: none;
  border-color: #00b9ff;
  box-shadow: 0 0 0 3px rgba(0, 185, 255, 0.15);
}

.file-upload-section {
  margin-top: 10px;
}

.file-input-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-input-btn {
  padding: 10px 20px;
  background: #00b9ff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s;
}

.file-input-btn:hover {
  background: #00c8ff;
}

.file-name {
  font-size: 13px;
  color: #666;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
}

.checkbox-wrapper input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.checkbox-wrapper label {
  font-size: 14px;
  color: #555;
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background: #00b9ff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 24px;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #00c8ff;
}

.submit-btn:hover {
  background: #00a3ff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(74, 100, 145, 0.3);
}

@media (max-width: 768px) {
  .quote-form-popup {
    width: calc(100vw - 20px);
    max-height: 90vh;
  }

  .quote-form-header {
    font-size: 18px;
    padding: 16px 20px;
  }

  .quote-form-content {
    padding: 20px;
    max-height: calc(90vh - 70px);
  }

  .quote-form-table td:first-child {
    width: 100%;
    padding-right: 0;
    padding-bottom: 5px;
  }
  
  .quote-form-table td {
    display: block;
    padding: 5px 0;
  }
    @media (max-width: 768px) {
      .chat-popup-wrapper {
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "left: 10px;"
            : "right: 10px;"
        }
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "right: auto;"
            : "left: auto;"
        }
        bottom: 80px;
        max-width: calc(100% - 20px);
      }

      .fixed-nav {
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "left: 10px;"
            : "right: 10px;"
        }
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "right: auto;"
            : "left: auto;"
        }
        bottom: 10px;
      }

      .language-dropdown {
        min-width: 180px;
      }

      .quote-form-popup {
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "left: 10px;"
            : "right: 10px;"
        }
        ${
          i18n.language === "he" || i18n.language === "ar"
            ? "right: auto;"
            : "left: auto;"
        }
        bottom: 70px;
        width: calc(100% - 20px);
      }

      .quote-form-table td:first-child {
        width: 100%;
        padding-right: 0;
        padding-bottom: 5px;
      }
      
      .quote-form-table td {
        display: block;
        padding: 5px 0;
      }
    }
  `}
        </style>

        <nav className="navbar navbar-expand-lg">
          <div className="cus-container-fluid">
            <div className="main-logo-band logo-group">
              <div className="logo-g-band">
                <a className="navbar-brand" href="/">
                  <img src={logo} className="lg-img" alt={t("logo")} />
                </a>
                <a className="navbar-brand" href="/">
                  <img src={sublogo} alt={t("logo")} />
                </a>
              </div>
            </div>

            <div className="navmenu-band">
              <ul className="navbar-nav sidenav" id="mySidenav">
                <a
                  href="javascript:void(0)"
                  className="closebtn"
                  onClick={closeNav}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </a>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("products")}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/plus-series">
                        {t("plus_series")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/thecombinedseries">
                        {t("the_combined_series")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/oneseries">
                        {t("one_series")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/nuduraseries">
                        {t("nudura_series")}
                      </Link>
                    </li>

                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle">
                        {t("icf")}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/thermalmass">
                            {t("thermal_mass")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/sustainable-construction"
                          >
                            {t("sustainable_construction")}
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/innovation">
                            {t("innovation")}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/construction-methods"
                          >
                            {t("construction_methods")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("information_center")}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/planning">
                        {t("planning")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/catalogfordirectviewing"
                      >
                        {t("catalog_for_direct_viewing")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/filestodownload">
                        {t("files_to_download")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/standardandlaboratory"
                      >
                        {t("standard_and_laboratory_certifications")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/specification">
                        {t("specifications")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/brochures">
                        {t("brochures")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/projectdescription">
                        {t("project_description")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/articales">
                        {t("articles_and_articles")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/rockplaster">
                        {t("rock_plaster")}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("design_library")}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/belowtheconstructionslope"
                      >
                        {t("below_the_construction_slope")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/flamableconstruction"
                      >
                        {t("flammable_construction")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/noncombstibleconstruction"
                      >
                        {t("non_combustible_construction")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/firewall">
                        {t("firewall")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/formunitprofile">
                        {t("form_unit_profiles")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bimlibrary">
                        {t("bim_library")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/earlydesigncriteria">
                        {t("early_design_criteria")}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("gallery")}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/photogallery">
                        {t("photo_gallery")}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/videogallery">
                        {t("video_gallery")}
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link to="/academy">{t("ecobuild_academy")}</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus">{t("contact_us")}</Link>
                </li>
              </ul>

              <button className="navbar-toogle-btn" onClick={openNav}>
                <img src="Images/sidemenu.png" alt={t("menu")} />
              </button>

              <div className="right-band">
                <a href="login" className="btn-primary">
                  <i className="fa-regular fa-user mr-10"></i>
                  {t("professional_portal")}
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Floating icons + Chat */}
      <div className="fixed-nav" style={{ display: "flex" }}>
        <ul>
          <li className="language-dropdown-wrapper">
            <div
              className="icon-band"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              <img src="Images/Icons/Translate.svg" alt={t("translate")} />
            </div>

            <div
              className={`language-dropdown ${showLangDropdown ? "show" : ""}`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${
                    i18n.language === lang.code ? "active" : ""
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-name">{lang.name}</span>
                  {i18n.language === lang.code && (
                    <span className="language-checkmark">✓</span>
                  )}
                </button>
              ))}
            </div>
          </li>

          {/* Quote Request Icon - NEW */}
          <li>
            <div
              className="icon-band quote-icon-band cursor-pointer"
              onClick={() => setShowQuoteForm(!showQuoteForm)}
              title="Request Quote"
            >
              <img src={quoteIcon} alt="Request Quote" />
              {/* Add a Quote.svg icon to your Images/Icons folder */}
            </div>
          </li>

          {/* Chat toggle */}
          <li>
            <div
              className="icon-band page-up-band cursor-pointer"
              onClick={() => setShowChat((prev) => !prev)}
            >
              <img src="Images/Icons/Page-Up.svg" alt={t("chat")} />
            </div>
          </li>

          <li>
            <div
              className="icon-band page-up-band cursor-pointer"
              id="pageUpBtn"
              onClick={scrollToTop}
            >
              <img src="Images/Icons/GPT.svg" alt={t("gpt")} />
            </div>
          </li>
        </ul>

        {/* Quote Form Popup - CENTERED */}
        {showQuoteForm && (
          <div
            className="quote-form-overlay"
            onClick={() => setShowQuoteForm(false)}
          >
            <div
              className="quote-form-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="quote-form-header">
                <span>{t("request_quote") || "Request a Quote"}</span>
                <button
                  className="quote-form-close"
                  onClick={() => setShowQuoteForm(false)}
                  type="button"
                >
                  ×
                </button>
              </div>
              <div className="quote-form-content">
                <form onSubmit={handleSubmit}>
                  <table className="quote-form-table">
                    <tbody>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("contractor_type") || "Contractor type"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <select
                            name="stage"
                            value={formData.stage}
                            onChange={handleInputChange}
                            className="form-select"
                            required
                          >
                            <option value="">
                              {t("select_contractor_type")}
                            </option>
                            <option value="private_builder">
                              {t("private_builder")}
                            </option>
                            <option value="entrepreneur">
                              {t("entrepreneur")}
                            </option>
                            <option value="private_contractor">
                              {t("private_contractor")}
                            </option>
                            <option value="construction_company">
                              {t("construction_company")}
                            </option>
                            <option value="saturated_construction">
                              {t("saturated_construction")}
                            </option>
                            <option value="public_construction">
                              {t("public_construction")}
                            </option>
                            <option value="other">{t("other")}</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("phone") || "Phone"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("email") || "Email address"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("first_name_last_name") ||
                              "First name and last name"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="firstNameLastName"
                            value={formData.firstNameLastName}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("choose_stage") || "Choose the stage you are in"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <select
                            name="stage"
                            value={formData.stage}
                            onChange={handleInputChange}
                            className="form-select"
                            required
                          >
                            <option value="">
                              {t("select_a_step") || "Select a step"}
                            </option>
                            <option value="planning">
                              {t("planning") || "Planning"}
                            </option>
                            <option value="design">
                              {t("design") || "Design"}
                            </option>
                            <option value="construction">
                              {t("construction") || "Construction"}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label">
                            {t("construction_area") || "Construction area"}{" "}
                            <span className="required-star">*</span>
                          </label>
                        </td>
                        <td>
                          <select
                            name="area"
                            value={formData.area}
                            onChange={handleInputChange}
                            className="form-select"
                            required
                          >
                            <option value="">
                              {t("select_an_area") || "Select an area"}
                            </option>
                            <option value="residential">
                              {t("residential") || "Residential"}
                            </option>
                            <option value="commercial">
                              {t("commercial") || "Commercial"}
                            </option>
                            <option value="industrial">
                              {t("industrial") || "Industrial"}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <div className="file-upload-section">
                            <label className="form-label">
                              {t("upload_files") || "Uploading files"} (DWG/PDF)
                            </label>
                            <div className="file-input-wrapper">
                              <button
                                type="button"
                                className="file-input-btn"
                                onClick={() =>
                                  document.getElementById("fileInput").click()
                                }
                              >
                                {t("choose_files") || "Choose Files"}
                              </button>
                              <input
                                type="file"
                                name="files"
                                onChange={handleInputChange}
                                accept=".dwg,.pdf"
                                style={{ display: "none" }}
                                id="fileInput"
                              />
                              {formData.files && (
                                <span className="file-name">
                                  {formData.files.name}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="checkbox-wrapper">
                    <input
                      type="checkbox"
                      name="promotions"
                      checked={formData.promotions}
                      onChange={handleInputChange}
                      id="promotions"
                    />
                    <label htmlFor="promotions">
                      {t("receive_promotions") ||
                        "Receive promotions and updates by email"}
                    </label>
                  </div>

                  <button type="submit" className="submit-btn">
                    {t("submit_quote") || "Submit Quote Request"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Chat box fixed bottom */}
        <div className={`chat-popup-wrapper ${showChat ? "show" : ""}`}>
          <EcobuildChat open={showChat} onClose={() => setShowChat(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
