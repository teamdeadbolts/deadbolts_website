import React from 'react'
import styles from './sponsors.module.css'
import Button from '../../components/button/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "The Deadbolts | Sponsors"
}

export default function Sponsors() {
    return (
        <div>
            <div className={styles.support_header}>
                <div className={styles.support_text}>
                    <h1>Support Our Team</h1>
                    <h3>Help Us Build the Future, One Robot at a Time</h3>
                    <div style={{height: '1rem'}}></div>
                    <p>
                        We’re The Deadbolts, a brand-new high school robotics team based in Boulder, Colorado, on a mission to
                        bring STEM opportunities to local students through the FIRST Robotics Competition. Our team is made up
                        of high-schoolers who are learning to design, build, and program a robot in just six weeks, all while
                        building the leadership, collaboration, and problem-solving skills that will carry us into the future.
                        <br/><br/>
                        As a rookie team, we’re starting from the ground up with no tools, no parts, and no past robots. We’re
                        aiming to raise $30,000 to fund our entire season, which includes:
                    </p>
                    <ul>
                        <li>Robot parts and build materials</li>
                        <li>Tools, electronics, and safety equipment</li>
                        <li>Competition registration and travel expenses</li>
                        <li>Workshops, outreach events, and STEM education efforts</li>
                    </ul>
                    <p>
                        We believe this program should be accessible to every student, nregardless of their financial background.
                        That’s why we’re reaching out to local businesses and community members for support. In return, our
                        sponsors receive logo placement on our robot, shirts, website, and more. Most importantly, any donation
                        is an opportunity to support the next generation of engineers, creators, and changemakers.
                        As a 501(c)(3) nonprofit, all donations to our team are tax-deductible to the extent permitted by law.
                    </p>
                    <br/>
                    <Button width={400} responsive={true} responsivePadding={30} size='lg' variant='outline' color='#000' href="https://forms.gle/uuZscsTApGWR8Bm5A">
                        Become a Sponsor
                    </Button>
                </div>
            </div>
        </div>
    )
}
