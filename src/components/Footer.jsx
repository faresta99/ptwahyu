"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()} Faresta. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="/privacy"
            className="hover:text-empat transition-all duration-300">
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-empat transition-all duration-300">
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:text-empat transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
