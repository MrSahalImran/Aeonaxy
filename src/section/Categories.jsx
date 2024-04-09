import React from "react";
import Card from "../components/Card";

const Categories = () => {
  const cardData = [
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/b5e19ee839adbf6b38dccaf5b0a413ac30cdb147.svg",
      title: "Getting Started",
      description:
        "Learn the basics, connect your calendar, and discover features that will make scheduling easier.",
    },
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/4a9f357ea0372777b16e79fc71d19c06fc4feb81.svg",
      title: "Using Calendly",
      description: "Availability, Event Type Settings, and Multi-user features",
    },
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/362a71d943ca65bf32588394dd0b3ce0741ca1dd.svg",
      title: "Calendly For Mobile",
      description: "Mobile Apps for iOS & Android",
    },
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/455f2c607b0e8adfef191786d74c8b1ba1fcb0ba.svg",
      title: "Integrations & Automations",
      description:
        "Includes Calendar Connections Calendly integration, Workflows, and Embed Options",
    },
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/7800ac35448c6bad03f70b300ce0f25831c7d17f.svg",
      title: "Account Settings",
      description:
        "Includes Billing Security, SAML/SCIM setup, and account options",
    },
    {
      imgSrc:
        "//theme.zdassets.com/theme_assets/1024340/e7ed604187ba3070af932d4d59bd1aacd7f3a0ea.svg",
      title: "Video Tutorials",
      description: "Watch our video tutorials to learn more about Calendly",
    },
  ];

  return (
    <div className="container mt-10 select-none  md:mt-24 mx-auto px-4">
      <h1 className="text-center text-4xl md:text-6xl sm:text-3xl font-bold text-gray-800 mb-20">Categories</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cardData.map((item, index) => (
          <Card
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
