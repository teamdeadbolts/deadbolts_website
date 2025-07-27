import { Metadata } from "next";
import Button from "../components/button/button";

export const metadata: Metadata = {
  title: "The Deadbolts | 404 Not Found"
}

export default function NotFound() {
  return (
    <div
      style={{
        height: '70vh',          
        display: 'flex',         
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1>404 – Not Found</h1>
      <p style={{ // TODO: Jank
        marginBottom: 20
      }}>The page you're looking for doesn't exist.</p>
      <Button href="/" size="md" variant="outline" color="#000">Home</Button>
    </div>
  );
}
