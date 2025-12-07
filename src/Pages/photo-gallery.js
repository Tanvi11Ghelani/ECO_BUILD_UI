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
import Breadcrumb from '../common-component/Breadcrumb';
import img10 from "../images/gallery/gallery-img-all-10.jpg";
import img11 from "../images/gallery/gallery-img-all-11.jpg";
import img12 from "../images/gallery/gallery-img-all-12.jpg";
import { useState, useRef, useEffect } from "react";
import api from "../HTTP/baseURLMain";
import { useTranslation } from "react-i18next";
import './photo-gallery.css';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12
];

const PhotoGallery = () => {
    const { t } = useTranslation();
    const [galleryItems, setGalleryItems] = useState([]);

    // Fetch gallery dropdown items
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem("accessToken");
                
                // Only make API request if token exists
                if (!token) {
                    console.warn("No access token found. Gallery may be limited.");
                    // Set empty array or use fallback images
                    setGalleryItems([]);
                    return;
                }

                // Make API request with proper error handling
                const response = await api.get("/cms/gallery/", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                
                // Set gallery items if response is successful
                if (response.data?.data?.results) {
                    // Process images - add base URL if needed
                    const processedItems = response.data.data.results.map(item => {
                        if (item.image && !item.image.startsWith('http')) {
                            // If image URL is relative, add base URL
                            const baseURL = "https://api-ecobuild.spireinfosys.com";
                            item.image = item.image.startsWith('/') 
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
                // Handle different error types
                if (error.response?.status === 401) {
                    console.warn("Authentication failed. Token may be expired or invalid.");
                    // Clear invalid token
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    // Set empty array - will show fallback images from other tabs
                    setGalleryItems([]);
                } else {
                    console.error("Error fetching gallery menu:", error);
                    // Set empty array on any other error
                    setGalleryItems([]);
                }
            }
        };

        fetchGallery();
    }, []);
    return (
        <div className="photo-gallery-page">
            <Breadcrumb 
                header={t('gallery')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section className="photo-gallery-section">
                <div className="container">
                    <ul className="nav nav-pills tabs-action-band" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">{t('show_all')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">{t('gallery_of_completed_projects')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">{t('projects_under_construction')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link border-none" id="pills-disabled-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                                aria-selected="false">{t('ecobuild_events')}</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                        tabindex="0">
                        
                        <section>
                            <div className="container">
                                    <div className="row g-4">
                                        {/* Show API images if available, otherwise show fallback images */}
                                        {galleryItems && galleryItems.length > 0 ? (
                                            // Display API images
                                            galleryItems
                                                .filter((item) => item.image) // ✅ keep only items with image
                                                .map((item, index) => (
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={item.id || index}>
                                                        <div className="gallery-img-card">
                                                            <img
                                                                src={item.image}
                                                                alt={item.category?.name || `Gallery ${index + 1}`}
                                                            />
                                                        </div>
                                                    </div>
                                                ))
                                        ) : (
                                            // Fallback: Show imported images when API fails or returns empty
                                            images.map((img, index) => (
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={index}>
                                                    <div className="gallery-img-card">
                                                        <img src={img} alt={`Gallery ${index + 1}`} />
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                            </div>
                        </section>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">
                        
                        <section>
                            <div className="container">
                                <div className="row g-4">
                                        {images.map((img, index) => (
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={index}>
                                                <div className="gallery-img-card">
                                                    <img src={img} alt={`Gallery ${index + 1}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </div>
                        </section>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">
                        
                        <section>
                            <div className="container">
                                <div className="row g-4">
                                        {images.map((img, index) => (
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={index}>
                                                <div className="gallery-img-card">
                                                    <img src={img} alt={`Gallery ${index + 1}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </div>
                        </section>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                        tabindex="0">
                        
                        <section>
                            <div className="container">
                                <div className="row g-4">
                                        {images.map((img, index) => (
                                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3" key={index}>
                                                <div className="gallery-img-card">
                                                    <img src={img} alt={`Gallery ${index + 1}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                            </div>
                        </section>
                    </div>
                </div>


            </section>
        </div>
    );
}
export default PhotoGallery;