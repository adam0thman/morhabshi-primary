// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXvI4NJFwWTP5rHFCxY_WGPna3cKIVmV8",
    authDomain: "morhabshi-e9680.firebaseapp.com",
    databaseURL: "https://morhabshi-e9680.firebaseio.com",
    projectId: "morhabshi-e9680",
    storageBucket: "morhabshi-e9680.appspot.com",
    messagingSenderId: "704004043273"
  };
  
  //Initialize main firebase app
  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
    
  // Variables
  var pageURL = window.location.protocol+"//"+window.location.host;
  var pageLogin = "/index.html";
  var pageMain = "/main.html";
  var pageAdmin = "/admin.html";
  console.log("pageURL is: "+pageURL);
  console.log("pageLogin is: "+pageLogin);
  console.log("pageMain is: "+pageMain);
  console.log("pageAdmin is: "+pageAdmin);

  // Function for Logging out
  function callLogout() {
    firebase.auth().signOut().then(function() {
      console.log("User has been Signed Out!");
      window.location.replace(pageURL+pageLogin);
    }).catch(function(e) {
      console.log("Error signing out:",e);
    });
  }
