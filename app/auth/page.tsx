"use client";

import Header from "../../src/components/Header/Header";
import Image from "next/image";
import studio from "../src/public/images/studio.jpg";
import producer from "../src/public/images/musicProducer.jpg";

import Button from "../../src/components/Button/Button";
import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../../src/amplifyconfiguration.json";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";

Amplify.configure(amplifyconfig);

function Auth() {
  return (
    <div className="container m-auto flex items-center justify-center h-screen">
      <Authenticator>
        {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      </Authenticator>
    </div>
  );
}

export default Auth;
