import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const AboutUS = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Breadcrumb 
                header={t("aboutUs.breadcrumbTitle")}
                subHeader={t("aboutUs.breadcrumbSubtitle")}
            />

            <section>
                <div className="container">
                    <div className="ab-info-band">
                        <h3 className="text-primary">{t("aboutUs.section1.title")}</h3>
                        <div className="text-band">
                            <h6 className="mb-0">{t("aboutUs.section1.originStory")}</h6>
                            <p>{t("aboutUs.section1.p1")}</p>
                            <p>{t("aboutUs.section1.p2")}</p>

                            <h6 className="mb-0">{t("aboutUs.section1.whyNudura")}</h6>
                            <p>{t("aboutUs.section1.p3")}</p>
                            <p>{t("aboutUs.section1.p4")}</p>
                            <p>{t("aboutUs.section1.p5")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-7">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t("aboutUs.founderSection.title")}</h3>
                                <p className="inner-p-dark">{t("aboutUs.founderSection.p1")}</p>
                                <p className="inner-p-dark">{t("aboutUs.founderSection.p2")}</p>
                                <p className="inner-p-dark">{t("aboutUs.founderSection.p3")}</p>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="layer_image small-round-layer">
                                <img src="Images/founder-profile.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="titile-band">
                        <h3>{t("aboutUs.keyBenefitsTitle")}</h3>
                    </div>

                    <div className="row g-4">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/fast-construction.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.fastConstruction.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.fastConstruction.text")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/structural-durability.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.structuralDurability.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.structuralDurability.text")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/energy-efficiency.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.energyEfficiency.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.energyEfficiency.text")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/global-standards-compliance.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.globalStandards.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.globalStandards.text")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/green-building.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.greenBuilding.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.greenBuilding.text")}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card xy-radius m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/achitectural.svg" />
                                </div>
                                <div className="text-band">
                                    <h5>{t("aboutUs.benefits.architecturalFlexibility.title")}</h5>
                                    <p className="sm-p">{t("aboutUs.benefits.architecturalFlexibility.text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-12">
                            <div className="card gredient-card bg-primary-gradient bg-small-img action-card-full m-d-flex-col">
                                <div className="text-band">
                                    <h3>{t("aboutUs.cta.title")}</h3>
                                    <div className="btn-group lg-btn-group">
                                        <a   className="btn-primary btn-bg-dark">
                                            {t("aboutUs.cta.guideButton")}
                                        </a>
                                        <a   className="btn-secondary">
                                            {t("aboutUs.cta.contactButton")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="titile-band">
                        <h3>{t("aboutUs.projectTypesTitle")}</h3>
                        <p>{t("aboutUs.projectTypesSubtitle")}</p>
                    </div>

                    <div className="row g-4">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/private-homes.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.privateHomes")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/saturated-construction.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.saturatedConstruction")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/high-rise.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.highRise")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/expansion-kibbutzim.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.expansionKibbutzim")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/new-neighborhoods.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.newNeighborhoods")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/military-boarding-schools.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.militarySchools")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/public-buildings.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.publicBuildings")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/entire-residential-complexes.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.residentialComplexes")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="icon-card m-height-128 top-icon-band">
                                <div className="icon-band">
                                    <img src="Images/Icons/schools.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0 mt-2">{t("aboutUs.projects.schools")}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="pt-0">
                <div className="container">
                    <div className="titile-band">
                        <h3>{t("aboutUs.mediaRecognitionTitle")}</h3>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="icon-card m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/compliance-standards.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0">{t("aboutUs.media.standards")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="icon-card m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/significant-savings-costs.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0">{t("aboutUs.media.energySavings")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="icon-card m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/exceptional-climatic-comfort.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0">{t("aboutUs.media.comfort")}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="icon-card m-height-128">
                                <div className="icon-band">
                                    <img src="Images/Icons/high-users.svg" />
                                </div>
                                <div className="text-band">
                                    <h5 className="mb-0">{t("aboutUs.media.userSatisfaction")}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUS;
