
import { Geist, Geist_Mono } from "next/font/google";
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const aboutPage = () => {
    return (
        <div>
            <p className={geistMono.className}>This is the about page.</p>
        </div>
    );
};

export default aboutPage;