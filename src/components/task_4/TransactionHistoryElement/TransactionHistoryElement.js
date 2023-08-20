import { Cell, CellCenter, Row } from "./TransactionHistoryElement.styled";

export const TransHistEl = ({item: {type, amount, currency}}) => {
    return (
        <Row>
            <Cell>{type}</Cell>
            <CellCenter>{amount}</CellCenter>
            <CellCenter>{currency}</CellCenter>
        </Row>
    );
}