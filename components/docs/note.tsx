export default function Note({ text }: { text: string }) {
  return (
    <div className="bg-muted text-muted-primary my-3 flex gap-2 border border-neutral-300 px-2 py-2 dark:border-neutral-900">
      <p className="text-sm leading-relaxed sm:text-base">{text}</p>
    </div>
  );
}
