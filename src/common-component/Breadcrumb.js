import React from 'react';
import PropTypes from 'prop-types';

/**
 * Breadcrumb Component - Reusable header banner component
 * 
 * @param {string} header - Main header/subtitle text (displayed as span)
 * @param {string} subHeader - Sub header/main title text (displayed as h2)
 * @param {string} backgroundImage - Optional background image URL
 * @param {string} height - Optional custom height (default: '200px')
 * @param {string} className - Optional additional CSS classes
 * @param {string} overlayOpacity - Optional overlay opacity (default: '0.4')
 */
const Breadcrumb = ({ 
  header, 
  subHeader, 
  backgroundImage, 
  height = '200px',
  className = '',
  overlayOpacity = '0.4'
}) => {
  // Build inline styles for background image
  const breadcrumbStyle = {
    height: height,
    ...(backgroundImage && {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlayOpacity}), rgba(0, 0, 0, ${overlayOpacity})), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    })
  };

  return (
    <div className="container">
      <div 
        className={`breadcrumb-band ${className}`}
        style={breadcrumbStyle}
      >
        <div className="text-band">
          {header && <span>{header}</span>}
          {subHeader && <h2>{subHeader}</h2>}
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
Breadcrumb.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  overlayOpacity: PropTypes.string,
};

export default Breadcrumb;

