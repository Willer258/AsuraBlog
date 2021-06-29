import Head from "next/head";
import { Fragment } from "react";
import CreatePost from "../../components/create-post/create-post";

function ContactPage() {
  return <Fragment>

    <Head>
      <title>Creation des posts</title>
      <meta name="description" content="Conception des posts" />
    </Head>

    <CreatePost />;
  </Fragment>

}

export default ContactPage;