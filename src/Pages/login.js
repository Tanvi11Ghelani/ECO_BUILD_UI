import React, { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../HTTP/baseURLMain"; // import the common API instance
import image1 from '../images/logo-bg.png';
import { useTranslation } from "react-i18next";


const Login = () => {
  const { t } = useTranslation();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("account/signin/", {
        email: account, // 🔑 or "email" if API expects email
        password: password,
      });
      debugger;
     if (response.data.data.data.access && response.data.data.data.refresh) {
      // ✅ Store tokens
      localStorage.setItem("accessToken", response.data.data.data.access);
      localStorage.setItem("refreshToken", response.data.data.data.refresh);
    }

      // alert("Login successful!");
      window.location.href = "/"; // redirect if needed
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="onboarding-band flex justify-center items-center min-h-screen bg-gray-100">
      <div className="form-card bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-3xl flex">
        {/* Left Side */}
        <div className="left-band bg-gray-50 flex flex-col justify-center items-center p-6 w-1/3">
          <div className="logo-group space-y-4">
            <a  >
              <img src="Images/logo-bg.png" className="lg-img w-32" alt={t('logo')} />
            </a>
            <a  >
              <img
                src="Images/nudura-logo-bg.png"
                className="w-32"
                alt={t('nudura_logo')}
              />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-band flex-1 p-8">
          <div className="head-band flex justify-between items-center mb-6">
            <h4 className="text-xl font-semibold">{t('login')}</h4>
            <Link to="/" className="close-btn text-gray-500 hover:text-red-500">
              <i className="fa-solid fa-xmark"></i>
            </Link>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="form-group mb-4">
              <label htmlFor="username" className="form-label block mb-1 font-medium">{t('account')}</label>
              <input
                type="text"
                className="form-control w-full border rounded-lg p-2"
                id="username"
                placeholder={t('your_name')}
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label block mb-1 font-medium">{t('password')}</label>
              <input
                type="password"
                className="form-control w-full border rounded-lg p-2"
                id="password"
                placeholder={t('your_password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <div className="d-flex justify-content-end mt-3 mb-2">
                        <a className="text-btn"><Link to="/forgetpassword">{t('forgot_password')}</Link></a>
                    </div>

            <div className="form-action">
              <button
                type="submit"
                className="btn-primary"
                disabled={loading} 
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                }}>
                {loading ? "Logging in..." : "Login"}
              </button>
              <p>{t('don_t_you_have_an_account')}<a><Link to="/registration">{t('register')}</Link></a></p>
            </div>
          </form>

          <span className="line-divider block text-center text-gray-400 mb-4">{t('or_login_with')}</span>

          <div className="soical-login-band flex space-x-4 justify-center">
            <a
              className="btn-primary icon-btn border border-blue-600 px-4 py-2 flex items-center space-x-2 rounded-lg hover:bg-blue-50"
               
            >
              <img src="Images/Icons/google.svg" alt={t('google')} className="w-5" />
              <span>{t('google')}</span>
            </a>
            <a
              className="btn-primary icon-btn border border-blue-600 px-4 py-2 flex items-center space-x-2 rounded-lg hover:bg-blue-50"
               
            >
              <img src="Images/Icons/facebook.svg" alt={t('facebook')} className="w-5" />
              <span>{t('facebook')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
