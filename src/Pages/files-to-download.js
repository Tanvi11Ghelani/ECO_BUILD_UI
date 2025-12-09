import pdf from "../images/Icons/pdf-gray.svg";
import download from "../images/Icons/Download.svg";
import pdffile from "../images/Icons/pdf-fille.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";

const FileToDownload = () => {
  const { t } = useTranslation();

  // Helper function to extract filename from path
  const getFileNameFromPath = (path) => {
    const fileName = path.split("/").pop(); // Get last part after /
    return fileName.replace(".pdf", ""); // Remove .pdf extension
  };

  // Installation Manuals Data
  const installationManuals = [
    {
      notes: "",
      number: "8",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Introduction.pdf",
    },
    {
      notes: "",
      number: "9",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Tools.pdf",
    },
    {
      notes: "",
      number: "11",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Site preparation and transportation.pdf",
    },
    {
      notes: "",
      number: "12",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/NUDURA Products.pdf",
    },
    {
      notes: "",
      number: "2",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Installation steps.pdf",
    },
    {
      notes: "",
      number: "13",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Insulation from moisture and humidity.pdf",
    },
    {
      notes: "",
      number: "14",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/The farge layer.pdf",
    },
    {
      notes: "",
      number: "15",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Openings – doors and windows.pdf",
    },
    {
      notes: "",
      number: "16",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Electrical installation.pdf",
    },
    {
      notes: "",
      number: "17",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Plumbing installation.pdf",
    },
    {
      notes: "",
      number: "18",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Interior finishes.pdf",
    },
    {
      notes: "",
      number: "19",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/Exterior finishes.pdf",
    },
    {
      notes: t("appendices"),
      number: "21",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/A. The mold units are separated.pdf",
    },
    {
      notes: t("appendices"),
      number: "22",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/B. Typical cross section.pdf",
    },
    {
      notes: t("appendices"),
      number: "23",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/C. Typical details - North America.pdf",
    },
    {
      notes: t("appendices"),
      number: "24",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/C. Typical details - International.pdf",
    },
    {
      notes: t("appendices"),
      number: "25",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/D. Reinforcement Tables-Canada.pdf",
    },
    {
      notes: t("appendices"),
      number: "26",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/D. Reinforcement Tables - USA.pdf",
    },
    {
      notes: t("appendices"),
      number: "27",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Nodora Installation Manuals - Download Chapters/E. Doorframe Tables-Canada.pdf",
    },
  ];

  // Technical Circulars Data
  const technicalCirculars = [
    {
      notes: "",
      number: "4",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Assembling a curbstone gem.pdf",
    },
    {
      notes: "",
      number: "32",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Curbstone expansion.pdf",
    },
    {
      notes: "",
      number: "33",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Floor technology.pdf",
    },
    {
      notes: "",
      number: "34",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Simple truss.pdf",
    },
    {
      notes: "",
      number: "35",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Hurricane anchoring system.pdf",
    },

    {
      notes: "",
      number: "36",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Expanding foam.pdf",
    },
    {
      notes: "",
      number: "37",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Preparing a radius wall on site.pdf",
    },
    {
      notes: "",
      number: "38",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Radius wall – assembly and installation.pdf",
    },
    {
      notes: "",
      number: "39",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Bracket for repairs.pdf",
    },
    {
      notes: "",
      number: t("40"),
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/T-shaped molds.pdf",
    },
    {
      notes: "",
      number: t("41"),
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Waterproofing membrane against dampness and moisture.pdf",
    },
    {
      notes: "",
      number: "43",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/Ceiling technology.pdf",
    },

    {
      notes: "",
      number: "44",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Technical circulars/ICF connection system.pdf",
    },
  ];

  // Alignment System Data
  const alignmentSystem = [
    {
      notes: "",
      number: "5",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Alignment system/BRT10R Straightening System.pdf",
    },
    {
      notes: "",
      number: "45",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Alignment system/BRT10R System Assembly Steps.pdf",
    },
    {
      notes: "",
      number: "46",
      pdfPath:
        "/EcoBuildPdf/Information Center/Files to Download/Alignment system/BRT10R System Expansion Assembly Steps.pdf",
    },
  ];

  // Reusable Table Component
  const FileTable = ({ data }) => (
    <table className="dltrc" style={{ background: "none" }}>
      <tbody>
        <tr className="dlheader">
          <td className="dlheader">{t("notes")}</td>
          <td className="dlheader">{t("number")}</td>
          <td className="dlheader">{t("file_name")}</td>
          <td className="dlheader">{t("files")}</td>
        </tr>
        {data.map((item, index) => (
          <tr className="dlinfo" key={index}>
            <td className="dlinfo hover01">{item.notes}</td>
            <td className="dlinfo hover01">{item.number}</td>
            <td className="dlinfo hover01">
              {item.fileName || getFileNameFromPath(item.pdfPath)}
            </td>
            <td className="dlinfo hover01">
              <ul className="file-list-inner-td justify-content-center">
                <li>
                  <a
                    href={item.pdfPath}
                    download={
                      item.fileName || getFileNameFromPath(item.pdfPath)
                    }
                    className="red-link border-none"
                  >
                    <div className="icon-band">
                      <img alt="" src={pdf} />
                    </div>
                    {t("pdf")}
                    <img src={download} className="download-icon" alt="" />
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div>
      <Breadcrumb
        header={t("file_to_download")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />

      {/* Installation Manuals Section */}
      <section>
        <div className="container">
          <div className="title">
            <h3 className="text-primary text-center mb-5">
              {t("nodora_installation_manuals_download_chapters")}
            </h3>
          </div>
          <FileTable data={installationManuals} />
        </div>
      </section>

      {/* High Resolution Details Section */}
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="layer_content p-0">
                <h3 className="text-primary mb-5">
                  {t("nudura_installation_brochure_details_high_resolution")}
                </h3>
                <h6 className="mb-0 mt-5 mb-4 font-bg-700">
                  {t("high_resolution_appendix_a")}
                </h6>
                <p className="dark-font-600 mt-3 mb-2">
                  {t(
                    "a_1_standard_template_a_2_90_pattern_a_3_45_pattern_a_4_template_with_beveled_finish_a_5_beveled_finish_on_both_sides_a_6_stone_border_pattern"
                  )}
                </p>
                <p className="dark-font-600 mt-3 mb-2">
                  {t(
                    "a_7_language_brick_extensions_a_8_height_adapter_and_end_cap_a_9_short_t_shaped_pattern_a_10_long_t_shaped_pattern"
                  )}
                </p>
              </div>
              <h6 className="mb-3 mt-5">{t("file_attachments")}</h6>
              <div className="file-list">
                <div className="file-card">
                  <a
                    href="https://ecobuild.co.il/wp-content/uploads/2021/01/hydrofoam_520_compressed.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="file-icon-band">
                      <img alt="" src={pdffile} />
                    </div>
                    <div className="file-name-band">
                      <p>{t("appendix_a_template_unit_details_pdf")}</p>
                      <span className="small-icon">
                        <img alt="" src={download} />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Circulars Section */}
      <section className="pt-0">
        <div className="container">
          <div className="title">
            <h3 className="text-primary text-center mb-5">
              {t("technical_circulars")}
            </h3>
          </div>
          <FileTable data={technicalCirculars} />
        </div>
      </section>

      {/* Alignment System Section */}
      <section className="pt-0">
        <div className="container">
          <div className="title">
            <h3 className="text-primary text-center mb-5">
              {t("alignment_system")}
            </h3>
          </div>
          <FileTable data={alignmentSystem} />
        </div>
      </section>
    </div>
  );
};

export default FileToDownload;
