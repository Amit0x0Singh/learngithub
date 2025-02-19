import { useState } from "react";
import "./filter.css";
import PropTypes from 'prop-types';

const FilterFormPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        state: "",
        city: "",
        localAddress: "",
        subject: "",
        class: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Filtered Data:", formData);
        onClose();
    };

    return (
        <div className={`popup-overlay ${isOpen ? "show" : ""}`}>
            <div className="popup-content">
                <h2>Filter Form</h2>
                <form onSubmit={handleSubmit}>
                    <label>State:</label>
                    <select name="state" value={formData.state} onChange={handleChange}>
                        <option value="">Select State</option>
                        <option value="State1">State 1</option>
                        <option value="State2">State 2</option>
                    </select>

                    <label>City:</label>
                    <select name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Select City</option>
                        <option value="City1">City 1</option>
                        <option value="City2">City 2</option>
                    </select>

                    <label>Local Address:</label>
                    <select
                        name="localAddress"
                        value={formData.localAddress}
                        onChange={handleChange}
                    >
                        <option value="">Select Local Address</option>
                        <option value="Address1">Address 1</option>
                        <option value="Address2">Address 2</option>
                    </select>

                    <label>Subject:</label>
                    <select name="subject" value={formData.subject} onChange={handleChange}>
                        <option value="">Select Subject</option>
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                    </select>

                    <label>Class:</label>
                    <select name="class" value={formData.class} onChange={handleChange}>
                        <option value="">Select Class</option>
                        <option value="Class1">Class 1</option>
                        <option value="Class2">Class 2</option>
                    </select>

                    <button type="submit">Apply Filter</button>
                    <button type="button" className="close-btn" onClick={onClose}>
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

FilterFormPopup.propTypes = {
    isOpen: PropTypes.func,
    onClose: PropTypes.func
}

export default FilterFormPopup;
