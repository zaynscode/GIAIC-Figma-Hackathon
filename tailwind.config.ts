import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat','sans-serif']
      },
      
      }, 
       screens: {
        xs:'414px',
        sm:'640px',
        md:'768px',
        lg:'1080px',
        xl:'1280px',
        
    },
  },
  plugins: [],
};
export default config;
