//Can not just put onDeleteItem (eg: onClick={onDeleteItem}) into the onClick event. Otherwise React will immediately call the function. Putting onDeleteItem function into another function like below will casue the function to execute when eventlistener (eg: onClick) is triggered.

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
