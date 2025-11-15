"use client";

import StartingHeaderImage from "@/components/StartingHeaderImage";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import Counter from "@/components/Counter";

const Facts = () => {
  return (
    <>
      <StartingHeaderImage title="Interesting Facts" />

      <section className="bg-primary py-10 px-6">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-10 text-center text-secondary">
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
    </>
  );
};

export default Facts;
