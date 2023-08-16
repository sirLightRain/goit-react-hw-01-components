import { TransHistEl } from "./TransactionHistoryElement";

export const TransactionHistory = ({ item }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {item.map((transaction)=>(
            <TransHistEl key={transaction.id} item={transaction}/>
        ))}
      </tbody>
    </table>
  );
};
