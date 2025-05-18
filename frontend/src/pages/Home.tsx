import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

import IntroStyles from "../css/Intro.module.css";
import DropdownStyles from "../css/Dropdown.module.css";


const Intro: React.FC = () => {
  return (
    <div className={IntroStyles.introContainer}>
      <div className={IntroStyles.introContent}>
        <div style={{flex: "1"}}>
          <h1>Dub Your Lecture in Any Language</h1>
          <p>Global Lectures is a service that dubs your uploaded lectures into the language of your choice. To use the service, upload the lecture from your computer, select the original language and the language you want to convert it to, then click the Convert button.</p>
        </div>
        <div style={{flex: "1", textAlign: "center", display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
            <h2>convert</h2>
            <div>
              <button className={DropdownStyles.dropdownButton}>...</button>
            </div>
            <h2>to</h2>
            <div>
              <button className={DropdownStyles.dropdownButton}>...</button>
            </div>
        </div>
      </div>
    </div>
  );
}

const FileUploadButton: React.FC = () => {
  return (
    <div className={IntroStyles.fileUploadButtonContainer}>
        <button className={IntroStyles.fileUploadButton}>
          <FontAwesomeIcon icon={faFolderPlus} style={{marginRight: "1rem"}}/>
          Select File
        </button>
    </div>
  );
}


const Home: React.FC = () => {
  return (
    <div>
      <Intro />
      <div className={IntroStyles.contentWrapper}>
        <FileUploadButton />
      </div>
    </div>
  );
};

export default Home;
