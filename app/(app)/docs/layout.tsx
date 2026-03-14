export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="border-edge relative mx-auto w-full max-w-4xl border-x pt-16 pb-6 font-sans sm:px-4">
      {children}
    </main>
  );
}
