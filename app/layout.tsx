import head from "next/head";
import { ReactNode } from "react";
import "../src/styles/globals.css";
import Header from "../src/components/Header/Header";
import Link from "next/link";
import Button from "../src/components/Button/Button";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div>
          <div className="fixed w-screen z-10">
            <Header>
              <Link href={"/auth"}>
                <Button> sign in</Button>
              </Link>
            </Header>
          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
