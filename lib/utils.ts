export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(url: string) {
  return /^https?:\/\//.test(url);
}
