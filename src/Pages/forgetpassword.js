import React, { useState } from "react";
import { Link } from 'react-router-dom';
import api from "../HTTP/baseURLMain"; // import the common API instance
import image1 from '../images/logo-bg.png';
import { useTranslation } from "react-i18next";


const ForgetPassword = () => {
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
      const response = await api.post("account/forgot-password/", {
        email: account, // 🔑 or "email" if API expects email
      });
     if (response.data.data.data.access && response.data.data.data.refresh) {
            window.location.href = "/"; // redirect if needed
    }

      // alert("Login successful!");

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || "Failed");
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
              <img alt=""src="Images/logo-bg.png" className="lg-img w-32" alt={t('logo')} />
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
            <h4 className="text-xl font-semibold">{t('foget_password')}</h4>
            <a   className="close-btn text-gray-500 hover:text-red-500">
              {/* <i className="fa-solid fa-xmark"></i> */}
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>
            <div className="form-group mb-4">
              <label htmlFor="username" className="form-label block mb-1 font-medium">{t('email')}</label>
              <input
                type="text"
                className="form-control w-full border rounded-lg p-2"
                id="username"
                placeholder={t('your_registered_email_id')}
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

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
                {loading ? "Please Wait..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
