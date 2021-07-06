import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
`;

export const Inner = styled.div`
  display: flex;
  margin: 30px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
