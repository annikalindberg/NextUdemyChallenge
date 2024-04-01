import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
  console.log("Executing MainHeader"); // this will not be logged in the browsee console but in the terminal where the server is running (node.js). THis shows that this component is being executed on the server side and not on the client side. Next js does this in opposite to react js which executes on the client side. Serverside rendering is good for SEO and performance because the server can send the html to the client faster than the client rendering it. In Next js we can choose which components to render on the server side and which to render on the client side. We can also choose to render some components on the server side and some on the client side. This is called hybrid rendering. In a client component we can use the useEffect hook to run code on the client side only, but we can't use the useEffect hook in a server component because it will run on the server side only. We can use the useEffect hook in a hybrid component to run code on the server side and the client side.

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
