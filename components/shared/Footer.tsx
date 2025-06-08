import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const icons = [
  { title: FaFacebook, src: "https://www.facebook.com" },
  { title: FaInstagram, src: "https://www.facebook.com" },
  { title: FaTwitter, src: "https://www.facebook.com" },
];
const footerNav = [
  { title: "About Us", url: "/about" },
  { title: "Privacy Policy", url: "/privacyPolicy" },
  { title: "Terms Of Use", url: "/termsCondition" },
];

export default function Footer() {
  return (
    <>
      <div className="p-8 bg-[--primaryBlack] text-[--primaryWhite] ">
        <div className="flex items-stretch justify-between">
          <div className="w-2/4 space-y-6">
            <Image src={footerLogo} alt="footer-logo" />
            <p className="text-2xl font-normal">
              The Food we had enjoyed at the time of dinner. It was really
              delicious taste with great quality, everything had unique taste
              which we had ordered, nice arrangement and services from the staff
              while eating, we found nothing bad about this hotel.
            </p>
          </div>

          <div className="flex items-center gap-6 mr-10">
            <div className="space-y-2">
              <p className="text-2xl font-bold">Follow Us</p>
              <span className="text-3xl flex items-center gap-4">
                {icons.map((item, i) => (
                  <a key={i} href={item.src} target="_blank">
                    {<item.title />}
                  </a>
                ))}
              </span>
            </div>

            <div>
              <p className="text-2xl font-bold">
                Call Us{" "}
                <span className="text-2xl font-normal block">
                  +48 661 120 494
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* After a Horizontal Border */}
        <div className="flex justify-between items-center py-6 mt-10 border-t">
          <div className="flex gap-2 items-center text-base font-normal">
            <Image
              width={36}
              height={20.76}
              src={"/images/credit.png"}
              alt="credit"
            />
            <span>Design & Developed by Sparktech Agency</span>
          </div>

          <div className="flex gap-6 text-2xl font-normal">
            {footerNav.map((item, i) => (
              <Link key={i} href={item.url}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
