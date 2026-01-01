import { Accomodation, AirbnbApi } from "@/types/AirbnbDados";

export async function fetchData(): Promise<AirbnbApi> {
  try {
    const response = await fetch("https://web.codans.com.br/airbnb");
    const dados = response.json();
    return dados;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function fetchDataById(
  id: string
): Promise<Accomodation | undefined> {
  try {
    const dados = await fetchData();
    const acomodacao = dados.accommodation.find((item: Accomodation) => {
      return item.slug === id;
    });
    return acomodacao;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
