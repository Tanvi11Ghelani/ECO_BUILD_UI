import pdf from "../images/Icons/pdf-gray.svg";
import download from "../images/Icons/Download.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";

const Brouchers = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Breadcrumb
        header={t("brochures")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />
      <section>
        <div className="container">
          <div className="title">
            <h3 className="text-primary text-center mb-5">{t("Brochures")}</h3>
          </div>
          <table className="dltrc" style={{ background: "none" }}>
            <tbody>
              <tr className="dlheader">
                <td className="dlheader">{t("file_name")}</td>
                <td className="dlheader">{t("type")}</td>
                <td className="dlheader">{t("Size")}</td>
                <td className="dlheader">{t("uploaded_on")}</td>
                <td className="dlheader">{t("files")}</td>
              </tr>
              <tr className="dlinfo">
                <td className="dlinfo hover01">{t("product_catelog")}</td>
                <td className="dlinfo hover01">{t("PDF")}</td>
                <td className="dlinfo hover01">{t("6.47 MB")}</td>
                <td className="dlinfo hover01">{t("04 Aug, 2016")}</td>
                <td className="dlinfo hover01">
                  <ul className="file-list-inner-td justify-content-center">
                    <li>
                      <a
                        href="Ecobuild_Frontend_ui/public/EcoBuildPdf/Information Center/Brochures/Product Catalog.pdf"
                        download
                        className="red-link border-none"
                      >
                        <div className="icon-band">
                          <img alt="" src={pdf} />
                        </div>
                        {t("PDF")}
                        <img src={download} className="download-icon" />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr className="dlinfo">
                <td className="dlinfo hover01">{t("booklet")}</td>
                <td className="dlinfo hover01">{t("PDF")}</td>
                <td className="dlinfo hover01">{t("4.36 MB")}</td>
                <td className="dlinfo hover01">{t("04 Aug, 2016")}</td>
                <td className="dlinfo hover01">
                  <ul className="file-list-inner-td justify-content-center">
                    <li>
                      <a
                        href="Ecobuild_Frontend_ui/public/EcoBuildPdf/Information Center/Brochures/booklet.pdf"
                        download
                        className="red-link border-none"
                      >
                        <div className="icon-band">
                          <img alt="" src={pdf} />
                        </div>
                        {t("PDF")}
                        <img
                          src="Images/Icons/Download.svg"
                          className="download-icon"
                        />
                      </a>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Brouchers;
