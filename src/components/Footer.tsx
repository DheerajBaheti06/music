import React from "react";

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">
              Music School is a premier institution dedicated to teaching the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Contacts"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Courses"
                  className="hover:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/Contacts"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DheerajBaheti06"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/dheeraj-baheti1"
                className="hover:text-white transition-colors duration-300"
              >
                Linkedin
              </a>
              <a
                href="https://linkedin.com/in/dheeraj-baheti1"
                className="hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p>Chhattisgarh, India</p>
            <p>Raipur 492001</p>
            <p><a href="mailto:bahetidheeraj7@gmail.com">&#x2709; bahetidheeraj7@gmail.com</a></p>
            <p><a href="tel:9584433460">&#x260F; (91+) 9584433460</a></p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Music School. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer