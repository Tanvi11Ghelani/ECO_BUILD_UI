import React from 'react';
import image1 from '../images/Icons/below-the-construction-slope.svg';
import image2 from '../images/Icons/flammable-construction.svg';
import image3 from '../images/Icons/Non-combustible-construction.svg';
import image4 from '../images/Icons/firewall.svg';
import image5 from '../images/Icons/form-unit-profiles.svg';
import image6 from '../images/Icons/BIM-library.svg';
import image7 from '../images/Icons/early-design-criteria.svg';
import image8 from '../images/Icons/early-design-criteria-1.svg';
import image9 from '../images/Icons/pdf-gray.svg';
import image10 from '../images/Icons/Download.svg';
import image11 from '../images/Icons/dwg.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './below-the-construction-slope.css';


const FireWall = () => {
  const { t } = useTranslation();
  const data = [
  {
    title: t('firewell.title1'),
    size: '6"',
    code: 'FW6D1',
    pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTCFootingFW6D1.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d1.dwg',
    fileName: 'FW6D1',
  },
  {
    title: t('firewell.title2'),
    size: '6"',
    code: 'FW6D2A',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC Intermediate Floor (a) FW6D2A.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d2a.dwg',
    fileName: 'FW6D2A',
  },
  {
    title: t('firewell.title3'),
    size: '6"',
    code: 'FW6D2B',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC Intermediate Floor (b) FW6D2B.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d2b.dwg',
    fileName: 'FW6D2B',
  },
  {
    title: t('firewell.title4'),
    size: '6"',
    code: 'FW6D3',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC at Ceiling FW6D3.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d3.dwg',
    fileName: 'FW6D3',
  },
  {
    title: t('firewell.title5'),
    size: '6"',
    code: 'FW6D4',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC at Roof (Canada) FW6D4.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d4.dwg',
    fileName: 'FW6D4',
  },
  {
    title: t('firewell.title6'),
    size: '6"',
    code: 'FW6D5',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC at Roof (USA) FW6D5.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d5.dwg',
    fileName: 'FW6D5',
  },
  {
    title: t('firewell.title7'),
    size: '6"',
    code: 'FW6D6',
     pdf: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/FirewallSTC Plan View FW6D6.pdf',
    dwg: 'EcoBuildPdf/Firewall/152mm-6CONCRETECOREFORM152/fw6d6.dwg',
    fileName: 'FW6D6',
  },
];
  return (
    <div>
      <div className="container">
        <div className="breadcrumb-band">
          <div className="text-band">
            <span>{t('firewall')}</span>
            <h2>{t('building_homes_also_for_the_generations_to_come')}</h2>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row g-4">

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/belowtheconstructionslope" className="icon-card top-icon-band blue cus-p-16">
                  <div className="icon-band">
                    <img src={image1} alt={t('below_the_construction_slope')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('below_the_construction_slope')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/flamableconstruction" className="icon-card top-icon-band yellow cus-p-16">
                  <div className="icon-band">
                    <img src={image2} alt={t('flammable_construction')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('flammable_construction')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/noncombstibleconstruction" className="icon-card top-icon-band gray cus-p-16">
                  <div className="icon-band">
                    <img src={image3} alt={t('non_combustible_construction')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('non_combustible_construction')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/firewall" className="icon-card top-icon-band red cus-p-16">
                  <div className="icon-band">
                    <img src={image4} alt={t('firewall')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('firewall')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/formunitprofile" className="icon-card top-icon-band green cus-p-16">
                  <div className="icon-band">
                    <img src={image5} alt={t('form_unit_profiles')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('form_unit_profiles')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/bimlibrary" className="icon-card top-icon-band orange cus-p-16">
                  <div className="icon-band">
                    <img src={image6} alt={t('bim_library')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('bim_library')}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/earlydesigncriteria" className="icon-card top-icon-band purple cus-p-16">
                  <div className="icon-band">
                    <img src={image7} alt={t('early_design_criteria')} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t('early_design_criteria')}</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="layer_content p-0">
                <h3 className="text-primary">{t('firewall')}</h3>
                <p className="dark-font-600 mt-3">{t('as_icf_technology_becomes_increasingly_popular_for_commercial_construction_there_is_debate_as_to_whether_it_can_be_used_for_the_construction_of_firewalls_within_building_structures_here_we_outline_the_information_you_need_to_detail_firewall_connections_with_nudura_forms_that_are_fully_compliant_with_north_american_codes')}</p>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="belowTheConstructionSlope-container">
          <div className="search-penal bg-penal">
            <div className="left-penal">
              <div className="form-group w-30">
                <label htmlFor="inputEmail4" className="form-label">{t('file_name')}</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={t('search_here')} />
              </div>
              <div className="form-group w-40">
                <label htmlFor="inputEmail4" className="form-label">{t('thickness')}</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={t('search_here')} />
              </div>
              <div className="form-group w-30 border-none">
                <label htmlFor="inputEmail4" className="form-label">{t('description')}</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder={t('search_here')} />
              </div>
            </div>
            <div className="right-penal">
              <a   className="btn-primary">{t('search')}<i className="fa-solid fa-magnifying-glass"></i></a>
              <a   className="btn-primary white-border-btn">{t('search_advanced')}</a>
            </div>

          </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <section className="white-bg pt-0">
            <table className="dltrc" style={{ background: "none" }}>
              <tbody>
                <tr className="dlheader">
                  <td className="dlheader">{t('description')}</td>
                  <td className="dlheader">{t('core_thickness')}</td>
                  <td className="dlheader">{t('file_name')}</td>
                  <td className="dlheader">{t('explanation_page')}</td>
                  <td className="dlheader">{t('files')}</td>
                </tr>
                {data.map((item, index) => (
                  <tr className="dlinfo" key={index}>
                    <td className="dlinfo hover01">{item.title}</td>
                    <td className="dlinfo hover01">{item.size}</td>
                    <td className="dlinfo hover01">{item.code}</td>

                    {/* Explanation Page */}
                    <td className="dlinfo hover01">
                      <a
                        href={item.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="explanation-link"
                      >{t('belowConstructionSlope.explanationPage')}</a>
                    </td>

                    {/* File Links */}
                    <td className="dlinfo hover01">
                      <ul className="file-list-inner-td">
                        <li>
                          <a
                            href={item.pdf}
                            download={`${item.fileName}.pdf`}
                            rel="noopener noreferrer"
                            className="red-link"
                          >
                            <div className="icon-band">
                              <img src={image9} alt={t('pdf')} />
                            </div>{t('pdf')}<img
                              src={image10}
                              className="download-icon"
                              alt={t('download')}
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href={item.dwg}
                            download={`${item.fileName}.dwg`}
                            rel="noopener noreferrer"
                            className="blue-link"
                          >
                            <div className="icon-band">
                              <img src={image11} alt={t('dwg')} />
                            </div>{t('dwg')}<img
                              src={image10}
                              className="download-icon"
                              alt={t('download')}
                            />
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </section>
        </div>
      </section>
    </div>
  );
}

export default FireWall;