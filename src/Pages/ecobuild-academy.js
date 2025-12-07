// Import icons and assets
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Import component-specific CSS - Figma design implementation
import "./ecobuild-academy.css";
import Breadcrumb from '../common-component/Breadcrumb';


// Hero background image - Construction site image (1720px × 350px)
const heroBg =
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1720&h=350&q=90";

// Icons for information cards
// Note: These would need to be imported from your icons folder
// For now, using placeholder paths
const bookIcon = "Images/Icons/book.svg";
const writeIcon = "Images/Icons/doc-write.svg";
const clockIcon = "Images/Icons/clock-light.svg";
const clipboardIcon = "Images/Icons/codes-and-standards.svg";

// Video data - 9 videos in a grid
const videoTutorials = [
  { id: 1, title: "1. Introduction", thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
  { id: 2, title: "1.1 Products", thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop" },
  { id: 3, title: "2.0 Products", thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop" },
  { id: 4, title: "3.0 Shallow Foundations", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { id: 5, title: "4.0 Getting Started - Laying The First Layer", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { id: 6, title: "4.1 Laying Reinforcement Bars", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { id: 7, title: "5.0 Applying A Second Layer", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { id: 8, title: "6.0 Alignment System", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
  { id: 9, title: "7.0 Openings - Windows And Doors", thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop" },
];

const EcobuildAcademy = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const totalPages = Math.ceil(videoTutorials.length / videosPerPage);

  // Get current page videos
  const currentVideos = videoTutorials.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  return (
    <div className="ecobuild-academy-page">
      {/* ===== HERO SECTION ===== */}
      {/* Hero Banner - 1920px × 520px with rounded corners - Matching Figma */}
   <Breadcrumb 
        header={t("academy.breadcrumb.title")}
        subHeader={t("academy.breadcrumb.subtitle")}
      />

      {/* ===== ECOBUILD ACADEMY SECTION ===== */}
      <section className="academy-info-section">
        {/* Section Title */}
        <h3 className="academy-section-title">Ecobuild Academy</h3>

        {/* Information Cards Grid - 2x2 */}
        <div className="academy-cards-grid">
          {/* Card 1 - Instruction Book (Dark Gray) */}
          <div className="academy-card academy-card-dark">
            <div className="academy-card-icon">
              <img src={bookIcon} alt="Book icon" />
            </div>
            <p className="academy-card-text">
              Participants Will Receive An Instruction Book (Hebrew) "Installer's Guide," A Notebook And Writing Instruments.
            </p>
          </div>

          {/* Card 2 - Course Cost (Bright Blue/Teal) */}
          <div className="academy-card academy-card-blue">
            <div className="academy-card-icon">
              <img src={writeIcon} alt="Write icon" />
            </div>
            <p className="academy-card-text">
              The Cost Of The Course Is 400 NIS, But At This Stage It Will Be Provided Free Of Charge Until Further Notice.
            </p>
          </div>

          {/* Card 3 - Course Hours (Bright Blue/Teal) */}
          <div className="academy-card academy-card-blue">
            <div className="academy-card-icon">
              <img src={clockIcon} alt="Clock icon" />
            </div>
            <p className="academy-card-text">
              Course Hours: 9:00 AM To 5:00 PM. A Light Lunch Will Be Served And Hot Drinks Are Available Throughout The Day.
            </p>
          </div>

          {/* Card 4 - Registration (Dark Gray) */}
          <div className="academy-card academy-card-dark">
            <div className="academy-card-icon">
              <img src={clipboardIcon} alt="Clipboard icon" />
            </div>
            <p className="academy-card-text">
              To Register, Contact An Authorized Distributor. Or Connect To The Contact Subject Form To Register For The Course.
            </p>
          </div>
        </div>
      </section>

      {/* ===== IMPORTANT INFORMATION SECTION ===== */}
      <section className="important-info-section">
        <h3 className="important-info-title">Important Information</h3>
        <div className="important-info-content">
          <p>
            NUDURA Or Ecobuild Shall Not Be Liable For Any General, Special, Direct Or Indirect Damages, Including Bodily Injury, 
            Property Damage, Or Any Other Losses Arising From The Use, Installation, Or Misuse Of NUDURA Products. It Is The 
            Responsibility Of The Contractor, Architect, Engineer, And Property Owner To Ensure Proper Installation According To 
            Applicable Building Codes And Standards. Ecobuild Reserves The Right To Cancel Classes, Modify Course Content, Or 
            Change Instructors At Any Time Without Prior Notice. Participants Are Responsible For Verifying All Information And 
            Following Proper Installation Procedures As Outlined In The Official Installation Guidelines.
          </p>
        </div>
      </section>

      {/* ===== VIDEO TUTORIALS SECTION ===== */}
      <section className="video-tutorials-section">
        <h3 className="video-tutorials-title">Video Tutorials</h3>
        
        {/* Video Grid - 3x3 - Matching Figma List design */}
        <div className="video-list-container">
          {currentVideos.map((video) => (
            <div key={video.id} className="video-listing">
              {/* Image Container - 410px × 270px */}
              <div className="video-listing-img">
                <img src={video.thumbnail} alt={video.title} />
                {/* Play Button - 92px × 92px, blue circle with white play icon */}
                <button className="video-listing-play-btn" type="button">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M16 12L28 20L16 28V12Z" fill="#FFFFFF" />
                  </svg>
                </button>
              </div>
              
              {/* Content Section with Gradient - 410px × 100px */}
              <div className="video-listing-content">
                <h4 className="video-listing-title">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </section>
    </div>
  );
};

export default EcobuildAcademy;

