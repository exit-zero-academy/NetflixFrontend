import dynamic from "next/dynamic";

const Layout = dynamic(import('../components/Layout'));

export default function Search() {
    return (
        <Layout>
            <h1>Search Page</h1>
            <p>Welcome to the search page!</p>
        </Layout>
    )
}