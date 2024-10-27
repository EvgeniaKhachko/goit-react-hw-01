import s from "./TransactionHistory.module.css";

const TransactionHistory = (transactions) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.title}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.items.map((transaction) => (
          <tr className={s.line} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
