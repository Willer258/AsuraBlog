import React from "react";
import nookies from 'nookies';
import { verifyIdToken } from "../../firebase/firebaseAdmin";
import firebaseClient from '../../firebase/firebaseClient';
function Authenticated({ session }) {
  firebaseClient();
  if (session) {
    return (
      <div>
        <div w={500} p={4} my={12} mx="auto">
          <DataView as="h2" mb={12} textAlign="center">
            Compte Authentifie
          </DataView>
          <p textAlign="center">{session}</p>
          <p textAlign="center">Vous ete autentifiee</p>
        </div>
     
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading ...  </p>
      </div>
    )
  }
}

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const {email} = token;

    return {
      props: { session: `Vous etes connecte avec l'email ${email} ` }
    };
  } catch (error) {
    context.res.writeHead(302, { location: "/login" });
    context.res.end();
    return { props: [] }
  }
}

export default Authenticated;