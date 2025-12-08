import { useState, useEffect } from "react";
import api from "../HTTP/baseURLMain";
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import "./video-gallery.css";



const VideoGalery = () => {
  const { t } = useTranslation();
  const [galleryItems, setGalleryItems] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // ✅ track clicked video
  const [currentPage, setCurrentPage] = useState(1); // pagination state
  const itemsPerPage = 9; // show 9 items per page
// Static demo videos for testing - 9 videos matching Figma design
const DEMO_VIDEOS = [
  {
    id: 1,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    category: { name: t('videoCategory.category1'), }
  },
  {
    id: 2,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    category: { name: t('videoCategory.category2'), }
  },
  {
    id: 3,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: { name: t('videoCategory.category3'), }
  },
  {
    id: 4,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: { name: t('videoCategory.category4'), }
  },
  {
    id: 5,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: { name: t('videoCategory.category5'), }
  },
  {
    id: 6,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    category: { name: t('videoCategory.category6'), }
  },
  {
    id: 7,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: { name: t('videoCategory.category7'), }
  },
  {
    id: 8,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    category: { name: t('videoCategory.category8'), }
  },
  {
    id: 9,
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    category: { name: t('videoCategory.category9'), }
  }
];
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("accessToken");
        
        // Only make API request if token exists
        if (!token) {
          console.warn("No access token found. Using demo videos for testing.");
          // Use demo videos if no token
          setGalleryItems(DEMO_VIDEOS);
          return;
        }

        // Make API request with proper error handling
        const response = await api.get("/cms/gallery/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        // Set gallery items if response is successful
        if (response.data?.data?.results) {
          // Process videos - add base URL if needed (similar to images)
          const processedItems = response.data.data.results.map(item => {
            if (item.video && !item.video.startsWith('http')) {
              // If video URL is relative, add base URL
              const baseURL = "https://api-ecobuild.spireinfosys.com";
              item.video = item.video.startsWith('/') 
                ? `${baseURL}${item.video}` 
                : `${baseURL}/${item.video}`;
            }
            return item;
          });
          setGalleryItems(processedItems);
          console.log("Gallery items loaded:", processedItems.length);
          console.log("Video items:", processedItems.filter(item => item.video));
        } else {
          console.warn("No gallery items in API response");
          setGalleryItems([]);
        }
      } catch (error) {
        // Handle different error types
        if (error.response?.status === 401) {
          console.warn("Authentication failed. Token may be expired or invalid.");
          // Clear invalid token
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          // Set empty array on authentication error
          setGalleryItems([]);
        } else {
          console.error("Error fetching gallery menu:", error);
          // Set empty array on any other error
          setGalleryItems([]);
        }
      } finally {
        // If no videos from API, use demo videos for testing
        setGalleryItems(prevItems => {
          const videoItems = prevItems.filter(item => item.video);
          if (videoItems.length === 0) {
            console.log("Using demo videos for testing");
            return DEMO_VIDEOS;
          }
          return prevItems;
        });
      }
    };

    fetchGallery();
  }, []);

  // Filter videos only
  const videoItems = galleryItems.filter((item) => item.video);
  
  // Calculate pagination
  const totalPages = Math.ceil(videoItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = videoItems.slice(startIndex, endIndex);
  
  // Show pagination only when there are more than 9 items
  const showPagination = videoItems.length > itemsPerPage;

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top of gallery when page changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="video-gallery-page">
      <Breadcrumb 
        header={t('video_gallery')}
        subHeader={t('building_homes_also_for_the_generations_to_come')}
      />
      <section>
        <div className="container">
          {/* Video Gallery List Container - Figma Design */}
          <div className="video-gallery-list">
            {currentItems.length === 0 ? (
              <div style={{ 
                width: '100%', 
                textAlign: 'center', 
                padding: '60px 20px',
                color: '#666'
              }}>
                <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                  {videoItems.length === 0 
                    ? t('no_videos_available') || 'No videos available'
                    : t('no_videos_on_this_page') || 'No videos on this page'}
                </p>
                {videoItems.length === 0 && (
                  <p style={{ fontSize: '14px', color: '#999' }}>
                    {t('check_back_later') || 'Please check back later for new videos.'}
                  </p>
                )}
              </div>
            ) : (
              currentItems.map((item, index) => {
              // Calculate global index for numbering
              const globalIndex = startIndex + index;
              return (
                <button
                  className="video-gallery-listing"
                  key={item.id || globalIndex}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setSelectedVideo(item.video)}
                >
                  {/* Image/Video Thumbnail */}
                  <div className="video-gallery-img">
                    <video 
                      preload="metadata" 
                      muted
                      playsInline
                      onLoadedMetadata={(e) => {
                        // Seek to 0.5 seconds to show thumbnail frame
                        try {
                          e.target.currentTime = 0.5;
                        } catch (err) {
                          console.warn("Could not seek video:", err);
                        }
                      }}
                      onLoadedData={(e) => {
                        // Ensure video frame is visible after loading
                        e.target.style.opacity = '1';
                      }}
                      onError={(e) => {
                        console.error("Video load error for:", item.video, e);
                        // Show error state
                        e.target.style.display = 'none';
                      }}
                      style={{ opacity: 0, transition: 'opacity 0.3s' }}
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Play Button - centered on thumbnail */}
                    <button
                      className="video-gallery-play-btn"
                      type="button"
                      aria-label="Play video"
                      onClick={(e) => {
                        // Prevent event bubbling to parent button
                        e.stopPropagation();
                      }}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                  
                  {/* Content Section with Title */}
                  <div className="video-gallery-content">
                    <div className="video-gallery-main">
                      <h5 className="video-gallery-title">
                        {globalIndex + 1}. {item.category?.name || "Untitled Video"}
                      </h5>
                    </div>
                  </div>
                </button>
              );
            })
            )}
          </div>

          {/* ✅ Bootstrap Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title text-white">{t('video_player')}</h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label={t('close')}
                  ></button>
                </div>
                <div className="modal-body text-center">
                  {selectedVideo ? (
                    <video
                      key={selectedVideo} // reset playback on new video
                      className="w-100"
                      controls
                      autoPlay
                    >
                      <source src={selectedVideo} type="video/mp4" />{t('your_browser_does_not_support_the_video_tag')}</video>
                  ) : (
                    <p className="text-white">{t('no_video_selected')}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination - Show only when items > 9 */}
          {showPagination && (
            <div className="video-gallery-pagination">
              <nav aria-label={t('pagination') || 'Pagination'}>
                <ul className="pagination">
                  {/* Previous Button */}
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      <i className="fa-solid fa-angle-left"></i>
                    </button>
                  </li>
                  
                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    if (!showPage) {
                      // Show ellipsis
                      if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <li key={page} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                      return null;
                    }
                    
                    return (
                      <li
                        key={page}
                        className={`page-item ${currentPage === page ? 'active' : ''}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                          {currentPage === page && (
                            <span className="sr-only">{t('current') || '(current)'}</span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                  
                  {/* Next Button */}
                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VideoGalery;
