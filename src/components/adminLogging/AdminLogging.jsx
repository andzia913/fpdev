import React, { useState } from 'react';
import './adminLogging.css';

const AdminLogging = ({ handleSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="admin-logging">
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email..." />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Hasło..." />
      <button type="button" onClick={() => handleSignIn(email, password)}>Zaloguj</button>
    </div>
  );
};

export default AdminLogging;
