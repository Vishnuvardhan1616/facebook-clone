import React from "react";

const Settings = () => {
  return (
    <div className="content-container">
      <h2 className="text-2xl font-bold">⚙️ Settings</h2>
      <p>Manage your account settings.</p>
      <ul className="list-disc pl-5">
        <li>🔒 Change Password</li>
        <li>📧 Update Email</li>
        <li>🔕 Notification Preferences</li>
      </ul>
    </div>
  );
};

export default Settings;
