import React from 'react';
import { Link } from 'react-router-dom';
import './HomePageSection.css';

function HomePageSection({ imageUrl, headerContent, headerUrl, paragraphContent }) {
  return (
    <div>
      <div
        className="home-page-section"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1><Link to={headerUrl}>{headerContent}</Link></h1>
        <p>{paragraphContent}</p>
      </div>
    </div>
  );
}

export default HomePageSection;