export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  species: string;
  createdAt: string;
  image: string;
}

export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch('https://futuramaapi.com/api/characters');
  const data = await response.json();
  return data.items;
};
