import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { Button } from "react-bootstrap";
import List from "../../components/List";
import { HiChevronRight } from "react-icons/hi";
import grantsImg from "../../assets/IMG-20240819-WA0007.jpg";
import paymentImg from "../../assets/payment.jpg";
import IncentivesImg from "../../assets/IMG-20240819-WA0008.jpg";
import hiringImg from "../../assets/hiring.jpg";
import internImg from "../../assets/IMG-20240819-WA0012.jpg";
import { Image } from "../../components/Image";
import { Link } from "react-router-dom";


function MoreInfoHomes() {
  const info = [
    {
      title: "Grants",
      image: grantsImg,
    },
    {
      title: "Loans",
      image: paymentImg,
    },
    {
      title: "Incentives",
      image: IncentivesImg,
    },
    {
      title: "Jobs",
      image: hiringImg,
    },
    {
      title: "Internships",
      image: internImg,
    },
  ];
  return (
    <>
      <HeaderComponent page="More Informations" title="Grants, Loans, Incentives" />
      <View style={{ padding: "1rem", display: "grid", gap: "2rem" }}>
        {info.map((inf, index) => (
          <List key={inf.title}>
            <Image src={inf.image} alt="open book" style={{ width: "90%" }} />
            <span>{inf.title}</span>
            <Link to={`/InformationTypes/${inf.title}`}><HiChevronRight style={{ height: "100%", width: "100%" }} /></Link>
          </List>
        ))}
      </View>
    </>
  );
}

export default MoreInfoHomes;
