import React from "react";
import { Container } from "reactstrap";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-primary text-white text-uppercase fixed-bottom p-3"
    >
      Made with <FavoriteIcon color="secondary"/> by Anubhab
    </Container>
  );
};

export default Footer;
