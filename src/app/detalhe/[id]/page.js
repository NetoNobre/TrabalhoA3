import ferramentas from "@/database";
import Link from "next/link";

export default function Detalhe({ params }) {
  const ferramenta = ferramentas.find((f) => f.id === Number(params.id));

  if (!ferramenta) {
    return <div>Ferramenta não encontrada.</div>;
  }

  return (
    <div>
      <h3 className="">{ferramenta.titulo}</h3>
      <h5 className="">{ferramenta.tipo}</h5>
      <p className="">{ferramenta.sobre}</p>
      <Link href={ferramenta.link} target="_blank">Download</Link>
    </div>
  );
}
