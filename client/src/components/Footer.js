import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Информация</Heading>
            <FooterLink href="#">Собственный дизайнер</FooterLink>
            <FooterLink href="#">Разные способы оплаты</FooterLink>
		</Column>
		<Column>
			<Heading>О компании</Heading>
            <FooterLink href="#">Хорошие отзывы</FooterLink>
            <FooterLink href="#">Качественный товар</FooterLink>
		</Column>
		<Column>
			<Heading>Документация</Heading>
            <FooterLink href="#">Документы</FooterLink>
            <FooterLink href="#">Лицензии</FooterLink>
		</Column>
		<Column>
			<Heading>Возможности</Heading>
            <FooterLink href="#">Выбор своего дизайна</FooterLink>
            <FooterLink href="#">Широй выбор товара</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
