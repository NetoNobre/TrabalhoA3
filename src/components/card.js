import Link from "next/link";

export default function Card({id, titulo, tipo}) {
  return (
    <Link href={`detalhe/${id}`}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{tipo}</h6>
        </div>
      </div>
    </Link>
  );
}
