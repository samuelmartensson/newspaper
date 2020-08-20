import React from 'react';
import { Link } from 'react-router-dom';

export default function LayoutSimple({ children }) {
  return (
    <div>
      <div className="menu">
        <Link className="link" to="/">
          Start
        </Link>
        <Link className="link" to="/feed">
          Feed
        </Link>
      </div>

      {children}
    </div>
  );
}
