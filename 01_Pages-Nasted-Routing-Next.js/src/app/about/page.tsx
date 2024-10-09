import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const About = () => {
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

      <div className={styles.paragraph}>
        <h4 className={styles.h4}>Short Description:</h4>
        <p>
          "At InnoTech Hub, we’re passionate about transforming concepts into
          reality through innovative technology solutions. Our experienced team
          works hand-in-hand with you to navigate the complexities of the
          digital world."
        </p>
        <br></br>
        <h3 className={styles.h3}>Our Mission :</h3>
        <p>
          "We strive to empower businesses by harnessing technology to drive
          growth and efficiency."
        </p>
      </div>
    </div>
  );
};

export default About;
