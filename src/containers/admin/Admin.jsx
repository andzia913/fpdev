import React, { useEffect, useState } from 'react';
import './admin.css';

import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AdminForms, AdminLoging } from '../../components';
import AdminLogging from '../../components/adminLogging/AdminLogging';

const Admin = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
        })
        .catch((e) => {
          console.error(e);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLogIn(true);
      const { uid } = user;
    } else {
      setIsLogIn(false);
    }
  });

  return (
    <div className="admin-container">
      <h1 className="admin-container__header">Panel administracyjny</h1>
      {!isLogIn ? <AdminLogging handleSignIn={signIn} /> : ''}
      <div>
        {isLogIn ? <AdminForms currUser={auth.currentUser} handleLogOut={logout} /> : ''}
      </div>
    </div>
  );
};
export default Admin;
