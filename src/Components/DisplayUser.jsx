import React from "react";
import LocationLogo from "../assets/icon-location.svg";
import TwitterLogo from "../assets/icon-twitter.svg";
import CompanyLogo from "../assets/icon-company.svg";
import WebsiteLogo from "../assets/icon-website.svg";

const DisplayUser = ({ user }) => {
  const truncateBio = (bio) => {
    const maxLength = 100;
    if (bio && bio.length > maxLength) {
      return bio.substring(0, maxLength) + "...";
    }
    return bio;
  };

  const renderLink = (logo, link) => {
    if (link) {
      return (
        <div className="flex-items">
          <img src={logo} alt="logo" />
          <p>{link}</p>
        </div>
      );
    } else {
      return (
        <div className="flex-items">
          <img src={logo} alt="logo" />
          <p>Not available</p>
        </div>
      );
    }
  };

  return (
    <div className="user-details-container">
      <div className="avatar-container">
        <a href={user.avatar_url} target="_blank" rel="noopener noreferrer">
          <img src={user.avatar_url} alt="user-avatar" />
        </a>
      </div>
      <div className="user-details">
        <h1>{user.name}</h1>
        <small>@{user.login}</small>
        <div className="repos-details">
          <div className="repos-container">
            <p>Repos</p>
            <p>{user.public_repos}</p>
          </div>
          <div className="followers-container">
            <p>Followers</p>
            <p>{user.followers}</p>
          </div>
          <div className="following-container">
            <p>Following</p>
            <p>{user.following}</p>
          </div>
        </div>
        <p className="user-bio">{truncateBio(user.bio || "Not available")}</p>

        <div className="links-container">
          {renderLink(CompanyLogo, user.company)}
          {renderLink(TwitterLogo, user.twitter_username)}
          {renderLink(WebsiteLogo, user.blog)}
          {renderLink(LocationLogo, user.location)}
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
