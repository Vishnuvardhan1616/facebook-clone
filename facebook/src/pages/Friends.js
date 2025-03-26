import React from "react";

const Friends = () => {
  return (
    <div className="content-container">
      <h2 className="text-2xl font-bold">👫 Your Friends</h2>
      <p>Here are some of your Facebook friends:</p>
      <ul className="list-disc pl-5">
        <li>😃 John Doe</li>
        <li>🥳 Emily Smith</li>
        <li>🎸 Alex Johnson</li>
      </ul>
    </div>
  );
};

export default Friends;
