import styled from "@emotion/styled";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const Title = styled.div`
  margin-top: 5;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Gallery = styled.div`
  width: 75%;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const ImageVignette = styled.div`
  position: relative;
  margin: 10px;
  cursor: pointer;
`;

export const ImageDescription = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  color: #fff;
  width: 100%;
  height: 30%;
  whitespace: nowrap;
  overflow: hidden;
  textoverflow: ellipsis;
`;

export const ImageDescriptionTitle = styled.b`
  font-family: Roboto;
  position: absolute;
  bottom: 5px;
  left: 5px;
`;

export const ProjectList = styled.div`
  display: flex;
  justifycontent: space-evenly;
  flexwrap: wrap;
`;
