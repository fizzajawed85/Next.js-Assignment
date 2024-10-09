import Link from "next/link";
import styles from "./contact.module.css";
import React from "react";

const Contact = () => {
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
        <h3 className={styles.h3}>Get in Touch</h3>
        <p className={styles.paragraph}>
          "We’re here to help you turn your ideas into reality. Reach out to us
          for inquiries, project discussions, or support. Whether you have a
          question or need a custom tech solution, we’re just a message away!"
        </p>

        <h3 className={styles.h3}>Contact Information:</h3>
        <ul className={styles.li}>
          <li>
            <h6 className={styles.h6}>Address:</h6>202 Innovation Lane, Tech
            City, ST
          </li>
          <li>
            <h6 className={styles.h6}>Phone:</h6>(123) 456-7890
          </li>
          <li>
            <h6 className={styles.h6}>Email:</h6>innotechhub@gmail.com
          </li>
        </ul>
      </div>
      <p className={styles.p}>Click Here To Contact Form:</p>
      <Link href="/contact/contactUs" className={styles.contactButton}>
        Contact Us
      </Link>
    </div>
  );
};

export default Contact;
