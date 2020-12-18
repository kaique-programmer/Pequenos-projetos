import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

export default function ProductAction() {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de tricoline</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Sem envio no momento</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">19</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 2x de R$ 9,99</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">
            Benefício exclusivo acima de R$ 100,00
          </span>
          <Link to="/" className="more">
            Ver mais
          </Link>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra garantida, receba o produto que esta esperando ou devolvemos
            o dinheiro
          </p>
        </li>
      </Benefits>
    </Container>
  );
}
