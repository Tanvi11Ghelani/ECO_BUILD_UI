import { useTranslation } from "react-i18next";
import house from '../images/GreenNest-Eco-House.jpg';
import chouse from '../images/Corley-House.jpg';
import Breadcrumb from '../common-component/Breadcrumb';

const ArticlesAndArticles = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Breadcrumb
                header={t("articles.breadcrumb.title")}
                subHeader={t("articles.breadcrumb.subtitle")}
            />

            <section>
                <div class="container">
                    <div class="row align-items-center g-4">
                        <div class="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div class="layer_content p-0">
                                <h3 class="text-primary">{t("articles.section1.title")}</h3>
                                <h6 class="mb-0 mt-3 mb-3">
                                    {t("articles.section1.description1")}
                                </h6>
                                <h6 class="mb-0 mb-4">
                                    {t("articles.section1.description2")}
                                </h6>

                                <ul class="details-list mt-2 g-2">
                                    <li>{t("articles.section1.link1")} <a class="priamry-link">{t("articles.section1.link1Text")}</a></li>
                                    <li>{t("articles.section1.link2")} <a class="priamry-link">{t("articles.section1.link2Text")}</a></li>
                                    <li>{t("articles.section1.link3")} <a class="priamry-link">{t("articles.section1.link3Text")}</a></li>
                                    <li>{t("articles.section1.link4")} <a class="priamry-link">{t("articles.section1.link4Text")}</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div class="layer_image small-round-layer border border-blue">
                                <img alt="" src={house} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-0">
                <div class="container">
                    <div class="row align-items-center g-4">
                        <div class="col-md-12">
                            <div class="layer_content p-0">
                                <h6 class="mb-4 font-bg-700">{t("articles.section2.title")}</h6>

                                <ul class="details-list mt-2 g-2 marker-priamry">
                                    <li><a class="priamry-link">{t("articles.section2.news1")}</a></li>
                                    <li><a class="priamry-link">{t("articles.section2.news2")}</a></li>
                                    <li><a class="priamry-link">{t("articles.section2.news3")}</a></li>
                                    <li><a class="priamry-link">{t("articles.section2.news4")}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-0">
                <div class="container">
                    <div class="row align-items-center g-4">
                        <div class="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div class="layer_image small-round-layer border border-blue">
                                <img alt="" src={chouse} />
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div class="layer_content p-0">
                                <h3 class="text-primary">{t("articles.section3.title")}</h3>

                                <h6 class="mb-0 mb-4 font-bold">
                                    {t("articles.section3.description")}
                                </h6>

                                <h5>
                                    <a class="priamry-link">
                                        {t("articles.section3.readMore")}
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ArticlesAndArticles;
