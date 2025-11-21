import React from "react"; 
import IndustryHero from "../section/industry/IndustryHero";
import OperationalSection from "../section/industry/OperationalSection";
import CardSection from "../section/industry/CardSection";
import FooterSection from "../components/FooterSection";

function Industry() {
  return (
    <>
      <IndustryHero />
      <OperationalSection />
      <CardSection/>
      <FooterSection/>
    </>
  );
}

export default Industry;
