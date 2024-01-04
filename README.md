# FP Development - Real Estate Landing Page

Welcome to the README for FP Development's Real Estate Landing Page. This application showcases a sunny color palette and presents information about a real estate development, along with a list of available apartments. Additionally, it features an administrative panel that allows authorized users to make updates such as changing apartment prices, updating the project completion date, or adding entries to the construction journal.

## Application Overview

The landing page is hosted online at [www.fpdevelopment.com.pl](http://www.fpdevelopment.com.pl). 
Administrative Panel
The administrative panel provides authorized users with the ability to make dynamic updates to the content of the landing page. This includes:
Modifying apartment prices
Updating the project completion date
Adding entries to the construction journal

Project Structure
The project follows a standard React project structure:
  /public
    - pictrures and cards of flats
  /src
      /conatiners
        - Application containers with CSS styling
      /components
        - Application components with CSS styling
      /utils
        - Utility functions and tools
      /assets
        - pictures
      App.jsx
      index.jsx
  index.html
  

### Installation

1. Clone the repository: `git clone https://github.com/andzia913/fpdev.git`
2. Navigate to the project directory: `cd project-name`
3. Install dependencies: `npm install`

#### Running
Please note that the application cannot be downloaded and run independently, as it relies on Firebase for backend services. To run the application locally, one would need to configure their own Firebase database and credentials.
After installing dependencies, run the application locally using the following command: `npm start` 
The Firebase configuration file (`firebaseConfig.js`) is not included in this repository due to security reasons. To set up your own Firebase instance:

Please note that the application cannot be downloaded and run independently, as it relies on Firebase for backend services. To run the application locally, one would need to configure their own Firebase database and credentials.
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Obtain your Firebase configuration object from the Firebase project settings.
3. Create a new file named `config/firebase.js` in the `src` directory.
4. Add the following content to `firebase.js`, replacing the placeholders with your Firebase configuration:

   ```javascript
   // firebaseConfig.js
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   export default firebaseConfig;```


