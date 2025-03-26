import React from "react";

const Profile = () => {
  return (
    <div className="content-container">
      <h2 className="text-2xl font-bold">👤 Your Profile</h2>
      <p>Welcome to your profile page.</p>
      <ul className="list-disc pl-5">
        <li>📷 Profile Picture</li>
        <li>📝 Bio: "React Developer | Tech Enthusiast"</li>
        <li>📍 Location: Hyderabad, India</li>
      </ul>
    </div>
  );
};

export default Profile;
