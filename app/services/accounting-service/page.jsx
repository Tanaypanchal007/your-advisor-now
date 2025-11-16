import StartingHeaderImage from "../../../components/StartingHeaderImage";
import React from "react";
import accountingImage from "../../../public/Images/accounting-service.jpg";

const AccountingServices = () => {
  return (
    <>
      <StartingHeaderImage
        title="Accounting Services"
        imageSrc={accountingImage}
      />
      <section className="px-4 xl:px-20 py-10 space-y-7 bg-primary">
        {/* ================================
          1. HEADING
      ================================= */}
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
          <h2 className="text-2xl font-semibold mt-1">Accounting Services</h2>
        </div>

        {/* ================================
          2. INTRO PARAGRAPHS
      ================================= */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Running a business takes time and effort. You already manage your
            team, serve your clients, and plan for growth. Adding accounting to
            that list can feel like too much. That is where Confiance can help.
            We offer trusted outsourced accounting services that are built to
            support your business every step of the way.
          </p>

          <p>
            Our outsourced accounting solutions are tailored to match your daily
            needs and long-term goals. We help small and medium businesses
            across the country with day-to-day accounting and bookkeeping needs.
          </p>

          <p>
            Our team keeps your records clean, your books current, and your
            reports easy to understand. With our accounting services in the USA,
            you no longer need to worry about errors, missed deadlines, or
            falling behind.
          </p>
        </div>

        {/* ================================
          3. WHY OUTSOURCE SECTION
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Why Outsource Accounting Services
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Trying to handle accounting on your own can be hard. As your
            business grows, the tasks get more complex. Tax laws change,
            reporting rules shift, and staying compliant takes time and skill.
            Outsourcing accounting services helps reduce stress and saves time.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3">
            Here are clear reasons why many small business owners choose to
            outsource:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Save time by avoiding manual entries and paperwork</li>
            <li>Stay compliant with the latest rules and tax laws</li>
            <li>Avoid hiring and training costs of full-time staff</li>
            <li>Gain access to experienced professional accountants</li>
            <li>Improve accuracy and reduce financial risks</li>
          </ul>
        </div>

        {/* ================================
          4. OUR ACCOUNTING SERVICES
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Our Accounting Services
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Confiance provides comprehensive accounting services designed to
            make your financial management simple, accurate, and stress-free.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Accounts payable and receivable management</li>
            <li>Bank and credit card reconciliation</li>
            <li>General ledger maintenance</li>
            <li>Daily, weekly, and monthly reporting</li>
          </ul>
        </div>

        {/* ================================
          5. MONTH-END / YEAR-END CLOSE
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Month End and Year End Close
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            We ensure your books are completely accurate at month-end and
            year-end.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Prepayments</li>
            <li>Accrual entries</li>
            <li>Deferred income</li>
            <li>Depreciation</li>
          </ul>
        </div>

        {/* ================================
          6. PROJECT & COST ACCOUNTING
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Project and Cost Accounting
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We track all your project expenses and income accurately to help you
            understand profitability better.
          </p>
        </div>

        {/* ================================
          7. GENERAL LEDGER CLEANUP
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              General Ledger Review & Cleanup
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We ensure your general ledger has no errors and all entries are
            correct and properly categorized.
          </p>
        </div>

        {/* ================================
          8. FRAUD TRACKING
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Fixed Asset Tracking</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We keep a full list of your business assets. This includes
            purchases, current value, and disposal. We handle depreciation and
            help keep records accurate.
          </p>
        </div>

        {/* ================================
          9. US GAAP COMPLIANCE
      ================================= */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">US GAAP Compliance</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We ensure your reports meet the industry-standard US GAAP
            requirements.
          </p>
        </div>
        {/* ---------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              System Setup and Support
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We help set up your accounting system if you are starting from
            scratch or moving from another tool. We ensure it works smoothly
            from day one.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Add On Services</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            In addition to core services, we offer other support options for
            small businesses:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Budget tracking and review</li>
            <li>Cash flow planning</li>
            <li>Payroll services</li>
            <li>Tax filing</li>
            <li>Tax return</li>
            <li>Accounts Advisory services</li>
            <li>Business tax preparation services</li>
            <li>Internal review and control systems</li>
            <li>Custom reports and dashboards</li>
          </ul>
        </div>

        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Industries We Serve</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            We work with clients from many fields and sizes. Our accounting
            services in USA are tailored for your industry. Some of the areas we
            support include:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Real estate and property</li>
            <li>Retail and online stores</li>
            <li>Professional services</li>
            <li>Clinics and private practices</li>
            <li>Nonprofits</li>
            <li>Technology companies</li>
            <li>Food and beverage businesses</li>
          </ul>
        </div>

        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Why Choose Confiance</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We are not just an accounting firm. We are your long term partner in
            business. At Confiance, we care about your success and work hard to
            offer reliable financial support at every step.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Experienced Team</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Our team has worked in the USA, UK, Canada, Australia, and the
            Middle East. We bring a wide view with deep local knowledge.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Full Support All Year
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We support you through every season, not just during tax time. You
            can contact us any time with questions or requests.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Simple Reports</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            You get reports that are easy to read. We skip confusing terms and
            show you what matters.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Clear Pricing</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We offer fixed plans so you always know your costs. No surprise fees
            or extra charges. These fixed plans are designed to provide
            affordable accounting services without cutting corners
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Safe and Secure</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We use trusted cloud systems and strong data safety rules. Your
            business data is always protected.
          </p>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Who We Help</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            We focus on accounting services for small business. Our clients are
            owners who want less stress and more time to grow. We work with
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Solo founders and startups</li>
            <li>Small firms with a few team members</li>
            <li>Growing companies that need more support</li>
            <li>
              Businesses looking to reduce costs by using outsourced accounting
              services
            </li>
            <li>
              Accounting teams who offer accounting and bookkeeping services
            </li>
          </ul>
        </div>
        {/* Setp by step */}
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Step by Step Support</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We make it easy to get started with us. Our process is simple and
            built to help you quickly.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Step 1: Discovery</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We learn about your business, current tools, and pain points. We
            talk through your needs and goals.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Step 2: Setup</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We help move your records into a new or existing system. We build a
            clear plan based on your business type
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Step 3: Ongoing Help</h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Each month, we manage your books and keep you on track. You get
            regular updates, reports, and advice.
          </p>
        </div>
        {/* --------------------- */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Step 4: Review and Improve
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We check your numbers each quarter and suggest ways to cut waste or
            boost profits.
          </p>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Common Mistakes Solved by Outsourcing
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Many businesses come to us after dealing with these common issues.
            We help fix them fast:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Late tax filings that lead to penalties</li>
            <li>Unreconciled bank accounts causing report errors</li>
            <li>Inconsistent expense tracking that confuses cash flow</li>
            <li>Missed deductions that raise your tax bil</li>
          </ul>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              How We Support Business Growth
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            As your revenue grows, your accounting needs grow too. We help you
            scale without stress:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Adjust tax planning based on your growth</li>
            <li>Keep clean records for loans or investors</li>
            <li>Build forecasts to guide your next move</li>
            <li>Add support without adding headcount</li>
          </ul>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              How We Support Business Growth
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            As your revenue grows, your accounting needs grow too. We help you
            scale without stress:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Adjust tax planning based on your growth</li>
            <li>Keep clean records for loans or investors</li>
            <li>Build forecasts to guide your next move</li>
            <li>Add support without adding headcount</li>
          </ul>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">Tools We Use</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            We work with many top software tools, including:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>QuickBooks</li>
            <li>Xero</li>
            <li>NetSuite</li>
            <li>Sage</li>
            <li>Zoho Books</li>
            <li>FreshBooks</li>
          </ul>
        </div>
        {/* ------------------------------ */}
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
            <h2 className="text-xl font-semibold mt-1">
              Flexible Plans to Fit Your Needs
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-3">
            Your business changes over time. We offer flexible plans that grow
            with you. Our outsourced accounting services are built to adjust as
            you grow.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            We work with many top software tools, including:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              New business: We help set up books, systems, and first reports
            </li>
            <li>
              Growing firm: We help track cash, manage payroll, and meet tax
              needs
            </li>
            <li>
              Mature business: We provide deep insights, reports, and review
              strategies
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default AccountingServices;
