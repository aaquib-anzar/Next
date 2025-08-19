import "@/app/ui/global.css"
import {inter} from "@/app/ui/fonts"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


/*Antialiased support by tailwind
Makes text rendering smoother and thinner, especially on macOS and iOS.

Prevents fonts from looking too bold or jagged.

Many people combine it with custom fonts for a cleaner look.*/ 