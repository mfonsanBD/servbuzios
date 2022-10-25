import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'

// const firebaseConfig = {
//   apiKey: `${process.env.API_KEY}`,
//   authDomain: `${process.env.AUTH_DOMAIN}`,
//   projectId: `${process.env.PROJECT_ID}`,
//   storageBucket: `${process.env.STORAGE_BUCKET}`,
//   messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
//   appId: `${process.env.APP_ID}`,
//   measurementId: `${process.env.MEASUREMENT_ID}`
// }

const app = initializeApp({
  apiKey: 'AIzaSyAi31rjVJQSFPl915fjjQwz-dcebF5Pdrg',
  authDomain: 'woof-6c2ba.firebaseapp.com',
  projectId: 'woof-6c2ba',
  storageBucket: 'woof-6c2ba.appspot.com',
  messagingSenderId: '321591128428',
  appId: '1:321591128428:web:327370c5db799cec770349',
  measurementId: 'G-Y2XK1D0F7P'
})
export const db = getFirestore(app)
// const analytics = getAnalytics(app)
