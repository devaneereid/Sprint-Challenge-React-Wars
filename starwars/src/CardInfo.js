import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Col } from 'reactstrap';

const CardInfo = props => {
    return(
        <Col xs="6" sm="4" key={props.id}>           
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Hair Color: {props.hair_color}</CardSubtitle>
                    <CardText>Gender: {props.gender}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
}
export default CardInfo;