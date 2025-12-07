import eotslogo from '../images/eota-logo.jpg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const Plannig = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('planning')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">

                    <div className="row g-4">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('firewall_details')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('flammable_construction')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('construction_below_ground_level')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('pre_planning_criteria')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('non_combustible_construction')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('bim_revit')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="card icon-top-primary-card h-245 action-icon-card single-action-band">
                                <div className="logo-img-band">
                                    <img alt=""src={eotslogo} />
                                </div>
                                <div className="text-band">
                                    <h5>{t('description_of_template_units')}</h5>
                                </div>
                                <div className="action-band">
                                    <a   className="btn-primary icon-btn border-btn-primary">{t('watching_the_series')}<i
                                            className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </section>
        </div>
    );
}

export default Plannig;