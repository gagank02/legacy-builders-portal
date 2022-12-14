// import App from 'next/app'
import '../components/Sidebar.css'
import '../components/index.css'
import '../components/profile.css'
import '../components/learn.css'
import '../components/login.css'
import '../components/community.css'
import '../components/resources.css'
import '../components/webinar.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp