import { TransHistEl } from '../TransactionHistoryElement/TransactionHistoryElement';
import { Table, TitleCell } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ item }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TitleCell>Type</TitleCell>
          <TitleCell>Amount</TitleCell>
          <TitleCell>Currency</TitleCell>
        </tr>
      </thead>

      <tbody>
        {item.map(transaction => (
          <TransHistEl key={transaction.id} item={transaction} />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
