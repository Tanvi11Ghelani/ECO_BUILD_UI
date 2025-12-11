import pdffile from '../images/Icons/pdf-fille.svg';
import download from '../images/Icons/Download.svg';
import './proper-spacing.css';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const Specifications = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb
                header={t('specifications')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0 proper-spacing">
                                <h3 className="text-primary mb-5">{t('specifications')}</h3>
                                <h6 className="mb-0 mt-5 mb-4 font-bg-700">{t('this_information_is_intended_to_provide')}</h6>
                            </div>
                            <h6 className="mb-3 mt-5 ">{t('file_attachments')}</h6>
                            <div className="file-list">
                                <div className="file-card">
                                    <a href="https://ecobuild.co.il/wp-content/uploads/2021/01/hydrofoam_520_compressed.pdf"
                                        target="_blank">
                                        <div className="file-icon-band">
                                            <img alt="" src={pdffile} />
                                        </div>
                                        <div className="file-name-band">
                                            <p>{t('specification_in_10_chapters_pdf')}</p>
                                            <span className="small-icon"><img alt="" src={download} /></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Specifications;