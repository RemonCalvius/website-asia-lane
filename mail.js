const firebaseConfig = {
  apiKey: "AIzaSyBBPTjaAlSt8CGgbNe4K7iEkBhOKOJGtJw",
  authDomain: "asialaneroleplayofficial.firebaseapp.com",
  databaseURL: "https://asialaneroleplayofficial-default-rtdb.firebaseio.com",
  projectId: "asialaneroleplayofficial",
  storageBucket: "asialaneroleplayofficial.appspot.com",
  messagingSenderId: "886319445323",
  appId: "1:886319445323:web:27022954a14abb8d02a4ce",
  measurementId: "G-QP1KJG7EJE"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
