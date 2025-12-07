import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

/**
 * Tab Component - Reusable tab navigation component
 * 
 * @param {Array} tabs - Array of tab objects with { id, label } structure
 * @param {string|number} defaultActiveTab - ID of the initially active tab (default: first tab)
 * @param {Function} onTabChange - Callback function when tab changes (receives tab id)
 * @param {string} className - Optional additional CSS classes
 */
const Tab = ({ 
  tabs = [], 
  defaultActiveTab = null,
  onTabChange = () => {},
  className = ''
}) => {
  // State to track active tab - use first tab if no default provided
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab !== null ? defaultActiveTab : (tabs.length > 0 ? tabs[0].id : null)
  );

  // Handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  // Don't render if no tabs provided
  if (!tabs || tabs.length === 0) {
    return null;
  }

  return (
    <div className={`tab-container ${className}`}>
      {/* Tabs Frame - 1290px width, 59px height, 31px gap */}
      <div className="tab-frame">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              className={`tab-button ${isActive ? 'tab-active' : 'tab-inactive'}`}
              onClick={() => handleTabClick(tab.id)}
              type="button"
            >
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// PropTypes for type checking
Tab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultActiveTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onTabChange: PropTypes.func,
  className: PropTypes.string,
};

export default Tab;

