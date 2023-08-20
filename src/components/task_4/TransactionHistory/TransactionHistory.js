import { TransHistEl } from '../TransactionHistoryElement/TransactionHistoryElement';
import { Table, TitleCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ item }) => {
  return (
    <Table className="transaction-history">

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
