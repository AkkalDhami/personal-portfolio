export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative w-full max-w-180 pt-18 pb-16 font-sans sm:px-4">
      {children}
    </main>
  );
}
