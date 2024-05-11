import "@/styles/song.css";
import "@/styles/album.css";
import "@/styles/artist.css";
import "@/styles/player.css";
import "@/styles/globals.css";
import "@/styles/nav_bar.css";
import "@/styles/popular.css";
import { Provider } from "react-redux";
import store from "@/controller/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import CustomizedNavBar from "@/components/nav_bar";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session} >
        <div className='main d-flex flex-column-reverse flex-lg-row m-0 m-md-2 m-lg-5 col-12 col-md-11 pt-2 '>
          <div className='nav nav-fixed col-12 col-lg-1 bottom-0 left-0 top-lg-0 position-sticky position-lg-sticky'>
            <CustomizedNavBar />
          </div>
          <div className="col-12 col-lg-11 d-flex flex-column justify-content-between head">
            <div className='content'>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </SessionProvider>
    </Provider>

  );
}