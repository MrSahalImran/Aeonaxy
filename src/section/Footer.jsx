import React from "react";
import FooterSelect from "../components/FooterSelect";
import DownloadSelect from "../components/DownloadSelect";
import FooterMenu from "../components/FooterMenu";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import SmFooterMenu from "../components/SmFooterMenu";

const Footer = () => {
  const menu = [
    { title: "About", items: ["About Calendly", "Contact Sales", "Newsroom", "Careers", "Security"] },
    { title: "Solutions", items: ["Customer Success", "Sales", "Recruiting", "Information Technology", "Marketing"] },
    { title: "Popular Features", items: ["Embed Calendly", "Automated Scheduling", "Group Events", "Customizable Notifications"] },
    { title: "Support", items: ["Help Center", "Video Tutorials"] },
    { title: "Add-Ons", items: ["Download for Chrome", "Download firefox"] },
    { title: "Developers", items: ["Developer Tools"] }
  ];

  return (
    <footer className="bottom-0 mt-2 w-full px-4 pt-20  select-none">
<div className="mb-[8vw] border-dotted border-gray-400 border-t-4"></div>
      <div className="lg:flex lg:gap-[18vw]">
        <div className="flex flex-col gap-6 lg:w-[27%] md:w-full">
          <h1 className="text-4xl w-[10%] leading-snug font-bold tracking-tighter">
            Easy <span className="text-blue-600">ahead</span>
          </h1>
          <p className="text-sm lg:text-base">
            We take the work out of connection with others so you can accomplish more
          </p>
          <div className="md:w-1/2">
            <FooterSelect />
          </div>
          <div className="flex gap-2 mt-6">
            <DownloadSelect label={"App Store"} text={"Download on the"} />
            <DownloadSelect
              label={"Play Store"}
              text={"Get it on"}
              imgUrl={"https://th.bing.com/th/id/R.cba92ec2dbc0f5c3a3b6591dc760d907?rik=PB7HqgvCyqL%2bBA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgoogle-play-icon-transparent%2fgoogle-play-icon-transparent-19.png&ehk=IaQLR8waD2%2fJrEf0vkNvptyCX4SujnQJfp2RRxoHEXo%3d&risl=&pid=ImgRaw&r=0"}
            />
          </div>
          <div className="socials flex gap-6 mt-8 mb-6">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-options grid grid-cols-3 gap-x-28 gap-y-6 lg:w-[45%] ">
          {menu.map((item, index) => (
            <FooterMenu key={index} title={item.title} bullets={item.items} />
          ))}
        </div>
        <div className="sm-footer-options w-full mt-8 md:hidden">
          {menu.map((item, index) => (
            <div key={index}>
              <h1 className="text-gray-600 mt-5 font-bold text-2xl lg:text-3xl">{item.title}</h1>
              <SmFooterMenu menu={item.items.map(option => ({ option }))} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center sm:flex-col md:flex-row text-nowrap p-1 flex flex-col sm:flex-col md:flex-row items-center mt-[4vw] mb-3 justify-between">
  <p className="text-gray-500 text-sm mb-2 sm:mb-0 md:mb-0 md:mr-auto">
    Copyright © 2021 Calendly.
  </p>
  <p className="text-sm text-gray-500 md:mx-auto mb-2 sm:mb-0 md:mb-0">
    <span className="w-3 h-3 inline-block rounded-full bg-green-500 "></span> Calendly Status
  </p>
  <p className="text-sm text-gray-500 md:ml-auto">
    Privacy / Terms and Condition
  </p>
</div>

    </footer>
  );
};

export default Footer;
