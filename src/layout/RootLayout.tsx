import "./RootLayout.css";

export default function RootLayout({
  googleAnalytics,
  heapIo,
  children,
}: {
  googleAnalytics: React.ReactNode;
  heapIo: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/sweat-droplets.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      {googleAnalytics}
      {heapIo}
      <body>
        <div
          id="root"
          className="poppins-light min-h-screen flex flex-col align-middle justify-center"
        >
          {children}
        </div>
      </body>
    </html>
  );
}

RootLayout.Metadata = {
  title: "holy pied Piper",
  description:
    "Holy (kream) pied Piper is a hot FTM slut with a big ass who loves to suck cock and get filled with cum. Come here for videos, photos, and exclusive access to Piper's trans man pussy!",
};
