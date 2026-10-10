
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDdyukNKzRKK5ku9eg7bQu205hB83cBNNE",
  authDomain: "test-ae409.firebaseapp.com",
  projectId: "test-ae409",
  storageBucket: "test-ae409.firebasestorage.app",
  messagingSenderId: "1072582076346",
  appId: "1:1072582076346:web:b915818128de45d0fc5f83"
});

const messaging = firebase.messaging();
