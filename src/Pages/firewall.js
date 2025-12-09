import React, { useState, useMemo } from 'react';
import image1 from '../images/Icons/below-the-construction-slope.svg';
import image2 from '../images/Icons/flammable-construction.svg';
import image3 from '../images/Icons/Non-combustible-construction.svg';
import image4 from '../images/Icons/firewall.svg';
import image5 from '../images/Icons/form-unit-profiles.svg';
import image6 from '../images/Icons/BIM-library.svg';
import image7 from '../images/Icons/early-design-criteria.svg';
import image9 from '../images/Icons/pdf-gray.svg';
import image10 from '../images/Icons/Download.svg';
import image11 from '../images/Icons/dwg.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './below-the-construction-slope.css';

const FireWall = () => {
  const { t } = useTranslation();

  // State for search inputs
  const [searchInputs, setSearchInputs] = useState({
    fileName: '',
    thickness: '',
    description: ''
  });

  // Navigation cards configuration
  const navigationCards = [
    { to: '/belowtheconstructionslope', icon: image1, label: 'below_the_construction_slope', color: 'blue' },
    { to: '/flamableconstruction', icon: image2, label: 'flammable_construction', color: 'yellow' },
    { to: '/noncombstibleconstruction', icon: image3, label: 'non_combustible_construction', color: 'gray' },
    { to: '/firewall', icon: image4, label: 'firewall', color: 'red' },
    { to: '/formunitprofile', icon: image5, label: 'form_unit_profiles', color: 'green' },
    { to: '/bimlibrary', icon: image6, label: 'bim_library', color: 'orange' },
    { to: '/earlydesigncriteria', icon: image7, label: 'early_design_criteria', color: 'purple' },
  ];

  // Original firewall data
  const originalFirewallData = [
    { titleKey: 'firewell.title1', code: 'FW6D1' },
    { titleKey: 'firewell.title2', code: 'FW6D2A' },
    { titleKey: 'firewell.title3', code: 'FW6D2B' },
    { titleKey: 'firewell.title4', code: 'FW6D3' },
    { titleKey: 'firewell.title5', code: 'FW6D4' },
    { titleKey: 'firewell.title6', code: 'FW6D5' },
    { titleKey: 'firewell.title7', code: 'FW6D6' },
  ].map(item => ({
    title: t(item.titleKey),
    size: '6"',
    code: item.code,
    pdf: `EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/${item.code.includes('FW6D1') ? 'FirewallSTCFooting' : 
          item.code.includes('FW6D2A') ? 'FirewallSTC Intermediate Floor (a)' :
          item.code.includes('FW6D2B') ? 'FirewallSTC Intermediate Floor (b)' :
          item.code.includes('FW6D3') ? 'FirewallSTC at Ceiling' :
          item.code.includes('FW6D4') ? 'FirewallSTC at Roof (Canada)' :
          item.code.includes('FW6D5') ? 'FirewallSTC at Roof (USA)' :
          'FirewallSTC Plan View'}${item.code}.pdf`,
    dwg: `EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/${item.code.toLowerCase()}.dwg`,
  }));

  // Handle search input changes
  const handleSearchInputChange = (field, value) => {
    setSearchInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Filter firewall data based on search inputs
  const filteredFirewallData = useMemo(() => {
    return originalFirewallData.filter(item => {
      const fileNameMatch = searchInputs.fileName 
        ? item.code.toLowerCase().includes(searchInputs.fileName.toLowerCase())
        : true;
      
      const thicknessMatch = searchInputs.thickness 
        ? item.size.toLowerCase().includes(searchInputs.thickness.toLowerCase())
        : true;
      
      const descriptionMatch = searchInputs.description 
        ? item.title.toLowerCase().includes(searchInputs.description.toLowerCase())
        : true;
      
      return fileNameMatch && thicknessMatch && descriptionMatch;
    });
  }, [originalFirewallData, searchInputs]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    // The filteredFirewallData is already updated automatically when searchInputs change
    console.log('Searching with:', searchInputs);
  };

  // Handle advanced search (you can customize this)
  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    // Reset all search fields
    setSearchInputs({
      fileName: '',
      thickness: '',
      description: ''
    });
  };

  // Search fields configuration
  const searchFields = [
    { 
      label: 'file_name', 
      field: 'fileName',
      width: 'w-30', 
      placeholder: 'search_here',
      value: searchInputs.fileName
    },
    { 
      label: 'thickness', 
      field: 'thickness',
      width: 'w-40', 
      placeholder: 'search_here',
      value: searchInputs.thickness
    },
    { 
      label: 'description', 
      field: 'description',
      width: 'w-30 border-none', 
      placeholder: 'search_here',
      value: searchInputs.description
    },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb-band">
          <div className="text-band">
            <span>{t('firewall')}</span>
            <h2>{t('building_homes_also_for_the_generations_to_come')}</h2>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <section>
        <div className="container">
          <div className="row g-4">
            {navigationCards.map((card, index) => (
              <div className="col-md-3" key={index}>
                <div className="card icon-top-primary-card h-245">
                  <Link to={card.to} className={`icon-card top-icon-band ${card.color} cus-p-16`}>
                    <div className="icon-band">
                      <img src={card.icon} alt={t(card.label)} />
                    </div>
                  </Link>
                  <div className="text-band">
                    <h4>{t(card.label)}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="layer_content p-0">
                <h3 className="text-primary">{t('firewall')}</h3>
                <p className="dark-font-600 mt-3">{t('as_icf_technology_becomes_increasingly')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Panel */}
      <section className="pt-0">
        <div className="container">
          <div className="belowTheConstructionSlope-container">
            <div className="search-penal bg-penal">
              <div className="left-penal">
                {searchFields.map((field, index) => (
                  <div className={`form-group ${field.width}`} key={index}>
                    <label htmlFor={`input-${index}`} className="form-label">
                      {t(field.label)}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`input-${index}`}
                      placeholder={t(field.placeholder)}
                      value={field.value}
                      onChange={(e) => handleSearchInputChange(field.field, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="right-penal">
                <button 
                  className="btn-primary"
                  onClick={handleSearch}
                  type="button"
                >
                  {t('search')}<i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button 
                  className="btn-primary white-border-btn"
                  onClick={handleAdvancedSearch}
                  type="button"
                >
                  {t('search_advanced')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="pt-0">
        <div className="container">
          <section className="white-bg pt-0">
            {filteredFirewallData.length > 0 ? (
              <table className="dltrc" style={{ background: "none" }}>
                <tbody>
                  <tr className="dlheader">
                    <td className="dlheader">{t('description')}</td>
                    <td className="dlheader">{t('core_thickness')}</td>
                    <td className="dlheader">{t('file_name')}</td>
                    <td className="dlheader">{t('explanation_page')}</td>
                    <td className="dlheader">{t('files')}</td>
                  </tr>
                  {filteredFirewallData.map((item, index) => (
                    <tr className="dlinfo" key={index}>
                      <td className="dlinfo hover01">{item.title}</td>
                      <td className="dlinfo hover01">{item.size}</td>
                      <td className="dlinfo hover01">{item.code}</td>
                      <td className="dlinfo hover01">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="explanation-link"
                        >
                          {t('belowConstructionSlope.explanationPage')}
                        </a>
                      </td>
                      <td className="dlinfo hover01">
                        <ul className="file-list-inner-td">
                          <li>
                            <a
                              href={item.pdf}
                              download={`${item.code}.pdf`}
                              rel="noopener noreferrer"
                              className="red-link"
                            >
                              <div className="icon-band">
                                <img src={image9} alt={t('pdf')} />
                              </div>
                              {t('pdf')}
                              <img src={image10} className="download-icon" alt={t('download')} />
                            </a>
                          </li>
                          <li>
                            <a
                              href={item.dwg}
                              download={`${item.code}.dwg`}
                              rel="noopener noreferrer"
                              className="blue-link"
                            >
                              <div className="icon-band">
                                <img src={image11} alt={t('dwg')} />
                              </div>
                              {t('dwg')}
                              <img src={image10} className="download-icon" alt={t('download')} />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-results-message">
                <p>{t('no_results_found') || 'No results found matching your search criteria.'}</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default FireWall;