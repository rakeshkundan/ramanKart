"use client";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Image from "next/image";
import Play from "../assets/google-play.png";
import Money from "../assets/money.png";
import Visa from "../assets/visa.png";

import { useState } from "react";

export default function Footer() {


  return (
    <footer className="bg-black text-white px-6 py-8 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 justify-center items-center gap-6 border-b border-gray-700 pb-6">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm mb-2">BE THE FIRST TO KNOW</h3>
            <p className="mb-4 text-gray-400">
              Sign up for updates from mettà muse.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="px-4 py-2 rounded-sm text-black w-full sm:w-64"
              />
              <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-sm uppercase">
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact & Currency */}
          <div className="grid grid-cols-1 justify-center items-center">
            <h3 className="font-bold text-sm mb-2">CONTACT US</h3>
            <p className="mb-1">+44 221 133 5360</p>
            <p className="mb-4">customercare@mettamuse.com</p>
            <h3 className="font-bold text-sm mb-2">CURRENCY</h3>
            <p className="mb-1 flex items-center gap-2">
              <span>🌍</span> USD
            </p>
            <p className="text-xs text-gray-400">
              Transactions will be completed in Euros...
            </p>
          </div>
        </div>
        <div className="bg-black text-white px-6 sm:px-16 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-bold mb-4">mettā muse</h2>
            <ul className="space-y-3 text-sm">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
            <ul className="space-y-3 text-sm">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-xl font-bold mb-4">FOLLOW US</h2>
            <div className="flex gap-4 mb-6">
              <Image src={insta} alt="Instagram" width={32} height={32} />
              <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
            </div>
            <h3 className="text-base font-semibold mb-3">mettā muse ACCEPTS</h3>
            <div className="flex flex-wrap gap-3">
              <Image src={Play} alt="Google Pay" width={32} height={32} />
              <Image src={Money} alt="Money" width={32} height={32} />
              <Image src={Visa} alt="Amex" width={32} height={32} />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-xs text-gray-500 mt-6">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
