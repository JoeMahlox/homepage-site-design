import React from "react";

import {
  CardContainer,
  Body,
  Background,
  Title,
  Description,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <CardContainer {...restProps}>{children}</CardContainer>;
}

Card.Body = function CardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Card.Background = function CardBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
