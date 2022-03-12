  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "xxxxxxxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxx-default-rtdb.firebaseio.com",
      projectId: "xxxxxx",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxxxxxxxxxxxx",
      appId: "1:xxxxxxxxxxxxxxxxxxxxxxxx",
      measurementId: "G-xxxxxxxxxxxxxx"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);
  var db = getDatabase(app);
  export { app, analytics, db };
