export const TransHistEl = ({item: {type, amount, currency}}) => {
    return (
        <tr>
            <td>type: {type}</td>
            <td>amount: {amount}</td>
            <td>currency: {currency}</td>
        </tr>
    );
}