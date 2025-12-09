import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // path relative to this file
import sublogo from '../images/nudura-logo.png'; // path relative to this file
import { useEffect, useState } from "react";
import EcobuildChat from './ecobuildChat';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

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

    // Optional: Save to localStorage
    localStorage.setItem("selectedLanguage", langCode);

    // Optional: Change document direction for RTL languages
    if (langCode === "ar" || langCode === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
  };
  useEffect(() => {
    const submenuLinks = document.querySelectorAll(".dropdown-submenu > .dropdown-toggle");

    const handleSubmenuClick = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const nextMenu = e.target.nextElementSibling;
      if (nextMenu) {
        nextMenu.classList.toggle("show");
      }

      // Close other open submenus
      document.querySelectorAll(".dropdown-submenu .dropdown-menu.show").forEach((menu) => {
        if (menu !== nextMenu) menu.classList.remove("show");
      });
    };

    submenuLinks.forEach((link) => {
      link.addEventListener("click", handleSubmenuClick);
    });
    // Close language dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-dropdown-wrapper")) {
        setShowLangDropdown(false);
      }
    };

    return () => {
      submenuLinks.forEach((link) => {
        link.removeEventListener("click", handleSubmenuClick);
      });
    };
  }, []);

  return (
    <div>
      <header className="header">
        {/* Inline style tag for submenu and chat popup */}
        <style>
          {`
    .dropdown-submenu {
      position: relative;
    }
    .dropdown-submenu .dropdown-menu {
      top: 0;
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'right: 100%;' : 'left: 100%;'}
      margin-top: -1px;
    }

    /* Language Dropdown Styles */
    .language-dropdown-wrapper {
      position: relative;
    }

    .language-dropdown {
      position: absolute;
      top: 50%;
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'left: 100%;' : 'right: 100%;'}
      transform: translateY(-50%);
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      min-width: 200px;
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'margin-left: 10px;' : 'margin-right: 10px;'}
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
        transform: translateY(-50%) translateX(${i18n.language === 'he' || i18n.language === 'ar' ? '-10px' : '10px'});
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
      text-align: ${i18n.language === 'he' || i18n.language === 'ar' ? 'right' : 'left'};
      font-size: 14px;
      direction: ${i18n.language === 'he' || i18n.language === 'ar' ? 'rtl' : 'ltr'};
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
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'margin-left: 10px;' : 'margin-right: 10px;'}
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

    /* Chat popup styles */
    .chat-popup-wrapper {
      position: fixed;
      bottom: 20px;
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'left: 20px;' : 'right: 20px;'}
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'right: auto;' : 'left: auto;'}
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

    /* Fixed icons position */
    .fixed-nav {
      position: fixed;
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'left: 20px;' : 'right: 20px;'}
      ${i18n.language === 'he' || i18n.language === 'ar' ? 'right: auto;' : 'left: auto;'}
      bottom: 20px;
      z-index: 9998;
    }

    @media (max-width: 768px) {
      .chat-popup-wrapper {
        ${i18n.language === 'he' || i18n.language === 'ar' ? 'left: 10px;' : 'right: 10px;'}
        ${i18n.language === 'he' || i18n.language === 'ar' ? 'right: auto;' : 'left: auto;'}
        bottom: 80px;
        max-width: calc(100% - 20px);
      }

      .fixed-nav {
        ${i18n.language === 'he' || i18n.language === 'ar' ? 'left: 10px;' : 'right: 10px;'}
        ${i18n.language === 'he' || i18n.language === 'ar' ? 'right: auto;' : 'left: auto;'}
        bottom: 10px;
      }

      .language-dropdown {
        min-width: 180px;
      }
    }
  `}
        </style>

        <nav className="navbar navbar-expand-lg">
          <div className="cus-container-fluid">
            <div className="main-logo-band logo-group">
              <div className="logo-g-band">
                <a className="navbar-brand" href="/">
                  <img src={logo} className="lg-img" alt={t('logo')} />
                </a>
                <a className="navbar-brand" href="/">
                  <img src={sublogo} alt={t('logo')} />
                </a>
              </div>
            </div>

            <div className="navmenu-band">
              <ul className="navbar-nav sidenav" id="mySidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                  <ion-icon name="close-outline"></ion-icon>
                </a>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('products')}</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/plus-series">{t('plus_series')}</Link></li>
                    <li><Link className="dropdown-item" to="/thecombinedseries">{t('the_combined_series')}</Link></li>
                    <li><Link className="dropdown-item" to="/oneseries">{t('one_series')}</Link></li>
                    <li><Link className="dropdown-item" to="/nuduraseries">{t('nudura_series')}</Link></li>

                    <li className="dropdown-submenu">
                      <a className="dropdown-item dropdown-toggle"  >{t('icf')}</a>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/thermalmass">{t('thermal_mass')}</Link></li>
                        <li><Link className="dropdown-item" to="/sustainable-construction">{t('sustainable_construction')}</Link></li>
                        <li><Link className="dropdown-item" to="/innovation">{t('innovation')}</Link></li>
                        <li><Link className="dropdown-item" to="/construction-methods">{t('construction_methods')}</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('information_center')}</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/planning">{t('planning')}</Link></li>
                    <li><Link className="dropdown-item" to="/catalogfordirectviewing">{t('catalog_for_direct_viewing')}</Link></li>
                    <li><Link className="dropdown-item" to="/filestodownload">{t('files_to_download')}</Link></li>
                    <li><Link className="dropdown-item" to="/standardandlaboratory">{t('standard_and_laboratory_certifications')}</Link></li>
                    <li><Link className="dropdown-item" to="/specification">{t('specifications')}</Link></li>
                    <li><Link className="dropdown-item" to="/brochures">{t('brochures')}</Link></li>
                    <li><Link className="dropdown-item" to="/projectdescription">{t('project_description')}</Link></li>
                    <li><Link className="dropdown-item" to="/articales">{t('articles_and_articles')}</Link></li>
                    <li><Link className="dropdown-item" to="/rockplaster">{t('rock_plaster')}</Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('design_library')}</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/belowtheconstructionslope">{t('below_the_construction_slope')}</Link></li>
                    <li><Link className="dropdown-item" to="/flamableconstruction">{t('flammable_construction')}</Link></li>
                    <li><Link className="dropdown-item" to="/noncombstibleconstruction">{t('non_combustible_construction')}</Link></li>
                    <li><Link className="dropdown-item" to="/firewall">{t('firewall')}</Link></li>
                    <li><Link className="dropdown-item" to="/formunitprofile">{t('form_unit_profiles')}</Link></li>
                    <li><Link className="dropdown-item" to="/bimlibrary">{t('bim_library')}</Link></li>
                    <li><Link className="dropdown-item" to="/earlydesigncriteria">{t('early_design_criteria')}</Link></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{t('gallery')}</a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/photogallery">{t('photo_gallery')}</Link></li>
                    <li><Link className="dropdown-item" to="/videogallery">{t('video_gallery')}</Link></li>
                  </ul>
                </li>

                <li className="nav-item"><Link to="/academy">{t('ecobuild_academy')}</Link></li>
                <li className="nav-item"><Link to="/contactus">{t('contact_us')}</Link></li>
              </ul>

              <button className="navbar-toogle-btn" onClick={openNav}>
                <img src="Images/sidemenu.png" alt={t('menu')} />
              </button>

              <div className="right-band">
                <a href="login" className="btn-primary">
                  <i className="fa-regular fa-user mr-10"></i>{t('professional_portal')}</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Floating icons + Chat */}
      <div className="fixed-nav" style={{ display: 'flex' }}>
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
                  className={`language-option ${i18n.language === lang.code ? "active" : ""
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

          {/* Chat toggle */}
          <li>
            <div
              className="icon-band page-up-band cursor-pointer"
              onClick={() => setShowChat((prev) => !prev)}
            >
              <img src="Images/Icons/Page-Up.svg" alt={t('chat')} />
            </div>
          </li>

          <li>
            <div
              className="icon-band page-up-band cursor-pointer"
              id="pageUpBtn"
              onClick={scrollToTop}
            >
              <img src="Images/Icons/GPT.svg" alt={t('gpt')} />
            </div>
          </li>
        </ul>

        {/* Chat box fixed bottom */}
        <div className={`chat-popup-wrapper ${showChat ? 'show' : ''}`}>
          <EcobuildChat open={showChat} onClose={() => setShowChat(false)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
