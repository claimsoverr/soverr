/**
 * Prepends the base URL to a path to ensure it resolves correctly in all environments (dev and prod).
 * 
 * @param path The path to prepend the base URL to. It can start with or without a slash.
 * @returns The path with the base URL prepended.
 */
export function getUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  
  // Clean up the base to avoid double slashes
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // If base is empty or just '/', return the path as is
  if (!cleanBase) {
    return cleanPath;
  }
  
  return `${cleanBase}${cleanPath}`;
}
