import React from "react";
import styles from "./home.module.css";
import Link from "next/link";

function Navbar() {
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
      <div className={styles.homeSection}>
        <p>
          <b>
            "Ignite Your Ideas with InnoTech Hub – Where Innovation Meets
            Technology!
            <br></br>
            Let’s Bring Your Vision to Life!”
          </b>
        </p>
      </div>
    </div>
  );
}

export default Navbar;

// a tag or href ="/" and page name is for link the pages About
// open in next page for set the target _blank
// open in same page
