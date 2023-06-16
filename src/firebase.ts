import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDatabase, ref as dbRef } from 'firebase/database'
// ... other firebase imports

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
  // measurementId: import.meta.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

export const firebaseApp = initializeApp(firebaseConfig)

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const todosRef = dbRef(db, 'todos')
