import Image from "next/image";
import Link from "next/link";

export function Profile() {
  return (
    <Link
      href="/"
      className="flex items-center ring-1 ring-neutral-500/70 justify-center">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={50}
        height={50}
        className="rounded-none size-10 p-0.5 object-left object-cover"
      />
    </Link>
  );
}
