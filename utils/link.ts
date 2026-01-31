export function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";

  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`^${escaped}(/|$)`);

  return regex.test(pathname);
}
