export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return (
    <>
      <header className="py-4">
        <h2>holy pied</h2>
        <h1>💦 Piper! 💦</h1>
      </header>
      <section>
        <h2>Links</h2>
        <ul>
          {socialLinks.map(({ uri, title }) => (
            <li key={uri} className="py-2 my-2">
              <a
                href={uri}
                className="bg-blue-700 text-white rounded-2xl py-2 px-4"
              >
                ♥️ {title.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <h2 className="py-4">I love:</h2>
      <ul>
        {thingsILove.map((thing) => (
          <li key={thing}>💦 {thing}</li>
        ))}
      </ul>
    </>
  );
}

const thingsILove = ["dirty talk", "dick pics", "making men moan", "treats :)"];

const socialLinksLookup = {
  twitter: { uri: "https://x.com/holypiedpiper", title: "Twitter / X" },
  onlyfans: { uri: "https://onlyfans.com/holypiedpiper", title: "OnlyFans" },
  instagram: {
    uri: "https://www.instagram.com/holypiedpiper",
    title: "Instagram",
  },
  cashApp: {
    uri: "https://cash.app/$kppgift",
    title: "CashApp",
  },
};

const socialLinks = Object.values(socialLinksLookup);
