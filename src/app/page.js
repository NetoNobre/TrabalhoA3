"use client";

import Card from "@/components/card";
import ferramentas from "@/database";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [tituloFilter, setTituloFilter] = useState("");
  const [inputTipo, setInputTipo] = useState([]);
  const [tipoFilter, setTipoFilter] = useState("");

  useEffect(() => {
    const listaTipo = [];
    ferramentas.forEach((f) => {
      if (listaTipo.indexOf(f.tipo) === -1) {
        listaTipo.push(f.tipo);
      }
    });
    setInputTipo(listaTipo);
  }, []);

  useEffect(() => {
    let filteredData = ferramentas;

    if (tituloFilter) {
      filteredData = filteredData.filter((f) =>
        f.titulo.toLowerCase().includes(tituloFilter.toLowerCase())
      );
    }

    if (tipoFilter) {
      filteredData = filteredData.filter((f) => f.tipo === tipoFilter);
    }

    setData(filteredData);
  }, [tituloFilter, tipoFilter]);

  return (
    <main>

      <h1>Bifröst</h1>
      <h4>
"Desbloqueie o potencial infinito da sua criatividade com nossas ferramentas de software intuitivas. Transforme suas ideias em realidade, simplifique tarefas complexas e liberte sua imaginação. Junte-se a nós e experimente o poder da inovação em suas mãos. #InovaçãoSemLimites #TransformandoIdeiasEmRealidade ✨🖥️💡"</h4>
      <nav>
        <input className="pesquisa"
          type="text"
          placeholder="Busque sua ferramenta"
          value={tituloFilter}
          onChange={({ target }) => setTituloFilter(target.value)}
        />

        <select className="selecionar"
          value={tipoFilter}
          onChange={({ target }) => setTipoFilter(target.value)}
        >
          <option value="">Selecione uma categoria</option>
          {inputTipo.map((f, i) => (
            <option key={i} value={f}>
              {f}
            </option>
          ))}
        </select>

        <input type="button" onClick={() => setTipoFilter("")} value="Limpar" />
      </nav>
      <div className="container">
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
      </div>
    </main>
  );
}