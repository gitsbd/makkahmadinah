/**
 * Utility function to get correct image path
 * Handles basePath for GitHub Pages deployment
 * 
 * With Next.js static export and basePath, public assets need the basePath prefix
 * This ensures images work correctly on GitHub Pages
 */
export function getImagePath(path) {
  // BasePath for GitHub Pages (must match next.config.js)
  const basePath = '/makkahmadinah'
  
  // If path already includes basePath, return as-is
  if (path.startsWith(basePath)) {
    return path
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Always add basePath prefix
  // Next.js dev server will handle this correctly in development
  // For static export, this ensures correct paths on GitHub Pages
  return `${basePath}/${cleanPath}`
}

