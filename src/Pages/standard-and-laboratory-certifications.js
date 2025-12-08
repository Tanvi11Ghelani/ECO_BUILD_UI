// Import icons and assets
import pdf from "../images/Icons/pdf-gray.svg";
import download from "../images/Icons/Download.svg";
import pdffile from "../images/Icons/pdf-fille.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

// Import component-specific CSS - Figma design implementation
import "./standard-and-laboratory-certifications.css";

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
  const tableRows = [
    t("fire_table_row_1"),
    t("fire_table_row_2"),
    t("fire_table_row_3"),
    t("fire_table_row_4"),
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

      {/* ===== CONTENT SECTION ===== */}
      {/* Introduction text and first file attachment */}
      {/* Container: 1720px width, 372px height, 30px gap */}
      <section className="content-section mb-5">
        {/* Section Title - "Standard and laboratory certifications" */}
        {/* Font: Noto Sans Bold 36px/44px, Gradient color */}
        <h3 className="section-title">
          {t("standard_and_laboratory_certifications")}
        </h3>
        
        {/* Description Text - 1720px width, 114px height */}
        <p className="description-text">
          {t("nudura_products_tested_description")}
        </p>

        {/* Subsection: Explosion Resistance Test */}
        <h4 style={{ 
          fontFamily: '"Noto Sans", sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '26px',
          color: '#333333',
          marginBottom: '15px',
          marginTop: '0'
        }}>
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

      {/* ===== VIDEO SECTION ===== */}
      {/* Video Section - 1750px × 939px, 30px gap */}
      {/* Video demonstration of explosion resistance test */}
      <section className="video-main-section">
        {/* Text Container - 1720px × 114px */}
        <div className="video-text-container">
          {/* Video Title - 24px Bold, #345766 color, 44px line-height */}
          <h3 className="video-title">
            {t("video_title_tnt_explosion")}
          </h3>
          
          {/* Video Subtitle - 18px SemiBold, #161E2D color */}
          <p className="video-subtitle">
            {t("video_subtitle_icf")}
          </p>
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
                "#",
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
          <h4 className="etag-title">
            {t("etag_009_guideline")}
          </h4>
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
                "#",
                t("file_uk_etag_compliance")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
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
              {tableRows.map((row, idx) => (
                <tr className="table-data-row" key={idx}>
                  {/* Report description */}
                  <td className="table-data-cell">{row}</td>
                  {/* Download link with PDF icon */}
                  <td className="table-data-cell table-file-cell">
                    <div className="table-file-link">
                      <a href="#" onClick={(e)=>e.preventDefault()}>
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
          <h3 className="british-psi-title">{t("british_psi_certifications")}</h3>
        </div>

        {/* Data Table - 1700px width, 30px border-radius, 1px black border, shadow */}
        <div className="british-psi-table-container">
          <table className="british-psi-table">
            <tbody>
              {/* Table Header */}
              <tr className="table-header-row">
                <td className="table-header-cell">{t("notes")}</td>
                <td className="table-header-cell">{t("file")}</td>
              </tr>
              {/* Table Rows - British Psi certifications */}
              <tr className="table-data-row">
                <td className="table-data-cell">{t("british_psi_standard_block")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("british_psi_25mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("british_psi_102mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("fire_table_row_3")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("pdf_icon")} />
                      </div>
                      <span className="file-label">{t("pdf")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("british_psi_152mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
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
              {/* Table Rows - Psi approval certifications */}
              <tr className="table-data-row">
                <td className="table-data-cell">{t("psi_phpp_standard_block")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("psi_phpp_25mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("psi_phpp_51mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("psi_phpp_102mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
              <tr className="table-data-row">
                <td className="table-data-cell">{t("psi_phpp_152mm")}</td>
                <td className="table-data-cell table-file-cell">
                  <div className="table-file-link">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <div className="file-icon">
                        <img src={pdf} alt={t("zip_icon")} />
                      </div>
                      <span className="file-label">{t("zip")}</span>
                      <img src={download} alt={t("download")} className="download-icon" />
                    </a>
                  </div>
                </td>
              </tr>
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
                "#",
                t("file_european_eta")
              )
            )}
          </div>
        </div>

        {/* National Approvals Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("national_approvals")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_france_cstb")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_technion_approval")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_fire_resistance_755")
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== CONFORMITY TO STANDARD 466 SECTION ===== */}
      <section className="conformity-466-section">
        {/* Section Title */}
        <h3 className="section-title">
          {t("conformity_standard_466")}
        </h3>

        {/* STC Rating Reports Subsection */}
        <h4 className="subsection-title">{t("stc_rating_reports")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_stc_4inch")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_stc_6inch")
              )
            )}
          </div>
        </div>

        {/* Fire Resistance Rating Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("fire_resistance_rating")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_nudura_canada_fire")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_nudura_usa_fire")
              )
            )}
          </div>
        </div>

        {/* Capacity And Structural Stability Testing Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("capacity_structural_stability")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_nudura_molds_capacity")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_nudura_curbstone")
              )
            )}
          </div>
        </div>

        {/* Thermal Barrier Test Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("thermal_barrier_test")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_thermal_barrier_canada")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_thermal_barrier_usa")
              )
            )}
          </div>
        </div>

        {/* Vapor Permeability Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("vapor_permeability")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_vapor_canada")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_vapor_usa")
              )
            )}
            {renderFileCard(
              fileCard(
                "#",
                t("file_vapor_testing")
              )
            )}
          </div>
        </div>

        {/* Thermal Resistance Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("thermal_resistance")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_thermal_resistance_wall")
              )
            )}
          </div>
        </div>

        {/* NUDURA Tensile Stress Mesh Subsection */}
        <h4 className="subsection-title" style={{ marginTop: '40px' }}>{t("nudura_tensile_stress_mesh")}</h4>
        <div className="file-attachments-section">
          <div>
            <span className="file-attachments-title">
              {t("file_attachments")}
            </span>
          </div>
          <div className="file-list">
            {renderFileCard(
              fileCard(
                "#",
                t("file_tensile_stress_homes")
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StandardAndLaboratoryCertification;