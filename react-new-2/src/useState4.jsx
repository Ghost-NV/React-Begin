import { useState } from "react";

export default function Form({ style }) {
  const [ItemValueAlt, setItemValAlt] = useState("");
  const [ItemValue, setItemVal] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [Items, setItems] = useState([
    { id: 0, title: "Item-1" },
    { id: 1, title: "Item-2" },
    { id: 2, title: "Item-3" },
  ]);

  const newItems = Items.map((Item) => {
    return (
      <div key={Item.id} style={{ marginBottom: "8px" }}>
        <input type="checkbox" />
        {editingId === Item.id ? (
          // input (to edit)
          <input value={ItemValueAlt} onChange={handleItemsAlt} autoFocus />
        ) : (
          // do no thing
          Item.title
        )}{" "}
        {editingId === Item.id ? (
          <button onClick={saveItem}>Save</button>
        ) : (
          <button type="button" onClick={() => editItem(Item.id)}>
            Edit
          </button>
        )}{" "}
        <button type="button" onClick={() => deleteItem(Item.id)}>
          Delete
        </button>
      </div>
    );
  });

  function handleItems(e) {
    setItemVal(e.target.value);
  }

  function handleItemsAlt(e) {
    setItemValAlt(e.target.value);
  }

  function addItems(e) {
    if (e) e.preventDefault();
    if (ItemValue.trim() === "") return;
    setItems([...Items, { id: crypto.randomUUID(), title: ItemValue }]);
    setItemVal("");
  }

  function deleteItem(id) {
    setItems(Items.filter((Item) => Item.id !== id));
  }

  function editItem(id) {
    const item = Items.find((Item) => Item.id === id);
    setItemValAlt(item.title);
    setEditingId(id);
  }

  function saveItem() {
    setItems(
      Items.map((Item) => {
        if (Item.id === editingId) {
          return { ...Item, title: ItemValueAlt };
          // Immutably changes the {Item.title} value to {ItemValueAlt}
        }
        return Item;
        // no thing
      }),
    );
    setEditingId(null);
    setItemValAlt("");
  }

  return (
    <div style={style}>
      <form
        onSubmit={addItems}
        style={{
          marginBottom: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <input type="text" value={ItemValue} onChange={handleItems} />
        <button type="submit">add</button>
      </form>

      <div>{newItems}</div>
    </div>
  );
}
