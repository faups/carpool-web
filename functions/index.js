/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const FieldValue = require("firebase-admin").firestore.FieldValue;
admin.initializeApp();

const db = admin.firestore();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.updateList = functions.firestore
  .document("users/{id}")
  .onWrite((change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();

    const pickupLocation = newValue.pickupLocation;

    const activePickupsRef = db.doc("ActivePickups/main");

    // See if user is checking in
    if (newValue.isCheckedIn === true && previousValue.isCheckedIn === false) {
      // User is checked in
      // Check user pickup location
      switch (pickupLocation) {
        case "Playground":
          // add id to playground map
          activePickupsRef.update({
            Playground: FieldValue.arrayUnion(context.params.id),
          });

          break;
        case "Art Wing":
          activePickupsRef.update({
            ArtWing: FieldValue.arrayUnion(context.params.id),
          });
          break;
      }
    } else if (
      newValue.isCheckedIn === false &&
      previousValue.isCheckedIn === true
    ) {
      // User is checked out
      // Remove id from list
      switch (pickupLocation) {
        case "Playground":
          // add id to playground map
          activePickupsRef.update({
            Playground: FieldValue.arrayRemove(context.params.id),
          });
          break;
        case "Art Wing":
          activePickupsRef.update({
            ArtWing: FieldValue.arrayRemove(context.params.id),
          });
          break;
      }
    }
  });
