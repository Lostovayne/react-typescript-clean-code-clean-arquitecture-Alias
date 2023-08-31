import { resetUser } from "@/redux/actions/user.slice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

const ResetButton = () => {
    const dispatch = useDispatch();

    const dispatAction = useCallback(() => {
        dispatch(resetUser());
    }, [dispatch]);

    return <button onClick={dispatAction}>ResetButton</button>;
};
export default ResetButton;
