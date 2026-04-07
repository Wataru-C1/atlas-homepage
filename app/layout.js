import "./globals.css";

export const metadata = {
  title: "ATLAS | 上部頸椎専門",
  description: "健康を維持できる身体に。ATLAS - 上部頸椎専門の施術院",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
