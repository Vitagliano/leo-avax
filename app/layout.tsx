import type {Metadata} from "next";
import "./globals.css";
import {cn} from "@/lib/utils"
import {Press_Start_2P} from "next/font/google";


const font = Press_Start_2P({
    weight: '400',
    preload: false,
});

export const metadata: Metadata = {
    title: "$LEO 🔺",
    description: "$LEO is Dom’s dog and $KIMBO‘s brother on Avax | CA: 0x04f388E30BfD03f357AE061ec5680c7e4ac4cF09 TG: https://t.me/LEOcoinAVAX",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            font.className
        )}>
        {children}
        </body>
        </html>
    );
}