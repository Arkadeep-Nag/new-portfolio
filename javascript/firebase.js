  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyDK6waTmws_Fr5lpxNBw31GXkkCFtH83lo",
      authDomain: "arkadeep-nag.firebaseapp.com",
      databaseURL: "https://arkadeep-nag-default-rtdb.firebaseio.com",
      projectId: "arkadeep-nag",
      storageBucket: "arkadeep-nag.appspot.com",
      messagingSenderId: "744347482829",
      appId: "1:744347482829:web:2820441debb2d3427c4784",
      measurementId: "G-2BNJ9CK1MX"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);
  var db = getDatabase(app);
  export { app, analytics, db };