import { Layout } from "@/styled-components";
import { HomeTitle } from "./styled-components";
import { CreateButton } from "@/pages/home/components";
const Home = () => {
    return (
        <>
            <HomeTitle>Title</HomeTitle>
            <Layout>Home</Layout>
            <CreateButton />
        </>
    );
};
export default Home;
