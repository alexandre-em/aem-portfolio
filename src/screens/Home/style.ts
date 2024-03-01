import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ededed;
`;

export const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  height: 100%;
  background-color: #fff;
`;

export const AboutText = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    flex: 1;
  }
`;

export const AboutImage = styled.div`
  flex: 0.5;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const AboutTags = styled.div`
  padding: 5px;
`;

export const Experience = styled.div`
  background-color: #f7f7f7;
  padding: 25px;
  flex: 0.5;
`;

export const Education = styled.div`
  padding: 25px;
  flex: 5;
  background-color: #ededed;
`;
