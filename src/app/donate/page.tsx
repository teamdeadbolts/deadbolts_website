import { Metadata } from "next";
import Countdown from "../../components/countdown/countdown";
import styles from './donate.module.css'
import Button from "../../components/button/button";

const MATCH_END_DATA = new Date("2025-09-30T23:59:59");

export const metadata: Metadata = {
  title: "The Deadbolts | Donate",
  description: "Donate to Team Deadbotls"
}

export default function DonatePage() {

  return <div className={styles.container}>
    <h1>Donate now</h1>
    <p>
      <strong>To build our robot and be competative this season, we have a fundraising goal of $30,000</strong>. 
    </p>
    <ul>
      <li>$10,000 for the robot</li>
      <li>$12,000 for two competition registrations</li>
      <li>$8,000 for materials and team operations</li>
    </ul>

    <p>
      Our first milestone is to raise <strong>$10,000 by October 1st</strong> so we can begin to build the robot.
      This is one of the most important parts of the season so it is critical we have a timely start.
    </p>
    <p>
      <strong>Exciting opportunity:</strong> A generous donor is offering a <strong>1:1 donation match up to $10,000</strong> until September 30th.       
    </p>

    <div className={styles.countdown}>
      <h2>Time left for our $10,000 donation match</h2>
      <Countdown timeEnd={MATCH_END_DATA} width={800} />
    </div>

    <h3>Donations can be made via:</h3>
    <div className={styles.links}>
      <Button 
        href="" 
        variant="outline" 
        size="lg" 
        color="#000" 
        width={250} 
        height={60} 
        fontSize={25} 
        target="_blank" 
        backgroundColor="#3b83f6a0">
          GoFundMe
        </Button>
      <Button 
      href="https://account.venmo.com/u/teamdeadbolts" 
      variant="outline" 
      size="lg" 
      color="#000" 
      width={250} 
      height={60} 
      fontSize={25} 
      target="_blank" 
      backgroundColor="#3b83f6a0">
        Venmo
      </Button>
    </div>

    <p><strong>For check donations</strong>: please make payable to "The Deadbolts FRC Team" and mail to: 1498 Orchard Ave, Boulder, CO 80304.</p>
    <p>
      All contributions are tax-deductible as we are a 501(c)(3) organization.
      <strong>We can include your name and logo on our website, t-shirts, and the robot as a thank-you for your support.</strong>
    </p>

     <p>
      If you made a donation via Venmo and would like a tax deductable reciept,
      please send us an email at teamdeadbolts@gmail.com with your Venmo account name.
    </p>

    <p>
      <strong>Thank you</strong> for helping Team Deadbolts reach our goals. Your donation brings us closer to competing at the highest level this season.
    </p>
  </div>
}