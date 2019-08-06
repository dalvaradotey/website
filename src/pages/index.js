import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layouts/HomeLayout";
import { Helmet } from 'react-helmet';
// import Image from "../components/image";
import SEO from "../components/seo";
import PostCard from "../components/Posts/PostCard";

const MyNameIs = () => (
  <div className="flex orange--bg pa6">
    <PostCard />
  </div>
);

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet" />
    </Helmet>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MyNameIs/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
