import Link from "next/link";
import styles from "./services.module.css";
import React from "react";

const Services = () => {
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
      <h3 className={styles.h3}>List of Services:</h3>
      <ul className={styles.li}>
        <li>
          <h4 className={styles.h4}>Custom Software Development:</h4> Tailored
          solutions to fit your business requirements.
        </li>
        <li>
          <h4 className={styles.h4}>Web Development:</h4>Creating engaging and
          responsive websites.
        </li>
        <li>
          <h4 className={styles.h4}>IT Consulting:</h4>Strategic advice to
          enhance your IT infrastructure.
        </li>
        <li>
          <h4 className={styles.h4}>Technical Support:</h4>Reliable support to
          keep your systems running smoothly.
        </li>
      </ul>

      <h3 className={styles.h3}>Call to Action:</h3>
      <p className={styles.p}>“Discover How We Can Help!”</p>
    </div>
  );
};

export default Services;
