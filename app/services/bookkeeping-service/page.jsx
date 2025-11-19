import React from "react";
import StartingHeaderImage from "../../../components/StartingHeaderImage";
import bookkeepingServiceImage from "../../../public/Images/booking-service-image.jpg";

const bookkeepingService = () => {
  const BookkeepingServices = [
    {
      type: "title",
      text: "1. Accounts Payable Management",
    },
    {
      type: "list",
      items: [
        "Enter and approve bills fast",
        "Avoid missed due dates",
        "Track outgoing cash",
        "Get better terms with vendors",
      ],
    },

    {
      type: "title",
      text: "2. Accounts Receivable Management",
    },
    {
      type: "list",
      items: [
        "Track unpaid invoices",
        "Follow up with clients",
        "Cut past-due balances",
        "Keep your working capital strong",
      ],
    },

    {
      type: "title",
      text: "3. Bank and Credit Card Reconciliations",
    },
    {
      type: "list",
      items: [
        "Matching bank data to your books",
        "Spotting errors and fraud",
        "Fixing balance issues fast",
        "Giving you clear, real-time updates",
      ],
    },

    {
      type: "title",
      text: "4. Merchant Account Reconciliation",
    },
    {
      type: "list",
      items: [
        "Match sales to bank deposits",
        "Find chargebacks or missing funds",
        "Keep reports clear and full",
        "Make sure your numbers are right",
      ],
    },

    {
      type: "title",
      text: "5. Inventory Consulting Services",
    },
    {
      type: "list",
      items: [
        "Track what you have",
        "Set ideal stock levels",
        "Avoid lost sales and waste",
        "Improve how you order and store",
      ],
    },

    {
      type: "title",
      text: "6. Payroll Management",
    },
    {
      type: "list",
      items: [
        "Full payroll runs",
        "Filing payroll taxes",
        "Staff payments with direct deposit",
        "Reports and records for easy review",
      ],
    },

    {
      type: "title",
      text: "7. Tax Services",
    },
    {
      type: "paragraph",
      text: "Business taxes are complex. That’s why we provide expert tax preparation and filing services to make it simple.",
    },
    {
      type: "list",
      items: [
        "Handle tax filings",
        "Help you find ways to save",
        "Keep you in line with rules",
        "Give you full tax reports",
      ],
    },

    {
      type: "title",
      text: "8. CFO Services",
    },
    {
      type: "list",
      items: [
        "Setting a budget",
        "Tracking key numbers",
        "Helping you plan long term",
        "Giving advice for growth and change",
      ],
    },
  ];

  return (
    <>
      <StartingHeaderImage
        title={"Bookkeeping Services"}
        imageSrc={bookkeepingServiceImage}
      />
      <section className="px-4 xl:px-20 py-10 space-y-4 bg-primary">
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Online Bookkeeping Services for Businesses
          </h2>
        </div>
        <p>
          Managing money the right way matters for every business. At Confiance,
          we offer online bookkeeping services for all business types. Clients
          trust us because we are honest, skilled, and fair in cost. Our team
          helps you save money by cutting the need for full-time staff. You also
          gain from cloud tools that we help set up and use.
        </p>
        <p>
          We begin by learning what your business needs. Then we give you clear
          bookkeeping and accounting reports built just for you. These include
          detailed financial statements that give you a full view of your
          business’s health. You also get tips and support on a regular basis.
          Our trained staff follows strong rules and keeps your records clean
          and on time. We work with small firms, CPAs, and accounting teams. To
          stay accurate, we use tested checks at each step.
        </p>
        {/* -----------------------------------------------------------------*/}
        <div className="bg-secondary-navbar p-5 space-y-4">
          <div className="flex items-start gap-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-2xl font-semibold mt-1">
              How Do Virtual Bookkeeping Services Work?
            </h2>
          </div>
          <p>
            Virtual bookkeeping uses cloud tools to track and manage your money.
            It lets you send the work to trained bookkeepers. You don’t need to
            hire staff in-house. Instead, you trust an online expert to manage
            your books.
          </p>
          <p>Our virtual bookkeeping services include:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Real-time data entry to keep records fresh</li>
            <li>Safe file storage to guard your data</li>
            <li>Auto-made reports for quick views</li>
            <li>Less admin work and more accuracy</li>
          </ul>
          <p>
            These services handle all basic accounting and bookkeeping work.
            Your records stay clear and up to date.
          </p>
          {/* ---------------------------------------------------------- */}
          <div className="flex items-start gap-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-2xl font-semibold mt-1">
              Why Choose Online Bookkeeping Services?
            </h2>
          </div>

          <p>1. Lower Costs</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Online bookkeeping cuts costs by removing the need for staff,
              office space, or extra tools. You get expert help at a much lower
              price.
            </li>
          </ul>
          <p>2. Easy to Scale</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              As your business grows, your books get more complex. Virtual
              services grow with you. You can ask for more reports or extra
              support as needed.
            </li>
          </ul>
          <p>3. More Accuracy</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Cloud tools and auto updates reduce mistakes. Your records stay
              clean and current, so you can make smart choices.
            </li>
          </ul>
          <p>4. Save Time</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              Doing your own books takes time. Online help lets you focus on
              running your business while we handle the numbers.
            </li>
          </ul>
          <div className="flex items-start gap-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-2xl font-semibold mt-1">
              Process of Our Remote Bookkeeping Services
            </h2>
          </div>

          <p>1. System Setup</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              We link to your current software or set up one that fits your
              business.
            </li>
          </ul>
          <p>2. Real-Time Entry</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              We log each transaction as it happens to keep your records up to
              date.
            </li>
          </ul>
          <p>3. Reports</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              View clear reports at any time to see how your business is doing.
            </li>
          </ul>
          <p>4. Tax and Rule Checks</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              We help you follow tax laws and stay on track with legal rules.
            </li>
          </ul>
          <p>
            This also includes preparing accurate tax returns so you never miss
            a filing deadline. You can check your books from any place, at any
            time. Even on the go, you stay up to date with your numbers.
          </p>
        </div>

        {/* --------------------------------------------------------- */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Online Bookkeeping Services at Confiance
          </h2>
        </div>
        <p>
          At Confiance, we offer full online bookkeeping for small business
          owners, large firms, retail chains, and solo pros. Our goal is to keep
          your books clean, up to date, and easy to understand.
        </p>
        {BookkeepingServices.map((block, index) => {
          if (block.type === "title") {
            return (
              <div key={index} className="space-y-3">
                <div className="flex items-start gap-3">
                  <h2 className="text-2xl font-semibold">{block.text}</h2>
                </div>
              </div>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={index} className="leading-relaxed text-gray-800">
                {block.text}
              </p>
            );
          }

          if (block.type === "list") {
            return (
              <ul
                key={index}
                className="list-disc ml-7 space-y-1 text-gray-800"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}

        {/* ------------------------------------------------------------------- */}
        <div className="flex items-start gap-3 my-5">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            How Virtual Bookkeeping Helps Small Businesses
          </h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="space-y-2 shadow-3xl px-3 py-3 rounded cursor-pointer">
            <h1 className="text-xl font-semibold">Low Cost Expert Help</h1>
            <p>
              You get skilled bookkeeping without adding full time staff. This
              lets you use your money and time where it matters most.
            </p>
          </div>
          <div className="space-y-2 shadow-3xl px-3 py-3 rounded">
            <h1 className="text-xl font-semibold">
              Real Time Financial Access
            </h1>
            <p>
              Check your books with online tools any time you need. View
              reports, track cash, and make smart choices without delays.
            </p>
          </div>
          <div className="space-y-2 shadow-3xl px-3 py-3 rounded">
            <h1 className="text-xl font-semibold">
              More Time for Your Business
            </h1>
            <p>
              You do not need to chase receipts or fix account errors. We handle
              your books, so you can focus on service, sales, and growing your
              business.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Benefits of Outsourcing Bookkeeping
          </h2>
        </div>
        <p>
          Outsourcing bookkeeping takes pressure off your team and keeps costs
          low. Instead of hiring a full-time bookkeeper, you get access to
          trained professionals when you need them. This means:
        </p>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>No staff overhead or training costs</li>
          <li>Flexible support that adjusts to your business needs</li>
          <li>Access to the latest tools without extra expense</li>
          <li>More time to focus on running and growing your business</li>
        </ul>
        <p>
          When you outsource bookkeeping, you gain accuracy, speed, and the
          peace of mind that your books are always in order.
        </p>
        {/* ------------------------------------------------------ */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Traditional Bookkeeping vs Virtual Bookkeeping
          </h2>
        </div>
        <p>
          Traditional bookkeeping uses paper records, manual entry, and office
          staff. It takes more time, increases errors, and adds extra admin
          work. Getting reports is slow, and access to data is limited.
        </p>
        <p>
          Virtual bookkeeping uses cloud tools to do the work. It gives
          real-time data, lowers errors, cuts paper use, and links with other
          systems. It saves time and gives you more control.
        </p>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-3 font-semibold text-lg">
                  Traditional Bookkeeping
                </th>
                <th className="border px-4 py-3 font-semibold text-lg">
                  Virtual Bookkeeping
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3">Manual and time-consuming</td>
                <td className="border px-4 py-3">Automated and real-time</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-4 py-3">Limited to office hours</td>
                <td className="border px-4 py-3">
                  Available anytime, anywhere
                </td>
              </tr>

              <tr>
                <td className="border px-4 py-3">
                  Requires physical documents
                </td>
                <td className="border px-4 py-3">Paperless and cloud-based</td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-4 py-3">
                  Higher due to in-house team
                </td>
                <td className="border px-4 py-3">Cost-effective outsourcing</td>
              </tr>

              <tr>
                <td className="border px-4 py-3">Limited growth flexibility</td>
                <td className="border px-4 py-3">
                  Easily scalable for business needs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Remote bookkeeping services are affordable, flexible, and efficient.
          That’s why many modern businesses outsource bookkeeping services. It
          helps cut costs and removes the need to hire full-time staff.
        </p>
        {/* ------------------------------------------------------------------- */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Industry-Specific Bookkeeping Solutions
          </h2>
        </div>
        <p>
          Every business is different, and bookkeeping should reflect that. Our
          team has experience working with:
        </p>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>Retail businesses that need inventory and sales tracking</li>
          <li>
            Service providers that need client invoicing and project-based
            reports
          </li>
          <li>
            eCommerce stores with merchant reconciliations and online payments
          </li>
          <li>
            Real estate businesses that handle multiple properties and leases
          </li>
        </ul>
        <p>
          By tailoring reports and processes, we give you clear financial
          statements that match your industry needs.
        </p>
        {/* --------------------------------------------------- */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            How to Transition from Traditional to Online Bookkeeping?
          </h2>
        </div>
        <p>
          Switching to online bookkeeping can seem hard, but we make it simple.
          Here&apos;s how we guide you through each step:
        </p>
        <h1 className="text-2xl font-semibold">Step 1: Initial Consultation</h1>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>
            We begin by understanding your current accounting setup, goals, and
            pain points. We then create a custom plan that addresses your
            specific needs.
          </li>
        </ul>
        <h1 className="text-2xl font-semibold">Step 2: Integration & Setup</h1>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>
            Our team will integrate with your existing accounting software,
            ensuring everything is configured correctly for a smooth transition.
          </li>
        </ul>
        <h1 className="text-2xl font-semibold">Step 3: Data Migration</h1>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>
            We ensure that all of your financial data is securely transferred to
            the cloud-based system. This allows you to access your financial
            information instantly.
          </li>
        </ul>
        <h1 className="text-2xl font-semibold">Step 4: Ongoing Support</h1>
        <ul className="list-disc ml-7 space-y-1 text-gray-800">
          <li>
            Once you&apos;re up and running, we provide ongoing support to
            ensure that your bookkeeping needs are continuously met. Whether you
            need additional reports or adjustments, we&apos;re here to help.
          </li>
        </ul>
        {/* ----------------------------------------------------------- */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Get Started Today with Our Virtual Bookkeeping Services
          </h2>
        </div>
        <p>
          Ready to take control of your business&apos;s finances? Contact us now
          to schedule a free consultation. Learn how our virtual bookkeeping
          services can save you time, reduce costs, and improve accuracy. Above
          all, our services give you lasting peace of mind, knowing your
          finances are managed by experts. Whether you&apos;re new to online
          bookkeeping or switching from traditional methods, we ensure a smooth
          and easy transition.
        </p>
      </section>
    </>
  );
};

export default bookkeepingService;
