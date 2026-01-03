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
  
  // Check if we're in a production environment with basePath
  // In development, Next.js doesn't apply basePath, so we shouldn't add it
  // In production (static export), basePath is applied, so we need to add it
  let shouldUseBasePath = false
  
  if (typeof window !== 'undefined') {
    // Browser environment: check if current pathname starts with basePath
    // This indicates we're in production/GitHub Pages
    shouldUseBasePath = window.location.pathname.startsWith(basePath)
  } else {
    // Server-side: check NODE_ENV
    shouldUseBasePath = process.env.NODE_ENV === 'production'
  }
  
  // If not using basePath (development), return path as-is
  if (!shouldUseBasePath) {
    return path
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // Add basePath prefix for production/GitHub Pages
  return `${basePath}/${cleanPath}`
}

