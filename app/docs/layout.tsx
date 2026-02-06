// import DocsSidebar from "@/components/layouts/docs-sidebar";
// import { MobileNav } from "@/components/layouts/mobile-nav";

export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col justify-between gap-8 px-2 py-1 md:flex-row">
      <main className="w-full flex-1 pt-12 pb-16 font-mono md:pt-18">
        {children}
      </main>
    </div>
  );
}
