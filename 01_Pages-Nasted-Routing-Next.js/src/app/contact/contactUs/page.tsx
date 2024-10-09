import React from "react";
import Link from "next/link";
import styles from "./contactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <nav className="bg-yellow-400 h-12">
        <div className="text-background flex justify-between items-center">
          <h1 className="text-xl m-2">InnoTech Hub</h1>
          <ul className="flex gap-3 mr-4 cursor-pointer">
            <li>
              <Link className="hover:text-pink-400" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-sky-400"
                href="/about"
                target="_blank"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-400"
                href="/services"
                target="_blank"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-400"
                href="/contact"
                target="_blank"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h3 className={styles.h3}>We're Almost Ready!</h3>
        <p className={styles.paragraph}>
          Our contact form is coming soon. Whether you have questions, feedback,
          or need assistance, we'll be here to help you connect with us quickly
          and easily. Stay tuned for updates and thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
