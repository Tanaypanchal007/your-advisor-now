import StartingHeaderImage from "../../../components/StartingHeaderImage";

import React from "react";
import Image from "next/image";
import img from "../../../public/Images/footer-img.jpg";
import sendDocImage from "../../../public/Images/how-it-work-img-1.png";

const howItWork = () => {
  // Dummy data (you can replace with real content later)
  const workSteps = [
    {
      id: 1,
      title: "1. Send Documents",
      desc: "Send us the source documents.",
      image: sendDocImage,
    },
    {
      id: 2,
      title: "2. Access System",
      desc: "Confiance accesses your accounting system on your server or on the cloud",
      image: sendDocImage,
    },
    {
      id: 3,
      title: "3. Accounting is done",
      desc: "Books are updated in 1-2 business days",
      image: sendDocImage,
    },
    {
      id: 4,
      title: "4. Finalize the Financials",
      desc: "Confiance makes vendor payments, sends client statements/invoices and finalizes the financials on monthly basis",
      image: sendDocImage,
    },
    {
      id: 5,
      title: "5. Review",
      desc: "Review of Financials with the decision maker on monthly basis",
      image: sendDocImage,
    },
  ];

  return (
    <>
      <StartingHeaderImage imageSrc={img} title="How CONFiANCE Works?" />

      <section className="py-10 px-4 xl:px-20 bg-primary">
        {/* Main container */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 justify-center">
          {workSteps.map((item) => (
            <div key={item.id} className="flex gap-6 xl:gap-10 items-center">
              {/* Image */}
              <div className="min-w-[200px] min-h-[200px] flex justify-center items-start">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col gap-3 max-w-[450px]">
                <div className="flex items-start gap-3">
                  <span className="h-[35px] w-[5px] bg-secondary inline-block"></span>
                  <h2 className="text-xl font-semibold mt-1">{item.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default howItWork;
