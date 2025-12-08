import pdf from '../pdf-file/a4a01.pdf';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const CatalogForDirectDownload = () => {
  const { t } = useTranslation();
    return(
        <div>
            <Breadcrumb 
                header={t("information_center")}
                subHeader={t("building_homes_also_for_the_generations_to_come")}
            />


        

        <section>
            <div className="container">
                <h3 className="text-primary mb-5 text-center">{t("catalog_for_direct_viewing")}</h3>

                <div className="pdf-viewer-band">
                    <iframe src={pdf} width="100%" height="100%" style={{border: "none"}}
                        title={t("Fallback PDF Viewer")} />
                </div>
            </div>
        </section>
        </div>
    )
}

export default CatalogForDirectDownload;