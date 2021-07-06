import React from "react";
import { Container, Inner, Row } from "./styles/jumbotron";

export default function Jumbotron({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Jumbotron.Row = function JumbotronRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
