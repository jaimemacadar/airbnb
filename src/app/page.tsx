import { fetchData } from "@/utils/api";
import Acomodacoes from "@/widgets/Acomodacoes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Navegacaoabashorizontal from "@/widgets/Navegacaoabashorizontal";
import Rodape from "@/widgets/Rodape";

export default async function Home() {
  const dados = await fetchData();

  return (
    <>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <hr className="my-6" />

      <main className="container mx-auto">
        <Navegacaoabashorizontal icons={dados.icons} />
        <Acomodacoes accommodation={dados.accommodation} />
      </main>

      <footer className="bg-gray-300">
        <Rodape />
      </footer>
    </>
  );
}
