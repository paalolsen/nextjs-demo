import Head from "next/head"; // <-- For å vise egen tekst i fane
import Header from './Header';
import NavBar from './NavBar';
import "./index.scss";
import './Layout.scss';

const Layout = props => {
  const appTitle = `> WHATABYTE`;

  return (
  <div className="Layout">
    <Head>
      <title>WHATABYTE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header appTitle={appTitle} />
    <div className="Content">
      {props.children}
    </div>
    <NavBar />
  </div>
  )
};

export default Layout;