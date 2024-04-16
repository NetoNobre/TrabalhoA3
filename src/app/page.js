"use client";

import Card from "@/components/card";
import ferramentas from "@/database";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [tituloFilter, setTituloFilter] = useState("");

  useEffect(() => {
    const ferramentaFilter = ferramentas.filter((f) =>
      f.titulo.toLowerCase().includes(tituloFilter.toLowerCase())
    );
    setData(ferramentaFilter);
  }, [tituloFilter]);

  return (
    <main>
      <input
        type="text"
        value={tituloFilter}
        onChange={({ target }) => setTituloFilter(target.value)}
      />
      {data.map((ferramenta) => {
        return (
          <Card
            key={ferramenta.id}
            id={ferramenta.id}
            tipo={ferramenta.tipo}
            titulo={ferramenta.titulo}
            sobre={ferramenta.sobre}
          />
        );
      })}
    </main>
  );
}
