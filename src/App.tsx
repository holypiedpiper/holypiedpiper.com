import "./App.css";

function App() {
  return (
    <>
      <header className="py-6">
        <h1 className="text-5xl">kreampied Piper</h1>
      </header>
      <section className="py-4">
        <h2 className="text-3xl">Links</h2>
        <ul>
          {socialLinks.map(({ uri, title }) => (
            <li key={uri} className="text-blue-500">
              <a href={uri}>♥️ {title}</a>
            </li>
          ))}
        </ul>
      </section>
      <h2>I love:</h2>
      <ul>
        {thingsILove.map((thing) => (
          <li key={thing}>💦 {thing}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

const thingsILove = [
  "lusty comments",
  "dick pics",
  "making men moan",
  "gifts :)",
];

const socialLinksLookup = {
  twitter: { uri: "https://x.com/kreampiedpiper", title: "Twitter / X" },
  onlyfans: { uri: "https://onlyfans.com/kreampiedpiper", title: "OnlyFans" },
  justforfans: {
    uri: "https://justfor.fans/kreampiedpiper",
    title: "JustForFans",
  },
};

const socialLinks = Object.values(socialLinksLookup);
