import { useState, type FormEvent } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新しいTODOを入力..."
      />
      <button type="submit">追加</button>
    </form>
  );
}
