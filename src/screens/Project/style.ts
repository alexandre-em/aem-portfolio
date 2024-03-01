import styled from "@emotion/styled";

export const Main = styled.div`
  padding: 25px;
  min-height: calc(100vh - 300px);
`;

export const Description = styled.div``;

export const Tags = styled.div``;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentRef = styled.div`
  width: 80%;
  backgroundcolor: #fff;
  padding: 10;
  borderradius: 10;
  margintop: 15;
  boxshadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  overflow: auto;
`;
