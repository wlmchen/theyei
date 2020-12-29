import React from "react";
import Head from "next/head";
import Navbar from "./../global/Header/Navbar";

export default function Page({ title, desc, children }: PageProps) {
  let pageTitle = title ? title + " | Sitename" : "Sitename";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={desc} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={pageTitle} />
        <meta name="og:description" property="og:description" content={desc} />
        <meta property="og:site_name" content={pageTitle} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:image" content="" />
        <meta name="twitter:image" content="" /> */}
      </Head>
      <Navbar />
      {children}
    </>
  );
}

type PageProps = {
  title?: string;
  desc?: string;
  children?: React.ReactNode;
};
