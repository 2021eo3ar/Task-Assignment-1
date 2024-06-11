import React from 'react';
import './LenderForm.css';

const LenderForm = () => {
  return (
    <>
    <div className="form-container">
      <div className="form-header">
        <img src="https://via.placeholder.com/100" alt="icon" className="form-icon" />
        <h2>Become a Lender</h2>
      </div>
      <form className="form-content">
        <div className="form-group">
          <label>Amount to Lend (Rs.25,000 - 10,00,000)</label>
          <input type="text" name="amount" />
        </div>
        <div className="form-group">
          <label>Expected Interest Rate (In %)</label>
          <input type="text" name="interest" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Create a Password</label>
            <input type="password" name="password" />
          </div>
        </div>
        <div className="form-group">
          <label>Mobile No.</label>
          <input type="text" name="mobile" />
        </div>
        <div className="form-checkbox">
          <input type="checkbox" name="agreement" />
          <label>I have read and agree to the <a href="/">Privacy Policy</a>, <a href="/">Terms of Use</a>, and Consent to Electronic Disclosures</label>
        </div>
        <div className="form-checkbox">
          <input type="checkbox" name="authorization" />
          <label>I authorize Lending Buddha to do background checks on my profile in accordance with Anti Money Laundering Laws, if required</label>
        </div>
        <button type="submit" className="form-button">Continue</button>
        <p className="form-footer">Having trouble signing up? <a href="/">Contact us</a></p>
      </form>
    </div>
      <div className="form-info">
        <p>
          Over 20,000 Lenders have trusted Lending Buddha with their hard earned money and are now enjoying safe and high monthly returns. 
          Lending Buddha has introduced India's retail Lenders to a brand new and highly lucrative asset class, India's People.
        </p>
      </div>
      </>
  );
};

export default LenderForm;
