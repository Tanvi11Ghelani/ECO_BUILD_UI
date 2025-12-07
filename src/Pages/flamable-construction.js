import React, { useState } from 'react';
import image1 from '../images/Icons/below-the-construction-slope.svg';
import image2 from '../images/Icons/flammable-construction.svg';
import image3 from '../images/Icons/Non-combustible-construction.svg';
import image4 from '../images/Icons/firewall.svg';
import Breadcrumb from '../common-component/Breadcrumb';
import Tab from '../common-component/Tab';
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


const floor = [
    {
        description: 'Insulated Brick 6" (152mm)',
        coreThickness: '6"',
        claddingType: 'with-bricks',
        insulation: 'isolated',
        fileName: 'B6C10',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Insulated Brick 8" (203mm)',
        coreThickness: '8"',
        claddingType: 'with-bricks',
        insulation: 'isolated',
        fileName: 'B8C11',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Insulated Brick 10" (254mm)',
        coreThickness: '10"',
        claddingType: 'with-bricks',
        insulation: 'isolated',
        fileName: 'B10C07',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Insulated Brick 12" (305mm)',
        coreThickness: '12"',
        claddingType: 'with-bricks',
        insulation: 'isolated',
        fileName: 'B12C06',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Uninsulated Brick 6" (152mm)',
        coreThickness: '6"',
        claddingType: 'with-bricks',
        insulation: 'not-isolated',
        fileName: 'B6C11',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Uninsulated brick 8" (203mm)',
        coreThickness: '8"',
        claddingType: 'with-bricks',
        insulation: 'not-isolated',
        fileName: 'B8C12',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Uninsulated Brick 10" (254mm)',
        coreThickness: '10"',
        claddingType: 'with-bricks',
        insulation: 'not-isolated',
        fileName: 'B10C08',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
    {
        description: 'Uninsulated brick 12" (305mm)',
        coreThickness: '12"',
        claddingType: 'with-bricks',
        insulation: 'not-isolated',
        fileName: 'B12C07',
        pdf: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/DWGB6D03.pdf',
        dwg: '/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/InsulatedBrick/B6D03.dwg',
    },
]

const FlamableConstruction = () => {
    const { t } = useTranslation();
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('floor-at-grade');

    // Define tabs array for Tab component
    const tabs = [
        { id: 'floor-at-grade', label: t('floor_at_grade_details') },
        { id: 'intermediate-floor', label: t('intermediate_floor') },
        { id: 'roof', label: t('roof') },
        { id: 'door', label: t('door') },
        { id: 'window', label: t('window') },
    ];

    // Handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <Breadcrumb 
                header={t('flammable_construction')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
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
                                <h3 className="text-primary mb-3">{t('flammable_construction')}</h3>
                                <p className="dark-font-600 mt-2 mb-2">{t('this_section_covers_what_you_need_to_know_when_using_nudura_above_ground_for_buildings_that_are_classified_as_combustible_construction_under_applicable_building_codes_this_type_of_construction_is_most_often_found_in_low_rise_multi_residential_homes_in_north_america')}</p>
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
                                <label for="inputEmail4" className="form-label">{t('file_name')}</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder={t('search_here')} />
                            </div>
                            <div className="form-group w-40">
                                <label for="inputEmail4" className="form-label">{t('thickness')}</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder={t('search_here')} />
                            </div>
                            <div className="form-group w-30 border-none">
                                <label for="inputEmail4" className="form-label">{t('description')}</label>
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
                    {/* Tab Component - Reusable tab navigation */}
                    <Tab 
                        tabs={tabs}
                        defaultActiveTab="floor-at-grade"
                        onTabChange={handleTabChange}
                    />
                </div>
                <div className="container">
                    {/* Tab Content - Render based on active tab */}
                    {activeTab === 'floor-at-grade' && (
                        <section className="white-bg pt-0">
                                <div className="titile-band">
                                    <h3 className="text-primary text-center">{t('slab_on_grade')}</h3>
                                </div>
                                <table className="dltrc" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('core_thickness')}</td>
                                            <td className="dlheader">{t('cladding_type')}</td>
                                            <td className="dlheader">{t('insulation')}</td>
                                            <td className="dlheader">{t('file_name')}</td>
                                            <td className="dlheader">{t('explanation_page')}</td>
                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                            {floor.map((item, index) => (
                                                <tr className="dlinfo" key={index}>
                                                    <td className="dlinfo hover01">{item.description}</td>
                                                    <td className="dlinfo hover01">{item.coreThickness}</td>

                                                    {/* Cladding type */}
                                                    <td className="dlinfo hover01">
                                                        <span
                                                            className={`status ${item.claddingType === "with-bricks"
                                                                    ? "with-bricks"
                                                                    : "without-bricks"
                                                                }`}
                                                        >
                                                            {item.claddingType === "with-bricks"
                                                                ? "With bricks"
                                                                : "Without bricks"}
                                                        </span>
                                                    </td>

                                                    {/* Insulation */}
                                                    <td className="dlinfo hover01">
                                                        <span
                                                            className={
                                                                item.insulation === "not-isolated"
                                                                    ? "status not-isolated"
                                                                    : "status"
                                                            }
                                                        >
                                                            {item.insulation === "not-isolated"
                                                                ? "Not isolated"
                                                                : "Isolated"}
                                                        </span>
                                                    </td>

                                                    <td className="dlinfo hover01">{item.fileName}</td>

                                                    <td className="dlinfo hover01">
                                                        <a   className="explanation-link">{t('explanation_page')}</a>
                                                    </td>

                                                    {/* File links */}
                                                    <td className="dlinfo hover01">
                                                        <ul className="file-list-inner-td">
                                                            <li>
                                                                <a
                                                                    href={item.pdf}
                                                                    target="_blank"
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
                    )}

                    {activeTab === 'intermediate-floor' && (
                        <section className="white-bg pt-0">
                                <table className="dltrc" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('core_thickness')}</td>
                                            <td className="dlheader">{t('cladding_type')}</td>
                                            <td className="dlheader">{t('insulation')}</td>
                                            <td className="dlheader">{t('file_name')}</td>
                                            <td className="dlheader">{t('explanation_page')}</td>
                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </section>
                    )}

                    {activeTab === 'roof' && (
                        <section className="white-bg pt-0">
                                <table className="dltrc" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('core_thickness')}</td>
                                            <td className="dlheader">{t('cladding_type')}</td>
                                            <td className="dlheader">{t('insulation')}</td>
                                            <td className="dlheader">{t('file_name')}</td>
                                            <td className="dlheader">{t('explanation_page')}</td>
                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </section>
                    )}

                    {activeTab === 'door' && (
                        <section className="white-bg pt-0">
                                <table className="dltrc" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('core_thickness')}</td>
                                            <td className="dlheader">{t('cladding_type')}</td>
                                            <td className="dlheader">{t('insulation')}</td>
                                            <td className="dlheader">{t('file_name')}</td>
                                            <td className="dlheader">{t('explanation_page')}</td>
                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </section>
                    )}

                    {activeTab === 'window' && (
                        <section className="white-bg pt-0">
                                <table className="dltrc" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('core_thickness')}</td>
                                            <td className="dlheader">{t('cladding_type')}</td>
                                            <td className="dlheader">{t('insulation')}</td>
                                            <td className="dlheader">{t('file_name')}</td>
                                            <td className="dlheader">{t('explanation_page')}</td>
                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status">{t('isolated')}</span></td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className="dlinfo">
                                            <td className="dlinfo hover01">{t('insulated_brick_6_152mm')}</td>
                                            <td className="dlinfo hover01">{t('6')}</td>
                                            <td className="dlinfo hover01"><span className="status with-bricks">{t('with_bricks')}</span>
                                            </td>
                                            <td className="dlinfo hover01"><span className="status not-isolated">{t('not_isolated')}</span>
                                            </td>
                                            <td className="dlinfo hover01">{t('b6c10')}</td>
                                            <td className="dlinfo hover01"><a   className="explanation-link">{t('explanation_page')}</a></td>
                                            <td className="dlinfo hover01">
                                                <ul className="file-list-inner-td">
                                                    <li><a   className="red-link">
                                                            <div className="icon-band"><img src={image9} />
                                                            </div>{t('pdf')}<img src={image10}
                                                                className="download-icon" />
                                                        </a></li>
                                                    <li><a   className="blue-link">
                                                            <div className="icon-band"><img src={image11} /></div>{t('dwg')}<img src={image10} className="download-icon" />
                                                        </a></li>
                                                </ul>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </section>
                    )}
                </div>


            </section>
        </div>
    );
}


export default FlamableConstruction;