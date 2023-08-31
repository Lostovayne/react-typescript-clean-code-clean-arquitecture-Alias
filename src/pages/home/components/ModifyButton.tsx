import { modifyUser } from "@/redux/actions/user.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const ModifyButton = () => {
    const dispatch = useDispatch();

    const dispatAction = useCallback(() => {
        dispatch(modifyUser({ name: "Carlos" }));
    }, [dispatch]);

    return <button onClick={dispatAction}>ModifyButton</button>;
};
export default ModifyButton;
