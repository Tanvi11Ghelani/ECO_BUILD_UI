// Import images at the top of your component file
import img1 from "../images/gallery/gallery-img-all-01.jpg";
import img2 from "../images/gallery/gallery-img-all-02.jpg";
import img3 from "../images/gallery/gallery-img-all-03.jpg";
import img4 from "../images/gallery/gallery-img-all-04.jpg";
import img5 from "../images/gallery/gallery-img-all-05.jpg";
import img6 from "../images/gallery/gallery-img-all-06.jpg";
import img7 from "../images/gallery/gallery-img-all-07.jpg";
import img8 from "../images/gallery/gallery-img-all-08.jpg";
import img9 from "../images/gallery/gallery-img-all-09.jpg";
import Breadcrumb from "../common-component/Breadcrumb";
import img10 from "../images/gallery/gallery-img-all-10.jpg";
import img11 from "../images/gallery/gallery-img-all-11.jpg";
import img12 from "../images/gallery/gallery-img-all-12.jpg";
import { useState, useRef, useEffect } from "react";
import api from "../HTTP/baseURLMain";
import { useTranslation } from "react-i18next";
import "./photo-gallery.css";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [galleryItems, setGalleryItems] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState("all"); // Track current tab

  // Get current images based on active tab
  const getCurrentImages = () => {
    if (currentTab === "all" && galleryItems && galleryItems.length > 0) {
      return galleryItems
        .filter((item) => item.image)
        .map((item) => ({
          src: item.image,
          alt: item.category?.name || "Gallery",
        }));
    }
    return images.map((img, index) => ({
      src: img,
      alt: `Gallery ${index + 1}`,
    }));
  };

  const currentImages = getCurrentImages();

  // Open lightbox with selected image
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
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
          console.log("Gallery items loaded:", processedItems.length);
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

  // Gallery content component to reduce code duplication
  const GalleryContent = ({
    images,
    onImageClick,
    useGalleryItems = false,
  }) => (
    <section>
      <div className="container">
        <div className="row g-4">
          {useGalleryItems && galleryItems && galleryItems.length > 0
            ? galleryItems
              .filter((item) => item.image)
              .map((item, index) => (
                <div
                  className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                  key={item.id || index}
                >
                  <div
                    className="gallery-img-card"
                    onClick={() => onImageClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.image}
                      alt={item.category?.name || `Gallery ${index + 1}`}
                    />
                  </div>
                </div>
              ))
            : images.map((img, index) => (
              <div
                className="col-sm-6 col-md-6 col-lg-4 col-xl-3"
                key={index}
              >
                <div
                  className="gallery-img-card"
                  onClick={() => onImageClick(index)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={img} alt={`Gallery ${index + 1}`} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );

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
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={() => setCurrentTab("all")}
              >
                {t("show_all")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                onClick={() => setCurrentTab("completed")}
              >
                {t("gallery_of_completed_projects")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
                onClick={() => setCurrentTab("construction")}
              >
                {t("projects_under_construction")}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link border-none"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
                onClick={() => setCurrentTab("events")}
              >
                {t("ecobuild_events")}
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <GalleryContent
              images={images}
              onImageClick={openLightbox}
              useGalleryItems={true}
            />
          </div>

          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <GalleryContent images={images} onImageClick={openLightbox} />
          </div>

          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <GalleryContent images={images} onImageClick={openLightbox} />
          </div>

          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
          >
            <GalleryContent images={images} onImageClick={openLightbox} />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
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
