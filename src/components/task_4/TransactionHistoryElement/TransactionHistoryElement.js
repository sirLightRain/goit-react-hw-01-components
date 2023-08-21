import { Cell, CellCenter, Row } from './TransactionHistoryElement.styled';
import PropTypes from 'prop-types';

export const TransHistEl = ({ item: { type, amount, currency } }) => {
  return (
    <Row>
      <Cell>{type}</Cell>
      <CellCenter>{amount}</CellCenter>
      <CellCenter>{currency}</CellCenter>
    </Row>
  );
};

TransHistEl.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
