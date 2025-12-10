import { useState, useEffect } from "react";
import { loadAllCategories } from "../utils/galleryImageLoader";
import Breadcrumb from "../common-component/Breadcrumb";
import api from "../HTTP/baseURLMain";
import { useTranslation } from "react-i18next";
import "./photo-gallery.css";

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState("all");
  const [localImages, setLocalImages] = useState({
    all: [],
    completed: [],
    construction: [],
    events: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load local images from folders
  useEffect(() => {
    const loadLocalImages = () => {
      setIsLoading(true);
      try {
        const images = loadAllCategories();
        setLocalImages(images);
        console.log("Local images loaded:", {
          all: images.all.length,
          completed: images.completed.length,
          construction: images.construction.length,
        });
      } catch (error) {
        console.error("Error loading local images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocalImages();
  }, []);

  // Get current images based on active tab
  const getCurrentImages = () => {
    switch (currentTab) {
      case "all":
        // Combine API images with local "all" images
        if (galleryItems && galleryItems.length > 0) {
          const apiImages = galleryItems
            .filter((item) => item.image)
            .map((item) => ({
              src: item.image,
              alt: item.category?.name || "Gallery",
              id: item.id || `api-${Date.now()}-${Math.random()}`,
              fromApi: true,
            }));

          return [...apiImages, ...localImages.all];
        }
        return localImages.all;

      case "completed":
        return localImages.completed;

      case "construction":
        return localImages.construction;

      case "events":
        return localImages.events;

      default:
        return localImages.all;
    }
  };

  const currentImages = getCurrentImages();

  // Open lightbox with selected image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, currentImageIndex]);

  // Fetch gallery dropdown items
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          console.warn("No access token found. Gallery may be limited.");
          setGalleryItems([]);
          return;
        }

        const response = await api.get("/cms/gallery/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data?.data?.results) {
          const processedItems = response.data.data.results.map((item) => {
            if (item.image && !item.image.startsWith("http")) {
              const baseURL = "https://api-ecobuild.spireinfosys.com";
              item.image = item.image.startsWith("/")
                ? `${baseURL}${item.image}`
                : `${baseURL}/${item.image}`;
            }
            return item;
          });
          setGalleryItems(processedItems);
          console.log("API Gallery items loaded:", processedItems.length);
        } else {
          console.warn("No gallery items in API response");
          setGalleryItems([]);
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.warn(
            "Authentication failed. Token may be expired or invalid."
          );
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setGalleryItems([]);
        } else {
          console.error("Error fetching gallery menu:", error);
          setGalleryItems([]);
        }
      }
    };

    fetchGallery();
  }, []);

  // Gallery content component
  const GalleryContent = ({ images, onImageClick }) => (
    <section>
      <div className="container">
        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">{t("loading_images") || "Loading images..."}</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">
              {t("no_images_found") || "No images found in this category"}
            </p>
          </div>
        ) : (
          <div className="row g-4">
            {images.map((img, index) => (
              <div
                className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                key={img.id || index}
              >
                <div
                  className="gallery-img-card"
                  onClick={() => onImageClick(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200/cccccc/666666?text=Image+Not+Found";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  // Get images for current tab
  const getTabImages = () => {
    switch (currentTab) {
      case "all":
        return getCurrentImages();
      case "completed":
        return localImages.completed;
      case "construction":
        return localImages.construction;
      case "events":
        return localImages.events;
      default:
        return getCurrentImages();
    }
  };

  return (
    <div className="photo-gallery-page">
      <Breadcrumb
        header={t("gallery")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />
      <section className="photo-gallery-section">
        <div className="container">
          <ul
            className="nav nav-pills tabs-action-band"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${currentTab === "all" ? "active" : ""}`}
                type="button"
                role="tab"
                onClick={() => setCurrentTab("all")}
              >
                {t("show_all")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  currentTab === "completed" ? "active" : ""
                }`}
                type="button"
                role="tab"
                onClick={() => setCurrentTab("completed")}
              >
                {t("gallery_of_completed_projects")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  currentTab === "construction" ? "active" : ""
                }`}
                type="button"
                role="tab"
                onClick={() => setCurrentTab("construction")}
              >
                {t("projects_under_construction")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link border-none ${
                  currentTab === "events" ? "active" : ""
                }`}
                type="button"
                role="tab"
                onClick={() => setCurrentTab("events")}
              >
                {t("ecobuild_events")}
              </button>
            </li>
          </ul>
        </div>

        {/* Gallery Content */}
        <GalleryContent images={getTabImages()} onImageClick={openLightbox} />
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImages.length > 0 && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImages[currentImageIndex].src}
              alt={currentImages[currentImageIndex].alt}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found";
              }}
            />
            <div className="lightbox-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
