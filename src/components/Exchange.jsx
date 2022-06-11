import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchange = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  console.log(exchangesList);

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={9}>Exchanges</Col>
        <Col span={5}>24h Trade Volume</Col>
        <Col span={5}>Markets</Col>
        <Col span={5}>Price</Col>
      </Row>
      {exchangesList.map((exchange) => (
        <Collapse accordion>
          <Panel
            key={exchange.uuid}
            showArrow={false}
            header={
              <Row key={exchange.uuid} style={{ width: "100%" }}>
                <Col span={9}>
                  <Text>
                    <strong>{exchange.rank}.</strong>
                  </Text>
                  <Avatar className="exchange-image" src={exchange.iconUrl} />
                  <Text>
                    <strong>{exchange.name}</strong>
                  </Text>
                </Col>
                <Col span={5}>${millify(exchange["24hVolume"])}</Col>
                <Col span={5}>{millify(exchange.numberOfMarkets)}</Col>
                <Col span={5}>{millify(exchange.price)}</Col>
              </Row>
            }
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            ducimus iusto esse, fuga porro optio doloribus soluta molestias vero
            libero illo culpa totam est laboriosam tenetur! Aspernatur
            voluptatem aut quod!
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default Exchange;
