import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>안녕하세요 {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> 버튼</button>
    </div>
  );
}
