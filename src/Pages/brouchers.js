import pdf from '../images/Icons/pdf-gray.svg';
import download from '../images/Icons/Download.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const Brouchers = () => {
  const { t } = useTranslation();
    return(
        <div>
            <Breadcrumb 
                header={t("Brochures")}
                subHeader={t("Building homes also for the generations to come.")}
            />


        
        <section>
            <div className="container">
                <div className="title">
                    <h3 className="text-primary text-center mb-5">{t("Brochures")}</h3>
                </div>
                <table className="dltrc" style={{background:"none"}}>
                    <tbody>
                        <tr className="dlheader">
                            <td className="dlheader">{t("File Name")}</td>
                            <td className="dlheader">{t("Type")}</td>
                            <td className="dlheader">{t("Size")}</td>
                            <td className="dlheader">{t("Uploaded on")}</td>
                            <td className="dlheader">{t("Files")}</td>
                        </tr>
                        <tr className="dlinfo">
                            <td className="dlinfo hover01">{t("Product Catalog")}</td>
                            <td className="dlinfo hover01">{t("PDF")}</td>
                            <td className="dlinfo hover01">{t("6.47 MB")}</td>
                            <td className="dlinfo hover01">{t("04 Aug, 2016")}</td>
                            <td className="dlinfo hover01">
                                <ul className="file-list-inner-td justify-content-center">
                                    <li><a   className="red-link border-none">
                                            <div className="icon-band"><img alt=""src={pdf} /></div>{t("PDF")}<img
                                                src={download} className="download-icon" />
                                        </a></li>
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
                                    <li><a   className="red-link border-none">
                                            <div className="icon-band"><img alt=""src="Images/Icons/pdf-gray.svg" /></div>{t("PDF")}<img
                                                src="Images/Icons/Download.svg" className="download-icon" />
                                        </a></li>
                                </ul>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </section>
        </div>
    )
}

export default Brouchers;