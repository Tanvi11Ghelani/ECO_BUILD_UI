import { useState, useEffect } from "react";
import api from "../HTTP/baseURLMain";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";
import "./video-gallery.css";

const VideoGalery = () => {
   const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Video data - 14 videos with YouTube IDs
  const videoTutorials = [
    {
      id: 1,
      youtubeId: "_bOJ974vi7w",
      title: t("academy.videos.video1"),
    },
    {
      id: 2,
      youtubeId: "TyCgltejMrg",
      title: t("academy.videos.video2"),
    },
    {
      id: 3,
      youtubeId: "TyCgltejMrg",
      title: t("academy.videos.video3"),
    },
    {
      id: 4,
      youtubeId: "cfE55MxT_mQ",
      title: t("academy.videos.video4"),
    },
    {
      id: 5,
      youtubeId: "abm_-gVDl24",
      title: t("academy.videos.video5"),
    },
    {
      id: 6,
      youtubeId: "xrB6UNLX45c",
      title: t("academy.videos.video6"),
    },
    {
      id: 7,
      youtubeId: "IafDoTzEv6U",
      title: t("academy.videos.video7"),
    },
    {
      id: 8,
      youtubeId: "x_-30gF8s6k",
      title: t("academy.videos.video8"),
    },
    {
      id: 9,
      youtubeId: "PBgpKaLFbw0",
      title: t("academy.videos.video9"),
    },
    {
      id: 10,
      youtubeId: "448uACZ6vrM",
      title: t("academy.videos.video10"),
    },
    {
      id: 11,
      youtubeId: "9B34OALnz0k",
      title: t("academy.videos.video11"),
    },
    {
      id: 12,
      youtubeId: "0S_r8KnU-IM",
      title: t("academy.videos.video12"),
    },
    {
      id: 13,
      youtubeId: "04GaUeDwH3k",
      title: t("academy.videos.video13"),
    },
    {
      id: 14,
      youtubeId: "97luXnwILRQ",
      title: t("academy.videos.video14"),
    },
    {
      id: 15,
      youtubeId: "I4sbe1lhufs",
      title: t("academy.videos.video15"),
    },
    {
      id: 16,
      youtubeId: "XLOh5qjdKaY",
      title: t("academy.videos.video16"),
    },
    {
      id: 17,
      youtubeId: "rd1blIyQ_Fc",
      title: t("academy.videos.video17"),
    },
  ];

  const videosPerPage = 9;
  const totalPages = Math.ceil(videoTutorials.length / videosPerPage);

  // Get current page videos
  const currentVideos = videoTutorials.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVideo(null);
  };

  return (
    <div className="ecobuild-academy-page">
      {/* ===== HERO SECTION ===== */}
      <Breadcrumb
        header={t("video_gallery")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />
   

      {/* ===== VIDEO TUTORIALS SECTION ===== */}
      <section className="video-tutorials-section">
        <h3 className="video-tutorials-title">{t("academy.videos.title")}</h3>

        {/* Video Grid - 3x3 - Matching Figma List design */}
        <div className="video-list-container">
          {currentVideos.map((video) => (
            <div
              key={video.id}
              className="video-listing"
              onClick={() => handleVideoClick(video)}
              style={{ cursor: "pointer" }}
            >
              {/* Image Container - 410px × 270px */}
              <div className="video-listing-img">
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  onError={(e) => {
                    // Fallback to a placeholder if thumbnail fails
                    e.target.src =
                      "https://via.placeholder.com/410x270/cccccc/666666?text=Video+Thumbnail";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                {/* Play Button - 92px × 92px, blue circle with white play icon */}
                <button
                  className="video-listing-play-btn"
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(video);
                  }}
                  aria-label={t("academy.videos.playButton")}
                >
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
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            aria-label={t("academy.pagination.previous")}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
              aria-label={t("academy.pagination.page", { page })}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            aria-label={t("academy.pagination.next")}
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && selectedVideo && (
        <div
          className="video-modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
              backgroundColor: "#000",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <button
              className="video-modal-close"
              onClick={closeModal}
              aria-label={t("academy.modal.close")}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "rgba(255, 255, 255, 0.9)",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "24px",
                cursor: "pointer",
                zIndex: 10000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
              }}
            >
              ×
            </button>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGalery;
