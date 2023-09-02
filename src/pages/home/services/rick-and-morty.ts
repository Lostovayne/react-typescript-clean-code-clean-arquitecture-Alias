import { ApiUser, User } from "@/models";
import { RickAndMortyAdapter } from "../adapter";

export const rickAndMortyUrl = "https://rickandmortyapi.com/api/character/2";
export const rickAndMortyLocationUrl = "https://rickandmortyapi.com/api/location";

export const fetchMorty = async (url: string): Promise<User> => {
    const response: Response = await fetch(url);
    const User: ApiUser = await response.json();
    return RickAndMortyAdapter(User);
};
