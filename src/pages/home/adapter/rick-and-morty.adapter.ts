import { ApiUser, User } from "@/models";

export const RickAndMortyAdapter = (user: ApiUser): User => {
    const { id, name, status, species } = user;

    return {
        id,
        name,
        status,
        species,
    };
};
