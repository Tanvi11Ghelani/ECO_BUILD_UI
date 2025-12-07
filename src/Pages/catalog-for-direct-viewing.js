import pdf from '../pdf-file/a4a01.pdf';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const CatalogForDirectDownload = () => {
  const { t } = useTranslation();
    return(
        <div>
            <Breadcrumb 
                header={t("Information Center")}
                subHeader={t("Building homes also for the generations to come.")}
            />


        

        <section>
            <div className="container">
                <h3 className="text-primary mb-5 text-center">{t("Catalog For Direct Viewing")}</h3>

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