"use client";

import Header from "../src/components/Header/Header";
import Image from "next/image";
import studio from "../src/public/images/studio.jpg";
import producer from "../src/public/images/musicProducer.jpg";

import Button from "../src/components/Button/Button";
import { Authenticator } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";

Amplify.configure({ ...awsExports });

function Page() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-screen h-screen">
            <Image alt="studio" src={studio} className="object-cover" fill />
          </div>
          <div className="absolute text-center w-screen">
            <div className="m-auto">
              <h1 className="text-9xl font-bold font-Mate-Inter text-customPink">
                improve
              </h1>
              <h1 className="text-white text-9xl font-bold font-Mate-Inter">
                your craft
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-2/4 xl:w-1/4 2xl:w-1/4 flex items-center justify-center m-auto">
          <Image alt="producer" src={producer} />
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center m-auto text-center pt-5">
          <h1 className="text-6xl lg:text-7xl font-bold font-Mate-Inter text-customPink lg:w-3/4">
            get the feedback
          </h1>
          <h1 className="text-6xl lg:text-7xl font-bold font-Mate-Inter text-black lg:w-3/4">
            you’ve always needed, but didn&apos;t have access to
          </h1>
          <p className="p-4 lg:w-3/4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis
          </p>
          <Link href={"/auth"}>
            <Button className="mb-4"> create account</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
