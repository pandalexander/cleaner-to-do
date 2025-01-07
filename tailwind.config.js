/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        coolerOne: "#FAF9DC",
        coolerTwo: "#D89A9E",
        coolerThree: "#001F3F",
        coolerFour: "#FFFFFF",
        coolerFive: "#254441",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
    spacing: {
      "spacing-1": "var(--spacing-1)",
      "spacing-2": "var(--spacing-2)",
      "spacing-3": "var(--spacing-3)",
      "spacing-4": "var(--spacing-4)",
      "spacing-5": "var(--spacing-5)",
      "spacing-6": "var(--spacing-6)",
      "spacing-7": "var(--spacing-7)",
      "spacing-8": "var(--spacing-8)",
      "spacing-9": "var(--spacing-9)",
      "spacing-10": "var(--spacing-10)",
      "spacing-11": "var(--spacing-11)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
