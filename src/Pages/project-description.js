import pdf from '../images/Icons/pdf-gray.svg';
import download from '../images/Icons/Download.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const ProjectDescription = () =>{
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('project_description')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('project_description')}</h3>
                    </div>
                    <table className="dltrc" style={{background:"none"}}>
                        <tbody>
                            <tr className="dlheader">
                                <td className="dlheader">{t('file_name')}</td>
                                <td className="dlheader">{t('type')}</td>
                                <td className="dlheader">{t('size')}</td>
                                <td className="dlheader">{t('uploaded_on')}</td>
                                <td className="dlheader">{t('files')}</td>
                            </tr>
                            <tr className="dlinfo">
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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
                                <td className="dlinfo hover01">{t('janacek_residence_project_profile')}</td>
                                <td className="dlinfo hover01">{t('pdf')}</td>
                                <td className="dlinfo hover01">{t('4_93_mb')}</td>
                                <td className="dlinfo hover01">{t('17_feb_2016')}</td>
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

export default ProjectDescription;