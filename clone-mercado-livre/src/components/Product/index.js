import React from 'react';

import { Link } from 'react-router-dom';
import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

export default function Product() {
  return (
    <Container>
      <Row>
        <Link to="/" className="anchor01">
          Compartilhar
        </Link>
        <Link to="/" className="anchor02">
          Vender um igual
        </Link>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com selo de qualiadade</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia garantida</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <Link to="/" className="anchor03">
      Saiba mais sobre garantia
    </Link>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Essa camiseta branca masculina é produzida em tricoline, de manga longa,
      quase não amassa e muito fácil de ser passada, perfeitas para ser
      utilizada no dia a dia corrido. conta com bolso do lado esquerdo e logo
      bordado. Possui colarinho clássico podendo ser comprada com botões no
      interior da gola que garantem um colarinho impecável na utilização de
      gravatas. Sua modelagem é a tradicional e pode ser usada por dentro ou por
      fora da calça.Essa camiseta é lisa e não possui detalhes, apenas bordado
      da marca no peito.
      <br />
      <br />
      Detalhes <br />
      Nome: Camiseta Tricoline Manga Curta Masculina <br />
      Gênero: Masculino
      <br />
      Indicado para: Dia a Dia Gola: Gola Careca
      <br />
    </p>
  </Description>
);
