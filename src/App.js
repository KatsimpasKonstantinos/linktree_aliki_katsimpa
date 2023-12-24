import './App.css';
import Link from './Links';
import React, { useState } from 'react';

import profilePic from './aliki.jpg';

import imageLinkedIn from './logos/linkedIn.png';
import imageTelekom from './logos/telekom.png';

function App() {

  const [theme, setTheme] = useState('default'); // Initialize with a default theme

  const changeTheme = () => {
    // Define an array of available themes
    const themes = ['default', 'theme1', 'theme2', 'theme3',];

    // Find the index of the current theme in the array
    const currentIndex = themes.indexOf(theme);

    // Calculate the index of the next theme
    const nextIndex = (currentIndex + 1) % themes.length;

    // Set the next theme
    setTheme(themes[nextIndex]);
  };

  return (
    <div className={`app ${theme}`}>
      <br />
      <br />
      <div className="profile-container">
        <img
          src={profilePic}
          alt="Profile"
          className={`profile-picture ${theme}Child`}
        />
      </div>
      <h1>Aliki Katsimpa</h1>
      <Link name={"LinkedIn"} link={"https://www.linkedin.com/in/alikikatsimpa/"} logo={imageLinkedIn} theme={theme} />
      <Link name={"Telekom"} link={"https://www.linkedin.com/in/alikikatsimpa/"} logo={imageTelekom} theme={theme} />
      <Link name={"blank2"} link={"https://www.linkedin.com/in/alikikatsimpa/"} logo={imageLinkedIn} theme={theme} />
      <Link name={"blank3"} link={"https://www.linkedin.com/in/alikikatsimpa/"} logo={imageLinkedIn} theme={theme} />
      
      <button onClick={changeTheme} className={`button ${theme}Child`}>Change Theme</button>

    </div>
  );
}

export default App;
