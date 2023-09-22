import Footer from "@/Components/Common/Footer";
import "../styles/globals.css";

import Header from "@/Components/Common/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
