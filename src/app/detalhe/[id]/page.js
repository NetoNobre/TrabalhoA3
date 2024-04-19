import ferramentas from "@/database";
import Link from "next/link";



export default function Detalhe({ params }) {
  const ferramenta = ferramentas.find((f) => f.id === Number(params.id));

  if (!ferramenta) {
    return <div>Ferramenta não encontrada.</div>;
  }

  return (
    
    <div className="detalhes">
      <h3 className="titulo">{ferramenta.titulo}</h3>
      <h5 className="tipo">{ferramenta.tipo}</h5>
      <p className="sobre">{ferramenta.sobre}</p>
      <Link href={ferramenta.link} target="_blank">Download</Link>
    </div>
  );
}
