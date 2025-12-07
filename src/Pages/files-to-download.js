import pdf from '../images/Icons/pdf-gray.svg';
import download from '../images/Icons/Download.svg';
import pdffile from '../images/Icons/pdf-fille.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';


const FileToDownload = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('file_to_download')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('nodora_installation_manuals_download_chapters')}</h3>
                    </div>
                    <table className="dltrc" style={{background: "none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('notes')}</td>
                                <td className="dlheader">{t('number')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                        <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                         <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                         <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-5">{t('nudura_installation_brochure_details_high_resolution')}</h3>
                                <h6 className="mb-0 mt-5 mb-4 font-bg-700">{t('high_resolution_appendix_a')}</h6>
                                <p className="dark-font-600 mt-3 mb-2">{t('a_1_standard_template_a_2_90_pattern_a_3_45_pattern_a_4_template_with_beveled_finish_a_5_beveled_finish_on_both_sides_a_6_stone_border_pattern')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('a_7_language_brick_extensions_a_8_height_adapter_and_end_cap_a_9_short_t_shaped_pattern_a_10_long_t_shaped_pattern')}</p>
                            </div>
                            <h6 className="mb-3 mt-5 ">{t('file_attachments')}</h6>
                            <div className="file-list">
                                <div className="file-card">
                                    <a href="https://ecobuild.co.il/wp-content/uploads/2021/01/hydrofoam_520_compressed.pdf"
                                        target="_blank">
                                        <div className="file-icon-band">
                                            <img alt=""src={pdffile} />
                                        </div>
                                        <div className="file-name-band">
                                            <p>{t('appendix_a_template_unit_details_pdf')}</p>
                                            <span className="small-icon"><img alt=""src={download} /></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('technical_circulars')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('notes')}</td>
                                <td className="dlheader">{t('number')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                        <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                       <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                          <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                            </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('appendices')}</td>
                                <td className="dlinfo hover01">{t('21')}</td>
                                <td className="dlinfo hover01">{t('a_the_mold_units_are_separated')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('alignment_system')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('notes')}</td>
                                <td className="dlheader">{t('number')}</td>
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('n_a')}</td>
                                <td className="dlinfo hover01">8</td>
                                <td className="dlinfo hover01">{t('introduction')}</td>
                                <td className="dlinfo hover01">
                                    <ul className="file-list-inner-td justify-content-center">
                                           <li><a   className="red-link border-none">
                                                <div className="icon-band"><img alt=""src={pdf} /></div>{t('pdf')}<img
                                                    src={download} className="download-icon" />
                                            </a></li>
                                    </ul>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default FileToDownload;