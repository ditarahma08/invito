import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyCulygORR63tQVt5mZu8Bqfs-IAda4Bcy0",
	authDomain: "dita-danan.firebaseapp.com",
	projectId: "dita-danan",
	storageBucket: "dita-danan.firebasestorage.app",
	messagingSenderId: "234672689792",
	appId: "1:234672689792:web:61e6cc438e6ae097edcc65",
	measurementId: "G-V2B2S7HEQS",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
