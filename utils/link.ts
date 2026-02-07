export function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";

  if (href == "/playbook" && pathname.startsWith("/docs")) {
    return true;
  }

  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`^${escaped}(/|$)`);

  return regex.test(pathname);
}
