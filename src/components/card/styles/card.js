import styled from "styled-components/macro";

export const CardContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  width: 0;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 30px 30px;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  //background-color: black;
  background: url(images/blue-light-trails.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 5px 5px 30px 10px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const Background = styled.img`
  border-radius: 30px;
  object-fit: cover;

  /* max-width: 100%;
  height: auto; */
  width: 100%;
  height: 400px;
`;

export const Description = styled.h3`
  text-align: center;
  color: white;
  font-weight: bold;
`;
