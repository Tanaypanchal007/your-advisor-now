import StartingHeaderImage from "@/components/StartingHeaderImage";
import React from "react";
import whyUsImage from "../../../public/Images/why-us.jpg";
import Image from "next/image";
import whyChooseUs from "../../../public/Images/illustration/why-choose-us.svg";

import { PiChartLineUpLight, PiUserFocusLight } from "react-icons/pi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

const WhyUs = () => {
  const whyUsData = [
    {
      id: 1,
      icon: <PiChartLineUpLight />,
      title: "Triumph your Business Aspirations",
      desc: "Timely, reliable, and accurate financial reports result in various strategic decisions to achieve your business goals.",
    },
    {
      id: 2,
      icon: <PiUserFocusLight />,
      title: "Focus on Core Business",
      desc: "Accurate accounting increases trust and helps streamline overall business operations.",
    },
    {
      id: 3,
      icon: <FaHandHoldingUsd />,
      title: "Cost Savings",
      desc: "We provide expert financial guidance to help your business make smarter financial decisions.",
    },
    {
      id: 4,
      icon: <FiUsers />,
      title: "Qualified and Professional Staff",
      desc: "Your business data is handled securely with complete privacy and industry-standard protection.",
    },
    {
      id: 5,
      icon: <MdGroups />,
      title: "Free up yourself from Employee Management",
      desc: "Our team is always available to support your financial needs and queries.",
    },
    {
      id: 6,
      icon: <IoMdTimer />,
      title: "Scalable Operations",
      desc: "Our team is always available to support your financial needs and queries.",
    },
  ];

  return (
    <>
      <StartingHeaderImage imageSrc={whyUsImage} title="Why Us?" />

      {/* MAIN SECTION */}
      <section className="min-h-screen bg-bg-primary flex justify-center items-center flex-col  py-10">
        <div className="max-w-6xl w-full flex flex-col gap-10 px-2">
          {/* TOP CONTENT ROW */}
          <div className="flex flex-col xl:flex-row justify-center items-center gap-10">
            {/* LEFT TEXT */}
            <div className="w-full xl:w-1/2 flex flex-col gap-3 text-secondary">
              <h1 className="text-3xl font-semibold">Your Advisor Now</h1>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat, excepturi. Odio a reiciendis quae sit, eius, eveniet,
                quis voluptatem itaque tempora sapiente distinctio optio.
                Temporibus, quisquam inventore perferendis architecto voluptatem
                modi pariatur expedita nemo facere, ipsum, consequatur quae
                dolorem consectetur eos cumque itaque? Vero atque omnis eligendi
                nobis delectus ex ipsum eius ratione, distinctio accusamus! Sed
                eum ipsum enim dolore. Hic nostrum voluptatibus itaque est eos!
                Dolorum provident animi at ipsum illum totam in consequuntur?
                Perferendis quaerat velit illo molestiae maiores mollitia
                aliquid nisi, numquam consequatur nostrum earum natus laborum!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                possimus distinctio libero quia sit beatae suscipit corporis
                praesentium! Suscipit assumenda, necessitatibus inventore
                veritatis facere, non porro provident deserunt incidunt corrupti
                iure impedit ex fugiat et nam quasi.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full hidden  xl:w-1/2 xl:flex justify-center">
              <Image
                src={whyChooseUs}
                width={100}
                height={100}
                alt="Why Choose Us"
                className="w-[70%] h-auto object-contain"
              />
            </div>
          </div>

          {/* BOTTOM PARAGRAPH */}
          <p className="text-secondary leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eligendi aut vel consequatur voluptatibus reiciendis
            accusantium ratione quasi explicabo architecto quidem! Ipsam ipsum,
            doloremque veniam et dicta harum sed qui. A laboriosam
            necessitatibus tenetur animi ut totam. Quis, ab sint? Quibusdam
            doloremque cupiditate voluptate totam debitis quo commodi animi
            iure. Totam suscipit ipsum quisquam ullam ab rem tempore ut, ipsa
            modi nam quis eos dolorum rerum necessitatibus perferendis iste.
            Consequuntur eveniet placeat, ea, incidunt provident facilis
            corrupti, autem mollitia praesentium fuga quod doloribus pariatur
            quibusdam illo culpa ad ducimus itaque! Explicabo iure ad accusamus
            ab cupiditate voluptatem facere optio aliquam.
          </p>
        </div>

        {/* Service card container */}

        <div className="w-full bg-primary mt-14 py-12 rounded-lg  px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {whyUsData.map((item) => (
              <div
                key={item.id}
                className=" shadow-3xl rounded-lg p-6 text-center xl:hover:scale-105 cursor-pointer transition-all"
              >
                <div className="flex justify-center text-secondary text-5xl mb-4">
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
      </section>
    </>
  );
};

export default WhyUs;
