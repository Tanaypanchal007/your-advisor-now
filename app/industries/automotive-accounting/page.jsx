import React from "react";
import StartingHeaderImage from "../../../components/StartingHeaderImage";
import automotiveAccountingImage from "../../../public/Images/automotive-accounting-image.jpg";

const Page = () => {
  const automotiveAccountingData = [
    // -------------------------------------------
    // INTRO SECTION
    // -------------------------------------------
    {
      type: "title",
      text: "Bookkeeping and Reports",
    },
    {
      type: "paragraph",
      text: "Every auto business needs good records. Accountants note sales, buys, costs, and payments. They also make reports like balance sheets, profit and loss, and cash flow.",
    },
    {
      type: "paragraph",
      text: "These papers show where your business stands. They guide your next steps like spending, saving, or changing plans.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Payroll",
    },
    {
      type: "paragraph",
      text: "Auto firms use mixed pay plans. Mechanics may earn by the hour plus bonuses. Sales staff may earn part pay, part bonus. This takes care and skill.",
    },
    {
      type: "paragraph",
      text: "Outsourcing payroll helps with on-time pay and tax work. It also handles benefits and tax forms.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Stock and Cost Tracking",
    },
    {
      type: "paragraph",
      text: "Shops and dealers hold stock that moves fast. This means cars, parts, oils, and tools. You must track buys, sales, returns, and junk.",
    },
    {
      type: "paragraph",
      text: "Accounting services for automotive industry use tools to watch stock and cost. This helps with pricing and shows issues early.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Tax and Rule Filings",
    },
    {
      type: "paragraph",
      text: "Tax laws change with place. Some states tax work and parts differently. If you miss the right rate, you may pay fines.",
    },
    {
      type: "paragraph",
      text: "Auto accountants know the rules and file your returns on time. They also do payroll taxes, license checks, and other rule tasks.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Bank Checks and Credit Work",
    },
    {
      type: "paragraph",
      text: "Bank checks make sure your books match your bank. This step finds errors or missed notes.",
    },
    {
      type: "paragraph",
      text: "Pros also track car loans and interest. Dealers who give loans need clear credit info.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Warranty and Claim Work",
    },
    {
      type: "paragraph",
      text: "Warranty jobs often lead to late pay from makers. Some pay is less due to mistakes or rejections.",
    },
    {
      type: "paragraph",
      text: "A good team checks each claim, notes it right, and follows up. They also fix chargebacks and cuts.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Planning and Forecasts",
    },
    {
      type: "paragraph",
      text: "You must plan to grow. Accountants help set budgets using past data and known trends.",
    },
    {
      type: "paragraph",
      text: "Use these plans to hire, buy gear, or add new work. This keeps your money steady.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Vehicle Sales Profitability Tracking",
    },
    {
      type: "paragraph",
      text: "Understanding where your profit comes from is key to staying competitive. This helps measure income per sale, adjust prices, and plan stock purchases.",
    },
    {
      type: "paragraph",
      text: "It includes costs like reconditioning, warranties, finance fees, and commissions.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Usual Issues in Auto Accounting",
    },
    {
      type: "list",
      items: [
        "Fast stock changes",
        "Mixed pay styles",
        "Client loan records",
        "Warranty jobs and chargebacks",
        "Books split by shop",
        "Unmatched bank records",
        "Tax filing delays",
        "Vendor payment errors",
      ],
    },
    {
      type: "paragraph",
      text: "With automotive accounting services, strong systems make these issues rare and easy to fix.",
    },

    // -------------------------------------------
    {
      type: "paragraph",
      text: "Our team breaks down each sale to show profits, hidden costs, and better strategies.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Automotive Accounting Services by Confiance",
    },
    {
      type: "paragraph",
      text: "We offer full services for dealers, repair shops, parts sellers, and rentals.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "What We Do for Automotive Clients",
    },
    {
      type: "subtitle",
      text: "Bookkeeping and Reports",
    },
    {
      type: "paragraph",
      text: "We track daily income and costs, cleanup year-end books, and prepare monthly custom reports.",
    },

    {
      type: "subtitle",
      text: "Payroll",
    },
    {
      type: "paragraph",
      text: "We handle pay, bonuses, deductions, and staff records for hourly and commission workers.",
    },

    {
      type: "subtitle",
      text: "Stock and Parts",
    },
    {
      type: "paragraph",
      text: "We watch stock across all areas, check costs, and help reduce waste.",
    },

    {
      type: "subtitle",
      text: "Loan and Car Finance",
    },
    {
      type: "paragraph",
      text: "We track loans, floor plans, and interest to help manage finance operations.",
    },

    {
      type: "subtitle",
      text: "Sales Tax",
    },
    {
      type: "paragraph",
      text: "We collect and file the correct tax based on local and state rules.",
    },

    {
      type: "subtitle",
      text: "Warranty Tracking",
    },
    {
      type: "paragraph",
      text: "We track claims, reduce delays, and improve payout success.",
    },

    {
      type: "subtitle",
      text: "Bills and Invoices",
    },
    {
      type: "paragraph",
      text: "We manage payables and receivables to reduce errors and late fees.",
    },

    {
      type: "subtitle",
      text: "Tax Ready Reports",
    },
    {
      type: "paragraph",
      text: "We prepare clean reports for tax filing and reduce last-minute stress.",
    },

    {
      type: "subtitle",
      text: "Budgets and Dashboards",
    },
    {
      type: "paragraph",
      text: "We create budgets and dashboards that show trends clearly.",
    },

    {
      type: "subtitle",
      text: "Support Team",
    },
    {
      type: "paragraph",
      text: "You get a dedicated support team with fast replies and proper updates.",
    },

    // -------------------------------------------
    {
      type: "paragraph",
      text: "Outsource automotive accounting to Confiance and focus on real growth.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Types of Auto Businesses That Need Accounting Help",
    },
    {
      type: "list",
      items: [
        "Car Dealers",
        "Repair Shops",
        "Parts Stores",
        "Car Rentals",
        "Tow Firms",
      ],
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Perks of Using Automotive Accounting Services",
    },
    {
      type: "list",
      items: [
        "Clear books that reduce errors",
        "Quick reports for planning",
        "Tax help that prevents fines",
        "Cost tracking that saves money",
        "Time saved for staff and owners",
        "Strong audit trails",
        "Reliable payroll",
        "Rule and tax law compliance",
      ],
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Tools Used in Automotive Accounting",
    },
    {
      type: "paragraph",
      text: "Accountants use tools like QuickBooks, Xero, and dealer systems to sync sales, stock, and payments.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Why You Should Outsource Automotive Accounting",
    },
    {
      type: "list",
      items: [
        "Lower cost than hiring in-house",
        "Auto-trained professionals",
        "Flexible plans",
        "Clean records and reports",
        "More time for real work",
      ],
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Custom Plans by Business Size",
    },
    {
      type: "paragraph",
      text: "Small shops need monthly books, while big dealers need full-scale help. Plans are built to fit your needs.",
    },

    // -------------------------------------------
    {
      type: "title",
      text: "Month-End and Year-End Help",
    },
    {
      type: "paragraph",
      text: "We close books monthly, prevent audit issues, and prepare year-end statements smoothly.",
    },
    {
      type: "paragraph",
      text: "Outsource automotive accounting to Confiance today and grow your business with confidence.",
    },
  ];

  return (
    <>
      <StartingHeaderImage
        title="Auto Store Accounting"
        imageSrc={automotiveAccountingImage}
      />
      <section className="px-4 xl:px-20 py-10 space-y-4 bg-primary">
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">
            Automotive Accounting Services
          </h2>
        </div>
        <p>
          Running an automotive business takes more than selling cars or fixing
          engines. Behind the scenes, clean books, steady reports, and tax
          records keep the work smooth. Automotive accounting services help
          owners manage money, track stock, run payroll, and follow tax rules.
        </p>
        <p>
          Running an automotive business takes more than selling cars or fixing
          engines. Behind the scenes, clean books, steady reports, and tax
          records keep the work smooth. Automotive accounting services help
          owners manage money, track stock, run payroll, and follow tax rules.
        </p>
        {/* ------------------------------------------------------------- */}

        <div className="flex items-start gap-3">
          <h2 className="text-2xl font-semibold mt-1">
            How Automotive Accounting differs from General Accounting
          </h2>
        </div>
        <p>
          Running an automotive business takes more than selling cars or fixing
          engines. Behind the scenes, clean books, steady reports, and tax
          records keep the work smooth. Automotive accounting services help
          owners manage money, track stock, run payroll, and follow tax rules.
        </p>
        <p>
          Running an automotive business takes more than selling cars or fixing
          engines. Behind the scenes, clean books, steady reports, and tax
          records keep the work smooth. Automotive accounting services help
          owners manage money, track stock, run payroll, and follow tax rules.
        </p>
        {/* ------------------------------------------------------------- */}

        {automotiveAccountingData.map((block, index) => (
          <div key={index}>
            {/* MAIN TITLE */}
            {block.type === "title" && (
              <div className="flex items-start gap-3 mt-6">
                <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
                <h2 className="text-2xl font-semibold">{block.text}</h2>
              </div>
            )}

            {/* SUBTITLE */}
            {block.type === "subtitle" && (
              <h3 className="text-xl font-semibold mt-4">{block.text}</h3>
            )}

            {/* PARAGRAPH */}
            {block.type === "paragraph" && (
              <p className="text-secondary mt-2 leading-relaxed">
                {block.text}
              </p>
            )}

            {/* LIST */}
            {block.type === "list" && (
              <ul className="list-disc ml-8 mt-2 space-y-1 text-secondary">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Page;
