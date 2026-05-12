const firebaseConfig = {

  apiKey: "AIzaSyD2ZvVaN_ZWrTKvQdWGpdLyt0jb1FHnVp4",

  authDomain: "cardgame-ed26e.firebaseapp.com",

  projectId: "cardgame-ed26e",

  storageBucket: "cardgame-ed26e.firebasestorage.app",

  messagingSenderId: "830034089374",

  appId: "1:830034089374:web:7c00cf947426a813f8b28f"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function flipCoin() {

  const name =
    document.getElementById("name").value.trim();

  if (!name) {

    alert("이름을 입력해줘!");

    return;

  }

  const result =
    Math.random() < 0.5 ? "🪙 앞면" : "🪙 뒷면";

  document.getElementById("result").textContent =
    result;

  await db.collection("coinResults").add({

    name: name,

    result: result,

    time: new Date()

  });

}
