import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { BackToTop } from "@/components/ui/back-to-top";
import { ThemeHotkeyProvider } from "@/components/providers/hot-key-provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeHotkeyProvider>
      <Navbar />
      <main className="relative max-w-svw overflow-hidden">{children}</main>
      <Footer />
      <BackToTop />
    </ThemeHotkeyProvider>
  );
}
