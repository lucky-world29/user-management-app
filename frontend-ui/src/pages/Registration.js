import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <style>
  {`
    body {
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      min-height: 100vh;
      margin: 0;
      font-family: 'Arial', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .registration-container {
      background-color: #fff;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 1200px;
      margin-top: 2%;
      animation: fadeIn 0.5s ease-in-out;
    }
    h2 {
      text-align: center;
      margin-bottom: 30px;
      font-weight: 700;
      font-size: 2.5rem;
      color: #007bff;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
    .form-control {
      border-radius: 25px;
      padding: 15px;
      border: 1px solid #ddd;
      transition: box-shadow 0.3s, border 0.3s;
    }
    .form-control:focus {
      border: 1px solid #007bff;
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
    }
    .btn-primary {
      background-color: #007bff;
      border: none;
      border-radius: 30px;
      padding: 15px;
      font-size: 1.2rem;
      width: 100%;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out, transform 0.2s;
    }
    .btn-primary:hover {
      background-color: #0056b3;
      transform: scale(1.05);
    }
    .form-group {
      margin-bottom: 25px;
    }
    .section-heading {
      font-size: 1.8rem;
      font-weight: 700;
      color: #007bff;
      margin-bottom: 20px;
      text-align: left;
      padding-left: 15px;
      border-left: 5px solid #007bff;
      letter-spacing: 1px;
    }
    .section-divider {
      border-bottom: 3px solid #007bff;
      margin: 25px 0;
      opacity: 0.8;
    }
    .section {
      margin-bottom: 40px;
    }
    .row {
      margin-bottom: 25px;
    }
    .col-md-6 {
      margin-bottom: 25px;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}
</style>


      <div className="registration-container">
        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="section-heading">Personal Information</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={formData.username || ""}
                    onChange={handleChange}
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <div className="section-heading">Contact Information</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <div className="section-heading">Address Information</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="street">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    value={formData.street || ""}
                    onChange={handleChange}
                    placeholder="Enter street address"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="suite">Suite</label>
                  <input
                    type="text"
                    className="form-control"
                    id="suite"
                    value={formData.suite || ""}
                    onChange={handleChange}
                    placeholder="Enter suite"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <div className="section-heading">City, Zip, and Company Information</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={formData.city || ""}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    value={formData.zipcode || ""}
                    onChange={handleChange}
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <div className="section-heading">Website and Company</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    value={formData.website || ""}
                    onChange={handleChange}
                    placeholder="Enter website URL"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    value={formData.companyName || ""}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section">
            <div className="section-heading">Set Password</div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password || ""}
                    onChange={handleChange}
                    placeholder="Create a password"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={formData.confirmPassword || ""}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration;
