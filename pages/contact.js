import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

function ContactPage(){
  return <Fragment>
    
    <Head>
      <title>Nous contacter</title>
      <meta name="description" content="Une aide Un besoin ou conseil sur le mode Otaku envoie mon un message "/>
    </Head>
    
    <ContactForm />;
  </Fragment>
  
}

export default ContactPage;