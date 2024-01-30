/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          domains: ['tailwindui.com'], // Add the domain causing the issue
     },
};

export default nextConfig;
