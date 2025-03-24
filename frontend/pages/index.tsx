import { useEffect, useState } from "react";

export default function Home() {
  const [backend, setBackend] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setBackend(data.msg));
  }, []);

  return (
    <main>
      <h1>Frontend is running ✅</h1>
      <p>Backend says: {backend}</p>
    </main>
  );
}
