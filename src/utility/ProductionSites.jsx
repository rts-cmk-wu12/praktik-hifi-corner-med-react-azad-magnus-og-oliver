const isProduction = window.location.hostname.includes('onrender.com');
export const apiUrl = isProduction
    ? 'to-be-edited'  // Production URL
    : 'http://localhost:3000';