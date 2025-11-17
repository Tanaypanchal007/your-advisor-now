import React from "react";
import StartingHeaderImage from "../../../components/StartingHeaderImage";
import backOfficeSolutionImage from "../../../public/Images/back-office-solutions.jpg";

const backOfficeSolutions = () => {
  const backOfficeData = [
    {
      type: "paragraph",
      text: "We understand that day to day tasks like data entry, document handling, or order tracking may not seem urgent, but they play a big role in your ability to grow. When these tasks fall behind, the impact reaches every part of your company. That is why we step in to fix the process, not just the output.",
    },
    {
      type: "paragraph",
      text: "At Confiance, we help businesses remove the weight of internal tasks that slow them down. If outdated software, staff shortages, or manual processes are holding your operations back, we offer real solutions. Our back office services give you the structure, speed, and accuracy needed to support sales, service, and delivery.",
    },
    {
      type: "paragraph",
      text: "Our team provides a wide range of back office solutions under one roof. Whether you need help with data conversion, email support, order processing, or research, we offer complete services that are built to fit your flow. We work with your tools and your timeline, giving you more time to focus on sales, planning, and service.",
    },

    {
      type: "title",
      text: "What Are Back Office Solutions",
    },
    {
      type: "paragraph",
      text: "Back office solutions cover the internal tasks that keep your business running. These are not customer facing but are key to daily operations. These tasks include data entry, order processing, document management, email support, quality checks, and more. Many companies find that handling these tasks in house leads to delays, errors, or rising costs. That is where we step in.",
    },
    {
      type: "paragraph",
      text: "Our team helps you manage these operations in a better way. We use a mix of tools, skills, and simple systems to ensure every task is handled right. Whether you are a growing company or an established one, we help you build a smooth and strong support base.",
    },

    {
      type: "title",
      text: "Why Choose Confiance",
    },
    {
      type: "paragraph",
      text: "We have over ten years of solid work in this field. We know how to handle the workload without losing control. Our clients trust us because we offer:",
    },
    {
      type: "list",
      items: [
        "Clear service structure",
        "Timely results",
        "Secure handling of data",
        "Flexible support plans",
        "Support for scaling operations",
      ],
    },
    {
      type: "paragraph",
      text: "Many business strategy consulting firms struggle with internal inefficiencies. That affects how well they serve their clients. Our back office support allows such firms to work without distraction. We handle the backend while they focus on their main services.",
    },

    {
      type: "title",
      text: "Our Back Office Services",
    },
    {
      type: "paragraph",
      text: "We cover a wide list of functions that are part of every office’s daily work. You can pick the services you need or use a full package. Below is a breakdown of what we offer.",
    },

    {
      type: "subtitle",
      text: "Market Survey and Research",
    },
    {
      type: "paragraph",
      text: "We gather and sort data from multiple sources. This helps you understand trends, prices, customer choices, and the scope for new offerings. Good decisions start with strong data. Our survey team ensures that what you get is real, useful, and easy to apply.",
    },

    {
      type: "subtitle",
      text: "Purchase Order Processing",
    },
    {
      type: "paragraph",
      text: "Handling purchase orders can get messy. Our team checks, verifies, and updates orders so that your purchase cycle stays smooth. From entry to updates and status tracking, we manage the full loop.",
    },

    {
      type: "subtitle",
      text: "Transaction Processing and Monitoring",
    },
    {
      type: "paragraph",
      text: "Each transaction counts. We keep a watch on every step of the process. That includes tracking entries, checking details, and flagging anything that does not match. You get real time updates and fast issue resolution.",
    },

    {
      type: "subtitle",
      text: "Document Digitization and Data Conversion",
    },
    {
      type: "paragraph",
      text: "Still using paper files or old formats? We scan, convert, and store your files in digital formats. This improves access and cuts down storage space. You can find and use your files without delay.",
    },

    {
      type: "subtitle",
      text: "Indexing, Archiving, and Data Collection",
    },
    {
      type: "paragraph",
      text: "We build order into your records. Whether it is client info, reports, or product data, we collect, sort, and label everything. This keeps your database clean and easy to use.",
    },

    {
      type: "subtitle",
      text: "Product Catalog Updates",
    },
    {
      type: "paragraph",
      text: "We update product lists, prices, codes, and descriptions. Whether you sell online or through stores, your product catalog must be right. Errors cause delays and reduce trust. We fix that.",
    },

    {
      type: "subtitle",
      text: "Email Support",
    },
    {
      type: "paragraph",
      text: "Need help managing a large volume of emails? We handle customer queries, internal requests, and status updates. Our team follows your tone and rules so that responses match your brand.",
    },

    {
      type: "subtitle",
      text: "Quality Checks",
    },
    {
      type: "paragraph",
      text: "Before your data moves forward, we check it. Quality control ensures your systems are error free. Our team finds gaps before they become problems.",
    },

    {
      type: "paragraph",
      text: "Each task may seem small, but when combined, they take up a lot of time. Our service frees up your team and improves the flow of work.",
    },

    {
      type: "title",
      text: "For Business Strategy Consulting Firms",
    },
    {
      type: "paragraph",
      text: "If you run a business strategy consulting firm, our back office services will fit your setup. These firms often deal with sensitive data, client briefs, and long reports. Our support helps with:",
    },
    {
      type: "list",
      items: [
        "Research and data checks",
        "Report formatting and updates",
        "Internal coordination support",
        "Case tracking and audit logs",
      ],
    },
    {
      type: "paragraph",
      text: "This helps you serve clients faster and with more focus. We work behind the scenes, but our impact is clear in your results.",
    },
    {
      type: "paragraph",
      text: "Our clients include many business strategy consulting firms that need trusted support. These firms turn to us when they want to grow without adding extra internal staff.",
    },

    {
      type: "title",
      text: "How Back Office Solutions Help You",
    },
    {
      type: "paragraph",
      text: "When you choose our services, you get more than a task team. You get a strong partner who understands your business needs. Our support helps you:",
    },
    {
      type: "list",
      items: [
        "Reduce manual work",
        "Improve data accuracy",
        "Speed up daily tasks",
        "Save time and costs",
        "Grow without stress",
      ],
    },
    {
      type: "paragraph",
      text: "You do not need to hire, train, or manage a large back office team. We do that for you. You only pay for what you use and scale as needed.",
    },

    {
      type: "title",
      text: "How We Work",
    },
    {
      type: "paragraph",
      text: "Our process is built for ease and speed. Once we know your needs, we build a custom support plan. Here is how it works.",
    },
    {
      type: "list",
      items: [
        "Scope discussion",
        "Plan setup",
        "Team assignment",
        "Start and support",
        "Ongoing checks",
      ],
    },
    {
      type: "paragraph",
      text: "If something needs to change, we adjust. You are always in control but not stuck in the small tasks.",
    },

    {
      type: "title",
      text: "Tools and Security",
    },
    {
      type: "paragraph",
      text: "We use trusted software and systems to handle your data. Every task follows clear steps. We also sign data safety agreements and use secure tools for file sharing. You can trust that your data stays safe with us.",
    },
    {
      type: "list",
      items: [
        "Excel",
        "Google Sheets",
        "CRM tools",
        "ERP systems",
        "Custom databases",
      ],
    },
    {
      type: "paragraph",
      text: "We use what you use. That way, the transition is smooth.",
    },

    {
      type: "title",
      text: "Back Office for Every Sector",
    },
    {
      type: "paragraph",
      text: "Our team works with firms in many fields. From retail and trading to service firms and consultants. Back office services apply to any company that needs clean records and steady support. Our current clients include:",
    },
    {
      type: "list",
      items: [
        "Retail stores",
        "Trading firms",
        "Business strategy consulting services",
        "Law firms",
        "Accounting companies",
        "Health providers",
        "Education bodies",
      ],
    },
    {
      type: "paragraph",
      text: "Whether you are a small company or a mid size firm, we fit in with your work style.",
    },

    {
      type: "title",
      text: "Business Growth Starts With Structure",
    },
    {
      type: "paragraph",
      text: "It is hard to grow when basic work is not in place. Missed orders, lost data, or slow replies cost time and clients. With our help, you build a strong structure.",
    },
    {
      type: "paragraph",
      text: "You also become ready to meet new demands. Whether it is new markets, more clients, or added services, your support system can handle it.",
    },

    {
      type: "title",
      text: "What Makes Us Different",
    },
    {
      type: "list",
      items: [
        "We work with you, not just for you",
        "We speak in simple terms, not confusing words",
        "We fix problems before they grow",
        "We do not add extra work for your team",
        "We keep things smooth, not just busy",
        "We bring in real help, not just hours billed",
      ],
    },

    {
      type: "title",
      text: "For Business Strategy Consulting Services",
    },
    {
      type: "paragraph",
      text: "Business strategy consulting services often deal with tight timelines. Reports, forecasts, and planning work need clear records. Our team supports these tasks with backend research, file management, and report checks.",
    },
    {
      type: "paragraph",
      text: "We also track versions, manage inputs, and format files as per your style. This makes your front end work faster and cleaner.",
    },
    {
      type: "paragraph",
      text: "Using our support, many business strategy consulting services have improved their response time, reduced mistakes, and scaled without hiring more in-house staff.",
    },

    {
      type: "title",
      text: "Let Us Manage the Backend While You Grow",
    },
    {
      type: "paragraph",
      text: "We take the load off your team. You get time to plan, serve, and grow. Our plans are flexible and made to suit your workflow.",
    },
    {
      type: "paragraph",
      text: "We are not here to control your system but to make it work better. We adjust to your tools, rules, and flow. That is how we ensure a smooth link with your team.",
    },
    {
      type: "paragraph",
      text: "Let us know what you need and we will take it from there.",
    },
    {
      type: "paragraph",
      text: "If your current process feels slow, complex, or just hard to manage, then our back office services can help. Do not wait for things to break. Fix them before they do. Work with a team that understands real business needs and provides strong and simple support.",
    },
    {
      type: "paragraph",
      text: "Contact Confiance today. Let our back office solutions bring speed and control to your business. Whether you are a retailer, a service firm, or one of the top business strategy consulting firms, we have the tools and skills to support you.",
    },

    {
      type: "title",
      text: "Main Back Office Offerings",
    },
    {
      type: "list",
      items: [
        "Market Survey & Research",
        "Purchase order processing",
        "Transaction processing & monitoring",
        "Data conversion and document digitization",
        "Documents indexing and Archiving to Data collection and processing",
        "Updating and maintaining the product catalog",
        "Email Management",
        "Quality Assurance",
        "Bookkeeping Services",
        "Accounting Services",
        "Financial Reporting and Analytics Services",
        "Business Strategy Consulting",
        "Back Office Solutions & Services",
        "IT Enabled Services",
      ],
    },
  ];

  return (
    <>
      <StartingHeaderImage
        imageSrc={backOfficeSolutionImage}
        title={"Back Office Solutions & Services"}
      />
      <section className="px-4 xl:px-20 py-10 space-y-4 bg-primary">
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-1 bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Back Office Solutions & Services
          </h2>
        </div>
        {backOfficeData.map((block, index) => {
          if (block.type === "title") {
            return (
              <div key={index} className="flex items-start gap-3 mt-6">
                <h2 className="text-2xl font-semibold">{block.text}</h2>
              </div>
            );
          }

          if (block.type === "subtitle") {
            return (
              <h3 key={index} className="text-xl font-semibold mt-4">
                {block.text}
              </h3>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={index} className="mt-2">
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc ml-6 space-y-2 mt-3">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </section>
    </>
  );
};

export default backOfficeSolutions;
