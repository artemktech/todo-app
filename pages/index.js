import Head from "next/head";
import { resetServerContext } from "react-beautiful-dnd";
import Todos from "../components/Todos";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Head>
        <title>Todos</title>
        <meta name="description" content="Todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
        <Todos />
      </div>
    </div>
  );
}

{
  /* for drag and drop component */
}
export async function getServerSideProps({ query }) {
  resetServerContext();

  return { props: { data: [] } };
}
