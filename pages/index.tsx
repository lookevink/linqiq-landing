import type { NextPage } from "next";
import Head from "next/head";
import { Nav } from "../components/navbar/navbar";
import { Layout } from "../components/navbar/layout";
import { Hero } from "../components/hero";
import { Trusted } from "../components/trusted";
import { Box } from "../components/styles/box";
import { Features1 } from "../components/features1";
import { Features2 } from "../components/features2";
import { Features3 } from "../components/features3";
import { Testimonials } from "../components/tesminonials";
import { Statistics } from "../components/statistics";
import { Plans } from "../components/plans";
import { Faq } from "../components/faq";
import { Trial } from "../components/trial";
import { Footer } from "../components/footer";
import { BarChart } from "../components/barchart";
import { Title } from "chart.js";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Modern LP Engagement Solutions - Emerging GP Friendly | LinqiQ
        </title>
        <meta
          name="LinqiQ"
          content="Save time & money without compromising LP relationships."
        />
        <meta property="og:image" content="https://www.linqiq.net/mock.png" />
        <meta
          property="og:title"
          content="Save time & money without compromising LP relationships."
        />
      </Head>
      <Nav />
      <Box as="main">
        <Hero />
        <Trusted />
        <Features1 />
        <Features2 />
        <Features3 />
        <Testimonials />
        <Statistics />
        <Plans />
        <Faq />
        <Trial />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
