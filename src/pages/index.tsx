import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Typography } from "antd";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { Paragraph } = Typography;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Paragraph
          ellipsis={{
            expandable: true,
            rows: 2,
            symbol: "More",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          laboriosam qui repudiandae omnis sapiente impedit quisquam maiores
          consequatur aspernatur beatae deleniti quidem, reprehenderit similique
          nostrum sint amet, veniam quos, placeat eos non est itaque.
          Repellendus omnis a illum possimus commodi minus fuga quis, illo eaque
          numquam sit facere non, officia ex maxime nisi velit magni deleniti
          consectetur? Ullam qui, itaque accusantium quasi laborum sint
          similique, dolorum, doloribus quisquam provident amet. Accusamus
          accusantium tempore blanditiis impedit magni! Ad, dolor suscipit.
          Magnam, explicabo! Dolores doloremque laborum optio magnam itaque
          doloribus natus, expedita odio inventore voluptatibus rem, tempore
          similique autem amet praesentium nam libero velit minus perspiciatis
          laudantium rerum! Odit expedita possimus dicta molestiae illo, quasi,
          earum labore sed voluptate culpa sunt. Obcaecati distinctio tenetur
          expedita velit similique inventore vero enim asperiores veniam animi
          facere praesentium ullam sapiente dolorem voluptatem laborum, beatae
          aliquam nulla quas iste maxime illo? Distinctio dolorem delectus odio
          beatae similique laborum culpa, voluptatibus velit temporibus, ipsum
          non quibusdam. Reiciendis asperiores dolor ullam laudantium labore ea.
          Similique possimus quo est eveniet, quasi eligendi aperiam harum
          molestias blanditiis. Exercitationem, fugiat excepturi? Voluptate
          voluptatibus veritatis fugiat iusto facere recusandae libero corporis
          adipisci asperiores praesentium excepturi magnam illo, officia aut.
          Amet, in totam.
        </Paragraph>
      </main>
    </>
  );
}
