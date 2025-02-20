const isProduction = window.location.hostname.includes('localhost');
export const apiUrl = isProduction
    ? 'http://localhost:3000/'  // Production URL
    : 'https://praktik-hifi-corner-med-react-azad-magnus-og-oliver.vercel.app/';
