import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/photo_2024-12-16_16-45-17.jpg"
import Image2 from "../images/photo_2024-12-22_21-29-00 - Copy.jpg";
import Image3 from "../images/photo_2024-12-16_17-11-29.jpg";
import Image4 from "../images/photo_2024-12-16_16-43-44.jpg";
import Image5 from "../images/photo_2024-12-23_16-37-39.jpg";
import Image6 from "../images/photo_2024-12-22_21-29-09 - Copy.jpg";
import Image7 from "../images/photo_2024-12-22_21-30-30 - Copy.jpg";
import Image8 from "../images/logo (6).jpg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />

      <InfoSectionLight
        image={Image1}
        id="CRME"
        subtitle="CRME"
        title="COVENANT REFORMED MINISTRY- ETHIOPIA"
        text="COVENANT REFORMED MINISTRY- ETHIOPIA is an organization dedicated to church revitalization. It has various branches and programs that focus on different aspects of Christian leadership and ministry  

The Major Ministries are
Addis Covenant Theological Seminary-Acts,
Covenant Reformed Fellowship Churches,
Addis Covenant Reformed Equipping Ministry,
Addis Covenant Publication And Media Ministry,
Addis Covenant Reformed Compassion Ministry
"
        
        btnText="Sign In"
      />
      <InfoSection
        image={Image2}
        id="ACTS"
        subtitle="Preparing Christians for leadership"
        title="ADDIS COVENANT THEOLOGICAL SEMINARY"
        text="ADDIS COVENANT REFORMED MINISTRY- ETHIOPIA is a multifaceted organization dedicated to church revitalization. Among its various branches and programs, the ADDIS COVENANT THEOLOGICAL SEMINARY stands out as a critical component of the ministry. Through a comprehensive array of academic programs such as Doctor of Ministry, Master of Arts in Theological Studies, Bachelor of Arts in Theology, and Certificate in Theological Studies, this seminary equips Christians for leadership roles in various aspects of ministry, Christian education, and community service.."
        btnText="Start today"
      />
       
      <InfoSectionLight
        image={Image3}
        id="ACRFC"
        subtitle="ACRFC"
        title="ADDIS COVENANT REFORMED FELLOWSHIP CHURCHES"
        text="ADDIS COVENANT REFORMED FELLOWSHIP CHURCHES focus on evangelism, discipleship, home church planting, and organizing conferences and crusades, this branch strives to spread the Christian message and foster spiritual growth among believers. Through these activities, the fellowship church actively engages with individuals seeking to deepen their faith and understanding of Christianity."
        btnText="Explore"
      />0
      <InfoSectionLight
        image={Image4}
        id="ACREM"
        subtitle="ACREM"
        title="ADDIS COVENANT REMORED EQUPPING MINISTRY"
        text="ADDIS COVENANT REFORMED EQUIPPING MINISTRY complements the overall work of the organization by offering informal training and Bible teaching conferences. Covering diverse topics like Christ-centered preaching, transformational leadership, family ministry, apologetics, and worship practices, this branch aims to enhance the skills and knowledge of individuals engaged in ministry work. Additionally, the ministry's focus on media, journalism, and film making underscores its commitment to leveraging various platforms for the dissemination of Christian teachings and principles."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image5}
        id="ACPMM"
        subtitle="ACPMM"
        title="ADDIS COVENANT PUBLICATION AND MEDIA MINISTRY"
        text="The ADDIS COVENANT REFORMED PUBLICATION AND MEDIA branch focuses on translation, book import and distribution, book printing, operating a book store, and publishing books. They aim to make Christian literature accessible to a wider audience and promote the teachings of the ministry."
        btnText="Read more"
      />
      <InfoSectionLight
         image={Image6}
        id="ACRCM"
        subtitle="ACRCM"
        title="ADDIS COVENANT REFOMED COMPASSION MINISTRY"
        text="The ADDIS COVENANT REFORMED COMPASSION MINISTRY focuses on providing education through church-based schools, supporting orphans, vulnerable children, and street children, and empowering youth through training and skills development. This branch of the ministry aims to make a positive impact on the lives of those in need and create opportunities for a better future.
Apart from academic and practical training, Addis Covenant Reformed ministry is also involved in mercy works to support children in need. This includes providing assistance with food, education, clothing, and basic after-school skills training."
         
      />
             
      <InfoSectionLight
        image={Image8}
        id="Donate"
        subtitle="MINTS Bank Address"
        title="Donate "
        text=" Your donations support the COVENANT REFORMED MINISTRY- ETHIOPIA mission to spread the word of God and empower communities through education and resources.
        "
 
      />
      <Footer />
    </>
  );
};
