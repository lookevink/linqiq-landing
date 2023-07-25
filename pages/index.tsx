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
import { useRef } from "react";

const Home: NextPage = () => {
  const feature1Ref = useRef<HTMLDivElement | null>(null);
  const feature2Ref = useRef<HTMLDivElement | null>(null);
  const feature3Ref = useRef<HTMLDivElement | null>(null);
  const supportRef = useRef<HTMLDivElement | null>(null);

  const handleFeature1Click = () => {
    console.log("hello");
    if (feature1Ref.current) {
      feature1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeature2Click = () => {
    if (feature2Ref.current) {
      feature2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeature3Click = () => {
    if (feature3Ref.current) {
      feature3Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSupportClick = () => {
    if (supportRef.current) {
      supportRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      <Nav
        onFeature1Click={handleFeature1Click}
        onFeature2Click={handleFeature2Click}
        onFeature3Click={handleFeature3Click}
        onSupportClick={handleSupportClick}
      />
      <Box as="main">
        <Hero />
        <Trusted />
        <Features1 ref={feature1Ref} />
        <Features2 ref={feature2Ref} />
        <Features3 ref={feature3Ref} />
        <Testimonials />
        <Statistics />
        <Plans ref={supportRef} />
        <Faq />
        <Trial />
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
