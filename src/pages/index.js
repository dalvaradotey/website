import React, { Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/Layouts/HomeLayout";
import { Helmet } from 'react-helmet';
// import Image from "../components/image";
import SEO from "../components/seo";
import PostCard from "../components/Posts/PostCard";

const MyNameIs = () => (
  <Fragment>
    <div className="flex orange--bg pa6">
      <PostCard />
    </div>
    <div className="flex dark-blue--bg pa6">
      <PostCard />
    </div>
    <div className="flex yellow--bg pa6">
      <PostCard />
    </div>
    <div className="flex blue--bg pa6">
      <PostCard />
    </div>
  </Fragment>
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
