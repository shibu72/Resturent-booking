import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <body className={`bg-[--primaryWhite] antialiased`}> */}
      <Navbar />
      <div
        style={{ background: "url(/images/BGExport.png) no-repeat" }}
        className="bg-cover bg-top py-10"
      >
        {children}
      </div>
      <Footer />
      {/* </body> */}
    </>
  );
}
