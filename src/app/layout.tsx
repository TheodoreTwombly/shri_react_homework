import "./globals.css";
import { roboto } from "./fonts";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { StoreProvider } from "@/redux/StoreProvider";

export const metadata = {
  title: "Билетопоиск",
  description: "Разработка компании ШРИндекс",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
        <div id="selectItems" />
        <div id="confirmDelete" />
      </body>
    </html>
  );
}
