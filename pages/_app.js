export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <span>반가워요 !</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
