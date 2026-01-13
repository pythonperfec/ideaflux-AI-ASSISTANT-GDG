// PASTE your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyDrHLGyEX-328wEkgyWj1JI49zM_wB57dI",
  authDomain: "ideaflux-2ca8c.firebaseapp.com",
  projectId: "ideaflux-2ca8c",
  storageBucket: "ideaflux-2ca8c.firebasestorage.app",
  messagingSenderId: "116044780986",
  appId: "1:116044780986:web:faf685036bbdbf4c383983",
  measurementId: "G-7Y7G87YSYH"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function submitText() {
  const text = document.getElementById("inputText").value;

  if (!text) {
    alert("Please paste some text");
    return;
  }

  db.collection("analyses").add({
    input_text: text,
    created_at: new Date(),
    status: "pending"
  })
  .then(() => {
    document.getElementById("status").innerText =
      "Submitted! AI analysis will appear soon.";
    document.getElementById("inputText").value = "";
  })
  .catch((error) => {
    console.error(error);
  });
}
