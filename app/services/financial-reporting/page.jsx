import React from "react";
import StartingHeaderImage from "../../../components/StartingHeaderImage";
import financialReportingImage from "../../../public/Images/financial-reporting.jpg";

const financialReporting = () => {
  const financialData = [
    {
      title: "Accounting Services",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam aut numquam tenetur magnam maiores a porro labore at dolorum? Autem mollitia molestiae quisquam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam aut numquam tenetur.",
      ],
    },
    {
      title: "Accurate Reporting That Drives Results",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam aut numquam tenetur magnam maiores.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam aut.",
      ],
    },
    {
      title: "What You Get With Our Financial Reporting Services",
      content: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quibusdam aut numquam tenetur magnam maiores.",
      ],
    },
    {
      title: "Accounts Payable Aging Analysis",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Accounts Receivable Aging Analysis",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Project Costing and Analysis",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Department or Location Costing",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Cash Forecasting",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Working Capital Control",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Key Performance Indicator Reporting",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Monthly and Quarterly Analysis",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Profit Improvement Monitoring",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Budgeting and Variance Review",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Professional Collaboration",
      content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      title: "Why choose us?",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Deep Experience",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Full Support",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Expert Team",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Custom Tools",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Client Focused",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Custom Reports That Fit Your Business",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Technology-Driven Accuracy",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Clear Analysis for Smarter Planning",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Services for All Types of Businesses",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Why Financial Reporting and Analytics Matter",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Financial Services Industry Reports That Guide Decisions",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Our Reporting Method: Simple, Reliable, Actionable",
      content: [
        "We work with clients across the financial services industry. Our team knows the rules, the trends, and the needs of each segment. We know that financial data must follow strict rules. We follow best practices to meet those standards every time.",
      ],
    },
    {
      title: "Reporting You Can Share With Confidence",
      content: [
        "Many businesses need to share reports with outside parties. This may include tax officers, auditors, investors, or partners. Our financial reporting services meet those standards.",
        "You can share them without worry. They follow the accepted norms, are cleanly formatted, and hold up under review. We can also work with your accountant to ensure smooth audits or reviews.",
      ],
    },
  ];

  return (
    <>
      <StartingHeaderImage
        title="Financial Reporting & Analytics"
        imageSrc={financialReportingImage}
      />
      <section className="px-4 xl:px-20 py-10 space-y-7 bg-primary">
        {financialData.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* Title section */}
            <div className="flex items-start gap-3">
              <h2 className="text-2xl font-semibold mt-1">{item.title}</h2>
            </div>

            {/* Content paragraphs */}
            {item.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        ))}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="h-[35px] w-1 bg-secondary inline-block"></span>
            <h2 className="text-2xl font-semibold mt-1">
              Why Financial Reporting and Analytics Matter
            </h2>
          </div>
          <p>
            If you want to grow, you need solid data. If you want to cut waste,
            you need insights. If you want to survive in tough times, you need
            clarity. That’s what financial reporting and analytics offer.
          </p>
          <p>
            If you want to grow, you need solid data. If you want to cut waste,
            you need insights. If you want to survive in tough times, you need
            clarity. That’s what financial reporting and analytics offer.
          </p>
          <p>Good data helps you:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Improve cash flow </li>
            <li>Allocate resources better</li>
            <li>Reduce waste and losses</li>
            <li>Stay compliant with tax laws</li>
            <li>Win investor trust</li>
            <li>Control costs across projects or teams</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default financialReporting;
