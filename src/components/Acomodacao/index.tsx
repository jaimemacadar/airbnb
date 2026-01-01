import { IconHeartFilled, IconStarFilled } from "@/assets/icons";

interface AcomodacaoProps {
  children: React.ReactNode;
  local: string;
  anfitiriao: string;
  data: string;
  preco: number;
  avaliacao: number;
  preferidoHospedes: boolean;
}

const Acomodacao = ({
  children,
  local,
  anfitiriao,
  data,
  preco,
  avaliacao,
  preferidoHospedes,
}: AcomodacaoProps) => {
  return (
    <figure className="relative">
      <div className="p-2 absolute w-full flex flex-row justify-between items-center">
        <span className="bg-white rounded-full px-4 py-1 font-semibold">
          {preferidoHospedes ? "Preferido dos hóspedes" : ""}
        </span>
        <IconHeartFilled
          className="stroke-white opacity-80"
          aria-label="Favoritos"
          size={30}
        />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between">
          <span className="font-semibold">{local}</span>
          <div className="flex flex-row">
            <IconStarFilled
              className="stroke-white opacity-80"
              aria-label="Avaliações"
              size={20}
            />
            <span>{avaliacao}</span>
          </div>
        </div>
        <div>Anfitriã(o): {anfitiriao}</div>
        <div>{data}</div>
        <div className="font-semibold">R$ {preco}</div>
      </figcaption>
    </figure>
  );
};

export default Acomodacao;
