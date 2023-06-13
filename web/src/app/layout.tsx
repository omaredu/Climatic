import "./globals.css";

export const metadata = {
  title: "Climatic",
  description: "La forma más sencilla de consultar el clima de Monterrey, NL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
