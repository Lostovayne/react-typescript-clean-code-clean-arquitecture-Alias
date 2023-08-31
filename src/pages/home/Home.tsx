import { Layout } from "@/styled-components";
import { HomeTitle } from "./styled-components";
import { CreateButton, ModifyButton, ResetButton } from "@/pages/home/components";
const Home = () => {
    return (
        <>
            <HomeTitle>Title</HomeTitle>
            <Layout>Home</Layout>
            <CreateButton />
            <ModifyButton />
            <ResetButton />
        </>
    );
};
export default Home;
