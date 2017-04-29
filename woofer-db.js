// TODO Sign into the database anonymously
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBnPOHvjQwPb2IZPjPL25fpscgXZ5mUxm4',
  authDomain: 'woof-524cd.firebaseapp.com',
  databaseURL: 'https://woof-524cd.firebaseio.com',
  projectId: 'woof-524cd',
  storageBucket: 'woof-524cd.appspot.com',
  messagingSenderId: '25978058712'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  firebase.database().ref('woofs').push(woof)
}

// READ from Firebase when woofs are added, changed, or removed
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woofs')
  .on('child_added', function (woofSnapshot) {
    addWoofRow(woofSnapshot.key, woofSnapshot.val())
  })

  firebase.database().ref('woofs')
  .on('child_changed', function (woofSnapshot) {
    updateWoofRow(woofSnapshot.key, woofSnapshot.val())
  })

  firebase.database().ref('woofs')
  .on('child_removed', function (woofSnapshot) {
    deleteWoofRow(woofSnapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
