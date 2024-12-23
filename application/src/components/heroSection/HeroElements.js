import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover; // Ensures the image covers the entire container without being stretched
    opacity: 0.7; // Slight opacity for a stylish look
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .h1-hero {
    color: #fff;
    font-size: 48px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }

  .hero-text {
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;

  button {
    margin: 0 10px;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #01bf71;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #fff;
      color: #01bf71;
    }
  }
`;
