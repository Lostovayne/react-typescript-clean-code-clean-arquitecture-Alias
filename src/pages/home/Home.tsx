import { createUser } from "@/redux/actions/user.slice";
import { Layout } from "@/styled-components";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { HomeTitle } from "./styled-components";
const Home = () => {
    const dispatch = useDispatch();

    const dispatchAction = useCallback(() => {
        dispatch(createUser({ name: "Sofia", id: "2" }));
    }, [dispatch]);

    // useEffect(() => {
    //     dispatchAction();
    // }, [dispatchAction]);

    return (
        <>
            <HomeTitle>Title</HomeTitle>
            <Layout>Home</Layout>
            <button onClick={dispatchAction}>Click me</button>
        </>
    );
};
export default Home;
