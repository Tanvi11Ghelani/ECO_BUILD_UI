import thumb from "../images/thumnail.jpg";
import book from "../images/Icons/book.svg";
import finance from "../images/Icons/finance-mode-rounded.svg";
import clock from "../images/Icons/clock-light.svg";
import docwrite from "../images/Icons/doc-write.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";
import { useState } from "react";

const Academy = () => {
  const { t } = useTranslation();
  const [selectedVideo, setSelectedVideo] = useState("");

  // Array of 14 YouTube video IDs
  const videos = [
    { id: "_bOJ974vi7w", title: "Video 1" },
    { id: "fnB64yfy7Fk", title: "Video 2" },
    { id: "_bOJ974vi7w", title: "Video 3" },
    { id: "fnB64yfy7Fk", title: "Video 4" },
    { id: "_bOJ974vi7w", title: "Video 5" },
    { id: "fnB64yfy7Fk", title: "Video 6" },
    { id: "_bOJ974vi7w", title: "Video 7" },
    { id: "fnB64yfy7Fk", title: "Video 8" },
    { id: "_bOJ974vi7w", title: "Video 9" },
    { id: "fnB64yfy7Fk", title: "Video 10" },
    { id: "_bOJ974vi7w", title: "Video 11" },
    { id: "fnB64yfy7Fk", title: "Video 12" },
    { id: "_bOJ974vi7w", title: "Video 13" },
    { id: "fnB64yfy7Fk", title: "Video 14" },
  ];

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <div>
      <Breadcrumb
        header={t("academy.breadcrumb.title")}
        subHeader={t("academy.breadcrumb.subtitle")}
      />
      <section>
        <div className="container">
          <div className="titile-band text-left">
            <h3 className="text-primary text-left">
              {t("academy.sectionTitle")}
            </h3>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="icon-card m-height-128 pyx-15-25">
                <div className="icon-band bg-icon">
                  <img alt="" src={book} />
                </div>
                <div className="text-band">
                  <h5 className="mb-0 text-white">
                    {t("academy.cards.instructionBook")}
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="icon-card m-height-128 pyx-15-25">
                <div className="icon-band bg-icon">
                  <img alt="" src={finance} />
                </div>
                <div className="text-band">
                  <h5 className="mb-0 text-white">
                    {t("academy.cards.courseCost")}
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="icon-card m-height-128 pyx-15-25">
                <div className="icon-band bg-icon">
                  <img alt="" src={clock} />
                </div>
                <div className="text-band">
                  <h5 className="mb-0 text-white">
                    {t("academy.cards.courseHours")}
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="icon-card m-height-128 pyx-15-25">
                <div className="icon-band bg-icon">
                  <img alt="" src={docwrite} />
                </div>
                <div className="text-band">
                  <h5 className="mb-0 text-white">
                    {t("academy.cards.registration")}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="info-msg-band mt-4">
            <h4>{t("academy.important.title")}</h4>
            <p className="bold-bg">{t("academy.important.text")}</p>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="titile-band">
            <h3>{t("academy.videos.title")}</h3>
          </div>

          <div className="row g-4">
            {videos.map((video, i) => (
              <div className="col-md-4" key={i}>
                <button
                  className="video-btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="video-card">
                    <div className="thumnail-img">
                      <img
                        alt={`Video ${i + 1}`}
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        onError={(e) => {
                          e.target.src = thumb;
                        }}
                      />
                      <a className="play-btn">
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <div className="text-band">
                      <h5 className="mb-0 text-white">
                        {t("academy.videos.videoTitle")} {i + 1}
                      </h5>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="pagination-band">
            <nav aria-label={t("")}>
              <ul className="pagination">
                <li className="page-item">
                  <span className="page-link">
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    2<span className="sr-only">{t("current")}</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <div
        className="modal fade video-model-band"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <iframe
                width="560"
                height="315"
                id="cartoonVideo"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label={t("close")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
