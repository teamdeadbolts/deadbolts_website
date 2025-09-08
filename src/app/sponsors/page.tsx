import React from 'react'
import styles from './sponsors.module.css'
import Button from '../../components/button/button'
import sponsors from '../../data/sponsors.json';
import { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "The Deadbolts | Sponsors"
}

type Sponsor = {
  name: string,
  image: string,
  tier: 'gold' | 'bronze' | 'silver',
  href: string | undefined
}

const tiers: { tier: Sponsor['tier'], label: string, size: { w: number, h: number } }[] = [
  { tier: 'gold', label: 'Gold Sponsors', size: { w: 400, h: 400 } },
  { tier: 'silver', label: 'Silver Sponsors', size: { w: 300, h: 300 } },
  { tier: 'bronze', label: 'Bronze Sponsors', size: { w: 200, h: 200 } },
]

export default function Sponsors() {
  return (
    <div>
      <div className={styles.support_text_container}>
        <div className={styles.support_text}>
          <h1>Support Our Team</h1>
          <h3>Help Us Build the Future, One Robot at a Time</h3>
          <div style={{height: '1rem'}}></div>
          <p>
              We're The Deadbolts, a brand-new high school robotics team based in Boulder, Colorado, on a mission to
              bring STEM opportunities to local students through the FIRST Robotics Competition. Our team is made up
              of high-schoolers who are learning to design, build, and program a robot in just six weeks, all while
              building the leadership, collaboration, and problem-solving skills that will carry us into the future.
              <br/><br/>
              As a rookie team, we're starting from the ground up with no tools, no parts, and no past robots. We're
              aiming to raise $30,000 to fund our entire season, which includes:
          </p>
          <ul>
              <li>Robot parts and build materials</li>
              <li>Tools, electronics, and safety equipment</li>
              <li>Competition registration and travel expenses</li>
              <li>Workshops, outreach events, and STEM education efforts</li>
          </ul>
          <p>
              We believe every student deserves access to STEM, regardless of their background. That's why we're inviting
              local businesses and community leaders to help us bring this vision to life. Every donation helps fund materials,
              competitions, and mentorship. All contributions are tax-deductible through our 501(c)(3). Want to make an impact?
              Head to our Donate page to learn more about how you can fuel our mission.
          </p>
          <br/>
          <div className={styles.buttons}>
            <Button width={400} responsive={true} responsivePadding={30} size='xl' variant='outline' color='#000' href="https://forms.gle/uuZscsTApGWR8Bm5A">
              Become a Sponsor
            </Button>
          </div>
        </div>
        
        <details className={styles.dropdown}>
          <summary className={styles.dropdown_summary}>
            Sponsorship Tiers
          </summary>
          <div className={styles.tiers_container}>
            <div className={styles.tier_card}>
              <h1>Gold</h1>
              <h2>$1,500+</h2>
              <ul className={styles.benefits}>
                <li><strong>Large</strong> logo and name on:</li>
                  <ul className={styles.benefits}>
                    <li>Website sponsors page</li>
                    <li>Team t-shirts</li>
                    <li>Robot with prominent placement</li>
                    <li>All printed event materials</li>
                  </ul>
                  <li>Shout-out in team newsletter</li>
                  <li>Mention in all team media (Instagram, TikTok, YouTube)</li>
                  <li>Letter of appreciation</li>
                  <li>Framed set of photos of the team's robot in action</li>
              </ul>
            </div>
            <div className={styles.tier_card}>
              <h1>Silver</h1>
              <h2>$750 - $1,499</h2>
              <ul className={styles.benefits}>
                <li><strong>Medium</strong> logo and name on:</li>
                  <ul className={styles.benefits}>
                    <li>Website sponsors page</li>
                    <li>Team t-shirts</li>
                    <li>Robot</li>
                  </ul>
                  <li>Instagram thank-you post</li>
                  <li>Mention in team newsletter</li>
                  <li>Letter of appreciation</li>
                  <li>Invitation to all team events</li>
                  <li>Framed photos of team's robot in action</li>
              </ul>
            </div>
            <div className={styles.tier_card}>
              <h1>Bronze</h1>
              <h2>$200 - $749</h2>
              <ul className={styles.benefits}>
                <li><strong>Small</strong> logo on:</li>
                  <ul className={styles.benefits}>
                    <li>Website sponsors page</li>
                    <li>Team t-shirts</li>
                    <li>Robot</li>
                  </ul>
                  <li>Thank-you story mention on Instagram</li>
                  <li>Letter of appreciation</li>   
                  <li>Invitation to all team events</li>   
              </ul>
            </div>
          </div>
        </details>
      </div>
      <div className={styles.sponsors_list_container}>
        {tiers.map(({ tier, label, size }) => {
          const tierSponsors = (sponsors as Sponsor[]).filter(s => s.tier === tier)
          if (tierSponsors.length === 0) return null

          return (
            <div key={tier} className={styles.tier_section}>
              <h2>{label}</h2>
              <div className={`${styles.grid} ${styles[tier]}`}>
                {tierSponsors.map(sponsor => {
                  const sponsorImage = (
                    <Image
                      src={`/images/sponsors/${sponsor.image}`}
                      alt={sponsor.name}
                      width={size.w}
                      height={size.h}
                      style={{ objectFit: 'contain' }}
                    />
                  );
                  if (sponsor.href == undefined) { 
                    return (
                      <div key={sponsor.name} className={styles.sponsor_card}>
                        {sponsorImage}
                      </div>
                    );
                  } else {
                    return (
                      <Link href={sponsor.href} key={sponsor.name} className={styles.sponsor_card} target='_blank'>
                        {sponsorImage}
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}