import { useState } from "react";
import api from "../HTTP/baseURLMain"; // make sure this points to your axios instance
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './contactus.css';

const ContactUS = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove all non-numeric characters
      const cleaned = value.replace(/\D/g, "").slice(0, 9);

      // Format as 02-970-9705 (XX-XXX-XXXX)
      let formatted = cleaned;
      if (cleaned.length > 2) {
        formatted = cleaned.slice(0, 2) + "-" + cleaned.slice(2);
      }
      if (cleaned.length > 5) {
        formatted = formatted.slice(0, 6) + "-" + cleaned.slice(5);
      }

      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/cms/contact-messages/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN":
              "NolpIWRMOUN0ZXZk7mUzE8UtVqalg3kQeoTxOp8r9Its0IX1d9M9lHE3JpzYZ59I",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-us-page">
      <Breadcrumb
        header={t('contact_us')}
        subHeader={t('building_homes_also_for_the_generations_to_come')}
        className="contact-us-banner"
      />
      <section className="contact-us-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="title">
                <h3>{t('contact_us')}</h3>
                <p>{t('feel_free_to_connect_with_us_through_our_online_channels_for_updates_news_and_more')}</p>
              </div>

              <form className="form-band" onSubmit={handleSubmit}>
                <div className="form-grid-two">
                  <div className="form-group">
                    <label className="form-label">{t('your_name')}</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder={t('your_name')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('email_address')}</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder={t('email_address')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-two">
                  <div className="form-group">
                    <label className="form-label">{t('phone_numbers')}</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder={t('phone_numbers')}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t('subject')}</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder={t('enter_keyword')}
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('your_message')}</label>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder={t('your_message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="form-action">
                  <button type="submit" className="btn-primary btn-bg-dark">{t('send_message')}</button>
                </div>

                {status && <p className="form-status">{status}</p>}
              </form>
            </div>

            <div className="col-xl-4">
              <div className="card contact-us-details-card">
                <div className="title">
                  <h3 className="mb-3">{t('contact_us')}</h3>
                </div>
                <ul className="contact-details-band">
                  <li>
                    <h6>{t('address')}</h6>
                    <p>{t('moshav_tarom')}</p>
                  </li>
                  <li>
                    <h6>{t('information')}</h6>
                    <a target="_blank">
                      <p>{t('phone_02_970_9705')}</p>
                    </a>
                    <a href="mailto:info@ecobuild.co.il" target="_blank">
                      <p>{t('email_info_ecobuild_co_il')}</p>
                    </a>
                  </li>
                  <li>
                    <h6>{t('opentime')}</h6>
                    <p>{t('monday_friday_09_00_17_00')}</p>
                    <p>{t('saturday_sunday_09_00_14_00')}</p>
                  </li>
                </ul>
                <h6>{t('follow_us')}</h6>
                <ul className="soical-links">
                  <li>
                    <a target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
