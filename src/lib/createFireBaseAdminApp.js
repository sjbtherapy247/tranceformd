import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY || {});

export function createFirebaseAdminApp() {
  // if already created, return the same instance
  if (admin.apps.length > 0) {
    const db = admin.database();
    return { app: admin.app(), db };
  }

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // The database URL depends on the location of the database
    databaseURL: 'https://tranceformd-fb741-default-rtdb.asia-southeast1.firebasedatabase.app/',
  });
  const db = admin.database();
  return { app, db };
}
