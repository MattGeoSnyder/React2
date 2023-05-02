import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, food }) {

  const foodDescription = `Some light and tasty bites to keep you satisfied. The Nachos are a crowd favorite!`
  const drinkDescription = `Our drinks are classic, but made with the best spirits available. We also have non-alcoholic option(s)`

  let textBody = food ? foodDescription : drinkDescription;

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food ? 'Food' : 'Drink'} Menu
          </CardTitle>
          <CardText>
            {textBody}
          </CardText>
          <ListGroup>
            {items.map(item => (
              <Link to={`/${food ? 'snacks' : 'drinks'}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
