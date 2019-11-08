// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD6BHPktXCHrkR6DDnEdqGr2jQ1NQdH3tY",
  authDomain: "my-first-project-app1234.firebaseapp.com",
  projectId: "my-first-project-app1234",
});

var db = firebase.firestore();
//agregar documentos 
function guardar() {
  
  var HORAS = document.getElementById("crane-state-input").value;



  console.log(HORAS);

  db.collection("datos").add({

    HORAS:HORAS,

  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);

      //esto es para que cuando refresquemos salga el formulario en blanco 
      document.getElementById("crane-state-input").value = "";
  
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });


}


