import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import eye icons
import image1 from "../images/logo-bg.png";
import image2 from "../images/nudura-logo-bg.png";
import image3 from "../images/Icons/google.svg";
import image4 from "../images/Icons/facebook.svg";
import api from "../HTTP/baseURLMain"; // ✅ API instance
import "./registration.css";
import { useTranslation } from "react-i18next";


export default function Registration() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("account/signup/", {
        email: formData.email,
        full_name: formData.full_name,
        password: formData.password,
        verification_status: "pending", // 👈 as required by your API
      });
        setFormData({
          full_name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      setSuccess("Signup successful! Please check your email.");
      console.log("✅ User registered:", response.data);

      // Optional: redirect
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="onboarding-band">
        <div className="form-card">
          <div className="left-band">
            <div className="logo-group">
              <a href="/">
                <img src={image1} className="lg-img" alt={t('logo')} />
              </a>
              <a href="/">
                <img src={image2} alt={t('nudura_logo')} />
              </a>
            </div>
          </div>

          <div className="right-band">
            <form>
              <div className="head-band">
                <h4 className="mb-0">{t('register')}</h4>
                <a   className="close-btn">
                  {/* <i className="fa-solid fa-xmark"></i> */}
                </a>
              </div>

              <div className="form-group">
                <label className="form-label">{t('user_name')}</label>
                <input
                  type="text"
                  className="form-control"
                  name="full_name"
                  placeholder={t('user_name')}
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t('email_address')}</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder={t('email_address')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

                <div className="form-group">
                  <label className="form-label">{t('password')}</label>
                  <div className="input-with-icon">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      placeholder={t('your_password')}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <span
                      className="icon-btn"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>


              <div className="form-group">
                <label className="form-label">{t('confirm_password')}</label>
                <div className="input-with-icon">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control"
                  name="confirmPassword"
                  placeholder={t('confirm_password')}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span
                    className="icon-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  </div>
              </div>

              {error && <p className="error-text">{error}</p>}
              {success && <p className="success-text">{success}</p>}

              <div className="form-action">
                {/* <button type="submit" className="btn-primary w-100" disabled={loading}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </button> */}
                <a className="btn-primary mt-2" onClick={handleSubmit}>{loading ? "Signing Up..." : "Sign Up"}</a>
                <p>{t('do_you_have_an_account')}<a><Link to="/login">{t('login')}</Link></a>
                </p>
              </div>
            </form>

            <span className="line-divider">{t('or_login_with')}</span>
            <div className="soical-login-band">
              <a className="btn-primary icon-btn border-btn-primary"  >
                <img src={image3} alt={t('google')} />{t('google')}</a>
              <a className="btn-primary icon-btn border-btn-primary"  >
                <img src={image4} alt={t('facebook')} />{t('facebook')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
