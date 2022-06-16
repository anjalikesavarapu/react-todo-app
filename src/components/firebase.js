import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCkSfSL42kYuiPF-jTAc1iJtdnw0XMN8xw",
    authDomain: "todo-app-cp-5df7d.firebaseapp.com",
    projectId: "todo-app-cp-5df7d",
    storageBucket: "todo-app-cp-5df7d.appspot.com",
    messagingSenderId: "1017058641209",
    appId: "1:1017058641209:web:e20847bafea0310397d4e8",
    measurementId: "G-YYMTQ7830W"
})

const db = firebaseApp.firestore()
export default db