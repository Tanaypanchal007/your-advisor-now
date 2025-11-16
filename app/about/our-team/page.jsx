import StartingHeaderImage from "../../../components/StartingHeaderImage";
import React from "react";
import img from "../../../public/Images/our-team.jpg";

const ourTeam = () => {
  return (
    <>
      <section>
        <StartingHeaderImage imageSrc={img} title="Meet Our Team" />
        Our team Page
      </section>
    </>
  );
};

export default ourTeam;
