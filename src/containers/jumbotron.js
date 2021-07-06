import React from "react";
import { Card, Jumbotron } from "../components";
import jumboData from "../data/jumbotron.json";

export function JumbotronContainer() {
  let content = [];
  let row = [];
  let full = false;

  jumboData.forEach((product, i) => {
    if (i % 3 === 0 && full) {
      //row.push(product);
      content.push(row);
      row = [];
    } else {
      row.push(product);
      full = true;
    }
  });

  if (row.length > 0) {
    content.push(row);
  }

  content.map((item) =>
    item.map((element) =>
      console.log(
        "id: " +
          element.id +
          "\ntitle: " +
          element.title +
          "\nsubtitle: " +
          element.subTitle +
          "\nimage: " +
          element.image +
          "\n"
      )
    )
  );

  return (
    //<Jumbotron>
    <>
      {content.map((itemRow) => (
        <Jumbotron.Row>
          {itemRow.map((item) => (
            <Card key={item.id}>
              <Card.Body>
                <Card.Background src={item.image} alt="" />
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.subTitle}</Card.Description>
              </Card.Body>
            </Card>
          ))}
        </Jumbotron.Row>
      ))}
    </>
    //</Jumbotron>
  );
}
