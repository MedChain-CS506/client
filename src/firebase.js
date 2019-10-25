import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyBaebsr4HHrMKTddWSy6S35NISq4NriwgE",
    authDomain: "medchain-11c85.firebaseapp.com",
    databaseURL: "https://medchain-11c85.firebaseio.com",
    projectId: "medchain-11c85",
    storageBucket: "medchain-11c85.appspot.com",
    messagingSenderId: "913307124915",
    appId: "1:913307124915:web:c8495c1806ad3755a4dcc6",
    measurementId: "G-76PNKH5MWN"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
    }

    async register(email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
	}
}

export default new Firebase()