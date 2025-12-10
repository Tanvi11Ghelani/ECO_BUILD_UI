import React, { useState, useRef, useEffect } from 'react';
import './HomeDropdown.css';

const CustomDropdown = ({ label, options, value, onChange, placeholder, iconClass }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleSelect = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);
    const displayValue = selectedOption ? selectedOption.label : placeholder || value;

    return (
        <div className={`custom-dropdown-container ${isOpen ? 'open' : ''}`} ref={wrapperRef}>
            {/* Label is handled by parent usually, but we can support it */}
            {/* Trigger */}
            <div
                className="custom-dropdown-trigger"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="selected-text">{displayValue}</span>
                <span className="custom-dropdown-chevron">
                    {iconClass ? <i className={iconClass}></i> : <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="currentColor" /></svg>}
                </span>
            </div>

            {/* Dropdown Menu */}
            <div className="custom-dropdown-menu" role="listbox">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`custom-dropdown-option ${value === option.value ? 'selected' : ''}`}
                        onClick={() => handleSelect(option.value)}
                        role="option"
                        aria-selected={value === option.value}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomDropdown;
