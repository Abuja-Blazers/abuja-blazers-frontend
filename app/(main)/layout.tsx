import Footer from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
