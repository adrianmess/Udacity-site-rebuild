// import { firebaseConfig} from './app.module';
import { masterFirebaseConfig } from './api-keys';

const firebase = require("firebase");
// Required for side-effects
require("firebase");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(masterFirebaseConfig);

let db = firebase.database().ref('/');

var cards = {cards: [
	{
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd898.jpg",
		"pillTxt": "New!",
		"h4text": "Artificial Intelligence",
		"divId": "overlay1",
		"id": "1"
	}, {
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd892.jpg",
		"pillTxt": "New!",
		"h4text": "Natural Language Processing",
		"divId": "overlay2",
		"id": "2"
	}, {
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd891.jpg",
		"pillTxt": "New!",
		"h4text": "Computer Vision",
		"divId": "overlay3",
		"id": "3"
	}, {
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd089.jpg",
		"pillTxt": "New!",
		"h4text": "AI Programming With Python",
		"divId": "overlay4",
		"id": "4"
	}, {
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd787.jpg",
		"pillTxt": "New!",
		"h4text": "Flying Cars & Autonomous Flight",
		"divId": "overlay5",
		"id": "5"
	}, {
		"title": "Artificial Intelligence",
		"bgImgUrl": "https://www.udacity.com/assets/iridium/images/shared/nd-cards/nd201.jpg",
		"pillTxt": "New!",
		"h4text": "Design Sprint Foundations",
		"divId": "overlay6",
		"id": "6"
	}
]}



export function setCards(){
	db.set(cards).then().catch();
}


