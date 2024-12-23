import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/final.jpg";
import Icon2 from "../../images/photo_2024-12-16_10-31-06.jpg";
import Icon3 from "../../images/photo_2024-12-16_10-31-06.jpg";

const Services = () => {
  return (
    <ServicesContainer id="about">
      <ServicesH1>Our Partners</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>
            <a href="https://www.mints.edu/" target="_blank" rel="noopener noreferrer">
              MINTS International Seminary
            </a>
          </ServicesH2>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>
            <a href="https://ps78teachers.org" target="_blank" rel="noopener noreferrer">
            PS78 Teachers
            </a>
          </ServicesH2>
        </ServicesCard>










        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>
            <a href="https://worldwitness.org/project/seed-ministry" target="_blank" rel="noopener noreferrer">
              SEED Ministry
            </a>
          </ServicesH2>
        </ServicesCard>
        
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
