const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.updateList = functions.firestore
  .document('users/{id}')
  .onWrite((change, context) => {
    const newValue = change.after.data();

    const previousValue = change.before.data();
    
    //See if user is checking in
    if(newValue.isCheckedIn == true && previousValue.isCheckedIn == false) {
      //User is checked in
      //Check user pickup location 
      switch(pickupLocation) {
        case "Playground":
          // add id to playground map
          
          break;
        case "Art Wing":
          //add id to art wing map
          break;
      }
    
    } else if(newValue == 'false' && previousValue == 'true') {
      //User is checked out
      //Remove id from list
    }
 });
