import { UserEmptyState } from "@/models";
import { createUser } from "@/redux/actions/user.slice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMorty, rickAndMortyUrl } from "../services";

const CreateButton = () => {
    const dispatch = useDispatch();
    const [morty, setMorty] = useState(UserEmptyState);

    const getMorty = async () => {
        const result = await fetchMorty(rickAndMortyUrl);
        setMorty(result);
    };

    useEffect(() => {
        getMorty();
    }, []);

    const dispatchAction = useCallback(() => {
        dispatch(createUser(morty));
    }, [dispatch, morty]);

    return <button onClick={dispatchAction}>CreateButton</button>;
};
export default CreateButton;
