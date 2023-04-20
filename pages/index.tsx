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
        <meta
          property="og:title"
          content="https://uvaqjfxzlpgvwyaylghu.supabase.co/storage/v1/object/sign/fund-files/mock.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmdW5kLWZpbGVzL21vY2sucG5nIiwiaWF0IjoxNjgyMDA1ODA4LCJleHAiOjE3MTM1NDE4MDh9.wHFA3XxvRB8z-oDhsLxCuupLvJuxZWWfRe5khv7O5nk&t=2023-04-20T15%3A50%3A08.841Z"
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
