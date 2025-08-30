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
      To  build our robot and be competative this season, we have a fundraising goal of <strong>$30,000</strong>. 
      This includes $10,000 for the robot, $12,000 for two competition registrations, and additional expenses for materials and team operations.
    </p>
    <p>
      Our immediate goal is to raise <strong>$10,000 by October 1st</strong> so we can begin building the robot and preparing for the season. 
      This is one of the most import parts of the season so it is cirticl we reach this goal.
    </p>
    <p>
      <strong>Exciting opportunity:</strong> A generous donor is offering a <strong>1:1 donation match up to $10,000</strong>. 
      Donations made within the next month will be doubled, effectively doubling your impact and will be greatly appreciated.
    </p>

    <div className={styles.countdown}>
      <h2>Time left for our donation match</h2>
      <Countdown timeEnd={MATCH_END_DATA} width={800} />
    </div>
    <p>Donations can be made via:</p>
    <div className={styles.links}>
      <Button href="" variant="outline" size="lg" color="#000" width={250}>GoFundMe</Button>
      <Button href="https://account.venmo.com/u/teamdeadbolts" variant="outline" size="lg" color="#000" width={250}>Venmo</Button>
    </div>

    <p><strong>For check donations</strong>: please make payable to "The Deadbolts FRC Team" and mail to: 1498 Orchard Ave, Boulder, CO 80304.</p>
    <p>If you made a donation via Venmo or GoFundMe and would like a tax deductable reciept,
      please send us an email at teamdeadbolts@gmail.com</p>
    <p>
      All contributions are tax-deductible as we are a 501(c)(3) organization.
      We can include your name and logo on our website, t-shirts, and the robot as a thank-you for your support.
    </p>

    <p>
      Thank you for helping Team Deadbolts reach our goals. Your donation brings us closer to competing at the highest level this season.
    </p>
  </div>
}