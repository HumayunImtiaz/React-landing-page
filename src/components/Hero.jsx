import React from 'react';

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Digital Marketing Manager</h1>
        <p>
        mMnage various digital channels such as social media,
         email marketing, and SEO to drive brand awareness, 
         lead generation, and customer engagement.
        </p>

        <div className="hero-btn">
          <button>Shop Now </button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img id='hero-image' src="/images/hero-image.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
