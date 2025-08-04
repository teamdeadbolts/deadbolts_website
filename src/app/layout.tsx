import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import "./globals.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Deadbolts",
  description: "FIRST Robotics Team #10980, The Deadbolts",
  keywords: "FRC, Robotics, FIRST, Team Deadbolts, 10980",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="root">
          {/* <ScrollToTop /> */}    
          <Navbar />
            <div className="content">
              {children}
            </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}