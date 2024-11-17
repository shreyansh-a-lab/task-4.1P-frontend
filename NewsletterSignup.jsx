import React from 'react';
import './NewsletterSignup.css';

function NewsletterSignup() {
  return (
    <div className="newsletter-signup">
      <h2>Sign Up for Our Daily Insider</h2>
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Sign Up</button>
    </div>
  );
}

export default NewsletterSignup;
