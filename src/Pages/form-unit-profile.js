import React from 'react';
import Breadcrumb from '../common-component/Breadcrumb';
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


const FormUnitProfile = () => {
    const { t } = useTranslation();
    const concretecoreData = [
    {
        title: t('concretecoreData.title1'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/Standard Form Unit A4A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a01.dwg',
    },
    {
        title: t('concretecoreData.title2'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A02',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/90 Degree Corner Form Unit A4A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a02.dwg',
    },
    {
        title: t('concretecoreData.title3'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A03',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/45 Degree Corner Form Unit A4A03.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a03.dwg',
    },
    {
        title: t('concretecoreData.title4'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A04',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/Single Sided Taper Top Form Unit A4A04.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a04.dwg',
    },
    {
        title: t('concretecoreData.title5'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A05',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/Double Sided Taper Top Form Unit A4A05.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a05.dwg',
    },
    {
        title: t('concretecoreData.title6'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/Brick Ledge Form Unit A4A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a06.dwg',
    },
    {
        title: t('concretecoreData.title7'),
        size: '4"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A4A08',
        pdf: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/End Cap and Height Adjuster A4A08.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/Concrete core mold 102 mm/a4a08.dwg',
    },

]
const sixinchData = [
    {
        title: t('sixinchData.title1'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/Standard Form Unit A6A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a01.dwg',
    },
    {
        title: t('sixinchData.title2'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A02',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/90 Degree Corner Form Unit A6A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a02.dwg',
    },
    {
        title: t('sixinchData.title3'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A03',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/45 Degree Corner Form Unit A6A03.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a03.dwg',
    },
    {
        title: t('sixinchData.title4'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A04',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/Single Sided Taper Top Form Unit A6A04.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a04.dwg',
    },
    {
        title: t('sixinchData.title5'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A05',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/Double Sided Taper Top Form Unit A6A05.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a05.dwg',
    },
    {
        title: t('sixinchData.title6'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/Brick Ledge Form Unit A6A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a06.dwg',
    },
    {
        title: t('sixinchData.title7'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/T-Form Unit A6A07.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a07.dwg',
    },
    {
        title: t('sixinchData.title8'),
        size: '6"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A6A08',
        pdf: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/End Cap and Height Adjuster A6A08.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/152mm- 6 Concrete Core Forms/a6a08.dwg',
    },

]
const eightinchData = [
    {
        title: t('eightinchData.title1'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/Standard Form Unit A8A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a01.dwg',
    },
    {
        title: t('eightinchData.title2'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A02',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/90 Degree Corner Form Unit A8A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a02.dwg',
    },
    {
        title: t('eightinchData.title3'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A03',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/45 Degree Corner Form Unit A8A03.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a6a03.dwg',
    },
    {
        title: t('eightinchData.title4'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A04',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/Single Sided Taper Top Form Unit A8A04.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a04.dwg',
    },
    {
        title: t('eightinchData.title5'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A05',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/Double Sided Taper Top Form Unit A8A05.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a05.dwg',
    },
    {
        title: t('eightinchData.title6'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/Brick Ledge Form Unit A8A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a06.dwg',
    },
    {
        title: t('eightinchData.title7'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/Brick Ledge Form Unit A8A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a07.dwg',
    },
    {
        title: t('eightinchData.title7'),
        size: '8"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A8A08',
        pdf: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/End Cap and Height Adjuster A8A08.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/203mm- 8 Concrete Core Forms/a8a08.dwg',
    },

]
const teninchData = [
    {
        title: t('teninchData.title1'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/Standard Form Unit A10A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a01.dwg',
    },
    {
        title: t('teninchData.title2'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A02',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/90 Degree Corner Form Unit A10A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a02.dwg',
    },
    {
        title: t('teninchData.title3'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A03',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/45 Degree Corner Form Unit A10A03.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a03.dwg',
    },
    {
        title: t('teninchData.title4'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A04',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/Single Sided Taper Top Form Unit A10A04.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a04.dwg',
    },
    {
        title: t('teninchData.title5'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A05',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/Double Sided Taper Top Form Unit A10A05.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a05.dwg',
    },
    {
        title: t('teninchData.title6'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/Brick Ledge Form Unit A10A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a06.dwg',
    },
    {
        title: t('teninchData.title7'),
        size: '10"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A10A08',
        pdf: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/End Cap and Height Adjuster A10A08.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/254mm- 10 Concrete Core Forms/a10a08.dwg',
    },

]
const twelveinchData = [
    {
        title: t('twelveinchData.title1'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/Standard Form Unit A12A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a01.dwg',
    },
    {
        title: t('twelveinchData.title2'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A02',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/90 Degree Corner Form Unit A12A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a02.dwg',
    },
    {
        title: t('twelveinchData.title3'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A03',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/45 Degree Corner Form Unit A12A03.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a03.dwg',
    },
    {
        title: t('twelveinchData.title4'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A04',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/Single Sided Taper Top Form Unit A12A04.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a04.dwg',
    },
    {
        title: t('twelveinchData.title5'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A05',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/Double Sided Taper Top Form Unit A12A05.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a05.dwg',
    },
    {
        title: t('twelveinchData.title6'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A06',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/Brick Ledge Form Unit A12A06.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a06.dwg',
    },
    {
        title: t('twelveinchData.title7'),
        size: '12"',
        status: t('belowConstructionSlope.isolated'),
        code: 'A12A08',
        pdf: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/End Cap and Height Adjuster A12A08.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/305mm- 12 Concrete Core Forms/a12a08.dwg',
    },

]
const eightXRinchData = [
    {
        title: t('eightXRinchData.title1'),
        size: '8"',
        code: 'A12A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/8 (203mm) XR35 Concrete Core Forms/Standard Form Unit XR8A01.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/8 (203mm) XR35 Concrete Core Forms/xr8a01.dwg',
    },
    {
        title: t('eightXRinchData.title2'),
        size: '8"',
        code: 'A12A01',
        pdf: 'EcoBuildPdf/FormUnitProfiles/8 (203mm) XR35 Concrete Core Forms/90 Degree Corner Form Unit XR8A02.pdf',
        dwg: 'EcoBuildPdf/FormUnitProfiles/8 (203mm) XR35 Concrete Core Forms/xr8a02.dwg',
    },

]
    return (
        <div>
            <Breadcrumb 
                header={t('form_unit_profiles')}
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
                            <div className="layer_content p-0 m-mb-0">
                                <h3 className="text-primary mb-3 m-mb-0">{t('form_unit_profiles')}</h3>
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
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('concrete_core_mold_102_mm')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                                {concretecoreData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('152mm_6_concrete_core_forms')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                             {sixinchData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('203mm_8_concrete_core_forms')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            {eightinchData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('254mm_10_concrete_core_forms')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            {teninchData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('305mm_12_concrete_core_forms')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            {twelveinchData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('8_203mm_xr35_concrete_core_forms')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('description')}</td>
                                <td className="dlheader">{t('core_thickness')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('explanation_page')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                                                    {eightXRinchData.map((item, index) => (
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
                                            >{t('explanation_page')}</a>
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
                </div>
            </section>
        </div>
    );
}
export default FormUnitProfile;