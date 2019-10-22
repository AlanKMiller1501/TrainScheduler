// Initialize Firebase....use another key and what not
var config = {
    apiKey: "AIzaSyCUa3OmzBQAV9MHxQg6Pgl2s5533V5qjEI",
    authDomain: "coder-bay-fee9d.firebaseapp.com",
    databaseURL: "https://coder-bay-fee9d.firebaseio.com",
    storageBucket: "coder-bay-fee9d.appspot.com"
  };
  
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//build a capture button and prevent default
$("addTrain").on("click", function (event)
 {event.preventDefault ();
    //build my variables 
    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var freq = $("#interval").val().trim();
    

  database.ref().push({
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: freq
    });
  });
 // create a temporary object for holding the new train data
 var newTrn = {
  name: trnName,
  destination: trnDest,
  firstTime: firstTrnTime,
  frequency: trnFreq
};

// upload the new train data to the database
database.ref().push(newTrn);

// console log the values that were just pushed to the database
console.log(newTrn.name);
console.log(newTrn.destination);
console.log(newTrn.firstTime);
 s