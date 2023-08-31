import { createUser } from "@/redux/actions/user.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const CreateButton = () => {
    const dispatch = useDispatch();
    const dispatchAction = useCallback(() => {
        dispatch(createUser({ name: "Sofia", id: "2" }));
    }, [dispatch]);

    return <button onClick={dispatchAction}>CreateButton</button>;
};
export default CreateButton;
