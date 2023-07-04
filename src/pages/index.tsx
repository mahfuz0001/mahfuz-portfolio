import * as React from "react";

import Layout from "@/components/layout/Layout";
import UnderlineLink from "@/components/links/UnderlineLink";
import Seo from "@/components/Seo";

/**
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from "~/svg/Vercel.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle="Mahfuz - Portfolio" />
      <Seo />

      <main>
        <Header />
        <section className="">
          <div className="layout relative flex min-h-screen flex-col">
            <Hero />
            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
