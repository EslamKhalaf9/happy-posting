import React from 'react';
import { Link } from 'react-router-dom';
import SignedLinks from './SignedLinks';
import UnSignedLinks from './UnSignedLinks';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white p-4 flex justify-between items-center md:flex-row flex-col">
      <Link to="/" className="text-2xl mb-2 md:text-4xl md:mb-0">
        Happy Posting
      </Link>
      <SignedLinks />
      {/* <UnSignedLinks /> */}
    </nav>
  );
};

export default Navbar;
