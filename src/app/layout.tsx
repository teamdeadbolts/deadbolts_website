import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Deadbolts",
  description: "FIRST Robotics Team #10980, The Deadbolts",
  keywords: "FRC, Robotics, FIRST, Team Deadbolts, 10980",
  themeColor: "#000000"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <head>
   
        {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
        {/* <title>The Deadbolts | Team 10980</title> */}
        {/* <script
          src="https://kit.fontawesome.com/e6226b2983.js"
          crossorigin="anonymous"
        ></script> }
      </head> */}
      <body>
        <div className="root">
          {/* <ScrollToTop /> */}    
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}