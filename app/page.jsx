import Image from "next/image";
import aboutImg from "../public/Images/illustration/why-choose-us.svg";
import { PiChartLineUpLight, PiUserFocusLight } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

import { CgFileDocument } from "react-icons/cg";
import { PiBagSimple } from "react-icons/pi";
import { SiMicrostrategy } from "react-icons/si";
import Facts from "./facts/page";
import { FaRegUser } from "react-icons/fa";
import Counter from "../components/Counter";
import IndustriesTabsHomePage from "../components/IndustriesTabsHomePage";

export default function Home() {
  const whyUsData = [
    {
      id: 1,
      icon: <CgFileDocument />,
      title: "Bookkeeping Services",
      desc: "Confiance provides comprehensive Bookkeeping services that help you realize your goals. Our aim is to…",
    },
    {
      id: 2,
      icon: <PiBagSimple />,
      title: "Accounting Services",
      desc: "Accounting in the modern world mandates the need to maintain up-to-date, accurate financial information. It…",
    },
    {
      id: 3,
      icon: <PiChartLineUpLight />,
      title: "Financial Reporting and Analytics Services",
      desc: "At Confiance, we have an enviable and impeccable track record of delivering financial reporting services…",
    },
    {
      id: 4,
      icon: <SiMicrostrategy />,
      title: "Business Strategy Consulting",
      desc: "Today’s dynamic business environment advocates the use of ingenious business strategy consulting practices to quickly",
    },
    {
      id: 5,
      icon: <MdGroups />,
      title: "Back Office Solutions & Services",
      desc: "We provide you with timely and competent back office solutions that will revolutionize the way…",
    },
    {
      id: 6,
      icon: <IoMdTimer />,
      title: "IT Enabled Services",
      desc: "Our team is always available to support your financial needs and queries.",
    },
  ];

  return (
    <>
      <section className="bg-bg-primary py-16">
        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col xl:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full xl:w-1/2 flex justify-center">
            <Image
              src={aboutImg}
              alt="About Illustration"
              width={400}
              height={400}
              className="w-[70%] h-auto object-contain"
            />
          </div>

          {/* Right Text */}
          <div className="w-full xl:w-1/2 flex flex-col gap-4 text-secondary">
            {/* Title */}
            <div className="flex items-start gap-3">
              <span className="h-[35px] w-1 bg-secondary inline-block"></span>
              <h2 className="text-2xl font-semibold">About YourAdvisorNow</h2>
            </div>

            {/* Paragraph */}
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, est aut. Molestias temporibus velit quae fuga, cum
              ratione quas cupiditate recusandae nobis cumque ea debitis
              suscipit beatae natus voluptatibus, perferendis saepe asperiores
              quis, nisi incidunt iste at! Excepturi necessitatibus dolores vero
              exercitationem quia, qui soluta dolore odio aliquid dolor itaque
              voluptate earum amet nisi alias laboriosam nesciunt, atque,
              eveniet quo? Voluptates ullam fugiat tempora maiores, modi, autem
              impedit non laborum pariatur odit laudantium ducimus magni quos
              culpa nihil aliquid. Adipisci a earum non architecto consequatur
              nobis culpa sint neque omnis?
            </p>
          </div>
        </div>

        {/* --------------------- Service Section ------------------------ */}
        <div className="mt-16 text-center">
          <h1 className="text-2xl font-bold inline-block relative text-secondary">
            Our Services
            <span className="block h-0.5 w-12 bg-secondary mx-auto mt-1"></span>
          </h1>
        </div>

        <div className="w-full py-12 rounded-lg  px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {whyUsData.map((item) => (
              <div
                key={item.id}
                className=" shadow-3xl rounded-lg px-6 py-4  xl:hover:scale-105 cursor-pointer transition-all"
              >
                <div className="flex text-secondary text-5xl mb-4">
                  {item.icon}
                </div>

                <h1 className="text-lg font-semibold text-secondary mb-2">
                  {item.title}
                </h1>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --------------------- Industries Section start ------------------------ */}

        <IndustriesTabsHomePage />

        {/* --------------------- Facts Section start ------------------------ */}

        <section
          className="py-10 px-6  bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/Images/facts-home.jpg')",
          }}
        >
          <div className=" text-center mb-10 ">
            <h1 className="text-2xl font-bold inline-block relative text-white">
              Our Services
              <span className="block h-0.5 w-12 bg-white mx-auto mt-1"></span>
            </h1>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 text-center text-white">
            {/* FACT 1 */}
            <div className="flex flex-col items-center gap-2">
              <FaRegUser className="text-4xl" />
              <h1 className="text-4xl font-bold">
                <Counter end={10} />
              </h1>
              <p className="text-lg">Clients</p>
            </div>

            {/* FACT 2 */}
            <div className="flex flex-col items-center gap-2">
              <FaRegUser className="text-4xl" />
              <h1 className="text-4xl font-bold">
                <Counter end={1000} />
              </h1>
              <p className="text-lg"> +/year Business Tax Returns Processed</p>
            </div>

            {/* FACT 3 */}
            <div className="flex flex-col items-center gap-2">
              <FaRegUser className="text-4xl" />
              <h1 className="text-4xl font-bold">
                <Counter end={1700} />
              </h1>
              <p className="text-lg">+/year Individual Tax Returns Processed</p>
            </div>

            {/* FACT 4 */}
            <div className="flex flex-col items-center gap-2">
              <FaRegUser className="text-4xl" />
              <h1 className="text-4xl font-bold">
                <Counter end={30} />
              </h1>
              <p className="text-lg">Lakh/year Transactions Processed</p>
            </div>

            {/* FACT 4 */}
            <div className="flex flex-col items-center gap-2">
              <FaRegUser className="text-4xl" />
              <h1 className="text-4xl font-bold">
                <Counter end={99} />
              </h1>
              <p className="text-lg">Client retention</p>
            </div>
          </div>
        </section>

        {/* --------------------- Facts Section End ------------------------ */}
      </section>
    </>
  );
}
