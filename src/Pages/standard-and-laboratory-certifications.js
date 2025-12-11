// Import icons and assets
import pdf from "../images/Icons/pdf-gray.svg";
import download from "../images/Icons/Download.svg";
import pdffile from "../images/Icons/pdf-fille.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";

// Import component-specific CSS - Figma design implementation
import "./standard-and-laboratory-certifications.css";
import "./proper-spacing.css";

// Hero background image - Construction site image (1720px × 350px)
// Construction workers with building panels - matching Figma design
const heroBg =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1720&h=350&q=90";

// Helper function to create file card object
// Each file has a download link (href) and display label
const fileCard = (href, label) => ({
  href,
  label,
});

// Main component - Standard And Laboratory Certifications page
const StandardAndLaboratoryCertification = () => {
  // Translation hook for multi-language support
  const { t } = useTranslation();

  // Table data - Test reports and certifications
  // Array of report descriptions for the documentation table
  const tableData = [
    {
      label: t("fire_table_row_1"),
      pdf: "https://ecobuild.co.il/wp-content/uploads/2020/03/2803796.pdf",
    },
    {
      label: t("fire_table_row_2"),
      pdf: "https://ecobuild.co.il/wp-content/uploads/2020/03/8775213.pdf",
    },
    {
      label: t("fire_table_row_3"),
      pdf: "https://ecobuild.co.il/wp-content/uploads/2020/03/2716315.pdf",
    },
    {
      label: t("fire_table_row_4"),
      pdf: "https://ecobuild.co.il/wp-content/uploads/2020/03/4387945.pdf",
    },
  ];

  const britishPsiFiles = [
    {
      label: t("british_psi_standard_block"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certificationsBritish Psi Certifications/NUDURA British Psi Approvals Standard Block.zip",
      type: t("zip"),
    },
    {
      label: t("british_psi_25mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certificationsBritish Psi Certifications/NUDURA British Psi Approvals +25 mm..zip",
      type: t("zip"),
    },
    {
      label: t("british_psi_51mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certificationsBritish Psi Certifications/NUDURA British Psi Approvals +51 mm..zip",
      type: t("zip"),
    },
    {
      label: t("british_psi_102mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certificationsBritish Psi Certifications/NUDURA British Psi Approvals +102 mm..zip",
      type: t("pdf"),
    },
    {
      label: t("british_psi_152mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certificationsBritish Psi Certifications/NUDURA British Psi Approvals +152 mm..zip",
      type: t("zip"),
    },
  ];

  const psiApprovalFiles = [
    {
      label: t("psi_phpp_standard_block"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certifications/Psi Approval Certifications/NUDURA Psi Approval Standard Block.zip",
      type: t("zip"),
    },
    {
      label: t("psi_phpp_25mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certifications/Psi Approval Certifications/NUDURA Psi Approval 25mm.zip",
      type: t("zip"),
    },
    {
      label: t("psi_phpp_51mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certifications/Psi Approval Certifications/NUDURA Psi Approval 51mm.zip",
      type: t("zip"),
    },
    {
      label: t("psi_phpp_102mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certifications/Psi Approval Certifications/NUDURA Psi Approval 102mm.zip",
      type: t("zip"),
    },
    {
      label: t("psi_phpp_152mm"),
      file: "/EcoBuildPdf/Information Center/Standard and laboratory certifications/Psi Approval Certifications/NUDURA Psi Approval 152mm.zip",
      type: t("zip"),
    },
  ];

  // Render a single file card component
  // Card dimensions: 270px × 100px with 50px gap between icon and content
  const renderFileCard = ({ href, label }) => (
    <div className="file-card ">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {/* Icon section - 48px × 48px */}
        <div className="file-icon-band">
          <img src={pdffile} alt={t("pdf_icon")} />
        </div>
        {/* File name and download icon */}
        <div className="file-name-band">
          <p className="mb-0">{label}</p>
          <span className="small-icon">
            <img src={download} alt={t("download")} />
          </span>
        </div>
      </a>
    </div>
  );

  return (
    <div className="standard-cert-page">
      {/* ===== HERO SECTION ===== */}
      {/* Breadcrumb Component - Reusable header banner */}
      <Breadcrumb
        header={t("standard_and_laboratory_certifications")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />

      <section className="content-section mb-5 proper-spacing">
        <h3 className="section-title">
          {t("standard_and_laboratory_certifications")}
        </h3>

        {/* Description Text - 1720px width, 114px height */}
        <p className="description-text">
          {t("nudura_products_tested_description")}
        </p>

        {/* Subsection: Explosion Resistance Test */}
        <h4
          style={{
            fontFamily: '"Noto Sans", sans-serif',
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "26px",
            color: "#333333",
            marginBottom: "15px",
            marginTop: "0",
          }}
        >
          {t("explosion_resistance_test_results_report")}
        </h4>

        {/* File Attachments Section - 1700px width, 145px height, 20px gap */}
        <div className="file-attachments-section">
          <div>
            {/* File Attachments label */}
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          {/* File List - Gap: 20px between cards */}
          <div className="file-list">
            {/* Single File Card - 270px × 100px */}
            {renderFileCard(
              fileCard(
                "https://ecobuild.co.il/wp-content/uploads/2021/01/hydrofoam_520_compressed.pdf",
                t("fped_report_pdf")
              )
            )}
          </div>
        </div>
      </section>

      <section className="video-main-section">
        {/* Text Container - 1720px × 114px */}
        <div className="video-text-container">
          {/* Video Title - 24px Bold, #345766 color, 44px line-height */}
          <p className="video-title">{t("video_title_tnt_explosion")}</p>

          {/* Video Subtitle - 18px SemiBold, #345766 color */}
          <p className="video-subtitle">{t("video_subtitle_icf")}</p>
        </div>

        {/* File Attachments Section - 1700px × 145px, 20px gap, border-bottom 1px */}
        <div className="video-file-attachments">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "https://ecobuild.co.il/wp-content/uploads/2020/03/7967875.pdf",
                t("file_europe_bba")
              )
            )}
          </div>
        </div>

        {/* Video Container - 1700px × 620px, 30px border-radius, #345766 background */}
        <div className="video-player-container">
          {/* Video Inner - 1624px × 540px, 16px border-radius, positioned 40px/38px */}
          <div className="video-player-inner">
            <iframe
              src="https://www.youtube.com/embed/iS0Dl92_on4?si=07u7F_BiLBsCYJbQ"
              title={t("youtube_video_player")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== NUMBER 7 SECTION ===== */}
      {/* ETAG 009 Guideline Section - 1720px × 300px, 30px gap */}
      <section className="number-seven-section">
        {/* Text Container - 1720px × 79px, 100px gap */}
        <div className="etag-text-container">
          <h4 className="etag-title">{t("etag_009_guideline")}</h4>
        </div>

        {/* File Attachments Section - 1700px × 145px, 20px gap, border-bottom 1px */}
        <div className="etag-file-attachments">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "https://ecobuild.co.il/wp-content/uploads/2020/03/7967875.pdf",
                t("file_uk_etag_compliance")
              )
            )}
            {renderFileCard(
              fileCard(
                "https://ecobuild.co.il/wp-content/uploads/2020/03/9709073.pdf",
                t("file_iso_9001_certification")
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== FIRE LEVEL E TABLE SECTION ===== */}
      {/* Table Section - 1700px × 506px, 50px gap */}
      <section className="fire-level-section">
        {/* Title - 243px × 44px, 36px ExtraBold, gradient color */}
        <div className="fire-level-title-container">
          <h3 className="fire-level-title">{t("fire_level_e")}</h3>
        </div>

        {/* Data Table - 1700px × 412px, 30px border-radius, 1px black border, shadow */}
        <div className="fire-level-table-container">
          <table className="fire-level-table">
            <tbody>
              {/* Table Header - Notes and File columns */}
              <tr className="table-header-row">
                <td className="table-header-cell">{t("notes")}</td>
                <td className="table-header-cell">{t("file")}</td>
              </tr>
              {/* Table Rows - Map through each test report */}
              {tableData.map((row, idx) => (
                <tr className="table-data-row" key={idx}>
                  {/* Report description */}
                  <td className="table-data-cell">{row.label}</td>

                  {/* PDF link */}
                  <td className="table-data-cell table-file-cell">
                    <div className="table-file-link">
                      <a
                        href={row.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="file-icon">
                          <img src={pdf} alt={t("pdf_icon")} />
                        </div>
                        <span className="file-label">{t("pdf")}</span>
                        <img
                          src={download}
                          alt={t("download")}
                          className="download-icon"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== BRITISH PSI CERTIFICATIONS TABLE SECTION ===== */}
      <section className="british-psi-section">
        {/* Title - 36px ExtraBold, gradient color */}
        <div className="british-psi-title-container">
          <h3 className="british-psi-title">
            {t("british_psi_certifications")}
          </h3>
        </div>

        {/* Data Table - 1700px width, 30px border-radius, 1px black border, shadow */}
        <div className="british-psi-table-container">
          <table className="british-psi-table">
            <tbody>
              <tr className="table-header-row">
                <td className="table-header-cell">{t("notes")}</td>
                <td className="table-header-cell">{t("file")}</td>
              </tr>

              {britishPsiFiles.map((item, idx) => (
                <tr className="table-data-row" key={idx}>
                  {/* Notes column */}
                  <td className="table-data-cell">{t(item.label)}</td>

                  {/* File column */}
                  <td className="table-data-cell table-file-cell">
                    <div className="table-file-link">
                      <a href={item.file} target="_blank" download>
                        <div className="file-icon">
                          <img
                            src={item.type === "zip" ? pdf : pdf}
                            alt={t(
                              item.type === "zip" ? "zip_icon" : "pdf_icon"
                            )}
                          />
                        </div>

                        <span className="file-label">
                          {item.type === "zip" ? t("zip") : t("zip")}
                        </span>

                        <img
                          src={download}
                          alt={t("download")}
                          className="download-icon"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== PSI APPROVAL TABLE SECTION ===== */}
      <section className="psi-approval-section">
        {/* Title - 36px ExtraBold, gradient color */}
        <div className="psi-approval-title-container">
          <h3 className="psi-approval-title">{t("psi_approval")}</h3>
        </div>

        {/* Data Table - 1700px width, 30px border-radius, 1px border, shadow */}
        <div className="psi-approval-table-container">
          <table className="psi-approval-table">
            <tbody>
              {/* Table Header */}
              <tr className="table-header-row">
                <td className="table-header-cell">{t("notes")}</td>
                <td className="table-header-cell">{t("file")}</td>
              </tr>

              {/* Dynamic Rows */}
              {psiApprovalFiles.map((item, idx) => (
                <tr className="table-data-row" key={idx}>
                  {/* Notes / Label */}
                  <td className="table-data-cell">{item.label}</td>

                  {/* File Column */}
                  <td className="table-data-cell table-file-cell">
                    <div className="table-file-link">
                      <a href={item.file} download>
                        <div className="file-icon">
                          <img src={pdf} alt={t("zip_icon")} />
                        </div>

                        <span className="file-label">{item.type}</span>

                        <img
                          src={download}
                          alt={t("download")}
                          className="download-icon"
                        />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== STANDARD TESTS AND CERTIFICATIONS SECTION ===== */}
      <section className="standard-tests-section">
        {/* Section Title */}
        <h3 className="section-title">
          {t("standard_tests_and_certifications")}
        </h3>

        {/* Introductory Text */}
        <p className="description-text">
          {t("nudura_products_tested_etag_description")}
        </p>

        {/* European Approvals Subsection */}
        <h4 className="subsection-title">{t("european_approvals")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "https://ecobuild.co.il/wp-content/uploads/2020/03/8569537.pdf",
                t("file_european_eta")
              )
            )}
          </div>
        </div>

        {/* National Approvals Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("national_approvals")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/476232.pdf", t("file_france_cstb")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/185888.pdf", t("file_technion_approval")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/3483534.pdf", t("file_fire_resistance_755")))}
          </div>
        </div>
      </section>

      {/* ===== CONFORMITY TO STANDARD 466 SECTION ===== */}
      <section className="conformity-466-section">
        {/* Section Title */}
        <h3 className="section-title">{t("conformity_standard_466")}</h3>

        {/* STC Rating Reports Subsection */}
        <h4 className="subsection-title">{t("stc_rating_reports")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/7493775.pdf", t("file_stc_4inch")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/9107927.pdf", t("file_stc_6inch")))}
          </div>
        </div>

        {/* Fire Resistance Rating Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("fire_resistance_rating")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/3273641.pdf", t("file_nudura_canada_fire")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/4542703.pdf", t("file_nudura_usa_fire")))}
          </div>
        </div>

        {/* Capacity And Structural Stability Testing Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("capacity_structural_stability")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/7163893.pdf", t("file_nudura_molds_capacity")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/4194410.pdf", t("file_nudura_curbstone")))}
          </div>
        </div>

        {/* Thermal Barrier Test Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("thermal_barrier_test")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/1162749.pdf", t("file_thermal_barrier_canada")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/6810536.pdf", t("file_thermal_barrier_usa")))}
          </div>
        </div>

        {/* Vapor Permeability Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("vapor_permeability")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/9076470.pdf", t("file_vapor_canada")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/3631750.pdf", t("file_vapor_usa")))}
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/3525777.pdf", t("file_vapor_testing")))}
          </div>
        </div>

        {/* Thermal Resistance Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("thermal_resistance")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/2535642.pdf", t("file_thermal_resistance_wall")))}
          </div>
        </div>

        {/* NUDURA Tensile Stress Mesh Subsection */}
        <h4 className="subsection-title" style={{ marginTop: "40px" }}>
          {t("nudura_tensile_stress_mesh")}
        </h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(fileCard("https://ecobuild.co.il/wp-content/uploads/2020/03/8131914.pdf", t("file_tensile_stress_homes")))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardAndLaboratoryCertification;
