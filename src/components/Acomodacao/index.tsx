import { IconHeartFilled } from "@/assets/icons";

interface AcomodacaoProps {
  children: React.ReactNode;
}

const Acomodacao = (props: AcomodacaoProps) => {
  return (
    <figure className="relative">
      <div className="p-2 absolute w-full flex flex-row justify-between items-center">
        <span className="bg-white rounded-full px-4 py-1 font-semibold">
          Preferido dos Hospedes
        </span>
        <IconHeartFilled
          className="stroke-white opacity-80"
          aria-label="Favoritos"
          size={30}
        />
      </div>
      {props.children}
      <figcaption>
        <div>Colônia de pescadores</div>
        <div>Anfitriã(o): Jaime Macadar</div>
        <div>15 a 20 de janeiro</div>
        <div>R$ 200</div>
      </figcaption>
    </figure>
  );
};

export default Acomodacao;
