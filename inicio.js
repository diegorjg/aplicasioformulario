// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD6BHPktXCHrkR6DDnEdqGr2jQ1NQdH3tY",
  authDomain: "my-first-project-app1234.firebaseapp.com",
  projectId: "my-first-project-app1234",
});
  
 var db = firebase.firestore();
//agregar documentos 
function guardar() {
  var name = document.getElementById("crane-name-input").value;
  var correo = document.getElementById("crane-email-input").value;
  var Twitter = document.getElementById("crane-twitter-input").value;
  var Github = document.getElementById("crane-input").value;
 
  console.log(name);
  console.log(correo);
  console.log(Twitter);
  console.log(Github);
  



  db.collection("datos").add({

    name: name,
    correo: correo,
    Twitter:Twitter,
    Github :Github
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);

      //esto es para que cuando refresquemos salga el formulario en blanco 
      document.getElementById("crane-name-input").value = "";
      document.getElementById("crane-email-input").value = "";
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });


}



