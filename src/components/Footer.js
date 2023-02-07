import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto drop-shadow-lg">
      <div className="bg-vividYellow py-8">
        <p className="text-palePink text-center font-bold ">
          &copy; FANCY COCTAILS APP made by{' '}
          <a
            href="https://github.com/DALA746"
            className="underline transition duration-100  hover:text-cyanBlue ">
            DALA746
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
