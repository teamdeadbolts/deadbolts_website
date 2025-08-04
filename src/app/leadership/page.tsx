import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'
import ProfileCard from '../../components/profileCard/profileCard';
import { people } from './people';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Deadbolts | Leadership",
  description: "Meet the leaders of The Deadbolts"
}

const LeadershipPage = () => {
  const leadership = people.filter(p => p.role === 'Leadership');
  const mentors = people.filter(p => p.role === 'Mentor');

  return (
    <div className={styles.leadership_container}>
      <h1>Our Leadership Team</h1>
      <div className={styles.leadership_grid}>
        {leadership.map((person) => (
          <Link key={person.slug} href={`/leadership/${person.slug}`} className={styles.leadership_link}>
            <ProfileCard image={person.image} name={person.name} role={person.roleTitle} />
          </Link>
        ))}
      </div>

      <h2>Our Mentors</h2>
      <div className={styles.leadership_grid}>
        {mentors.map((person) => (
          <Link key={person.slug} href={`/leadership/${person.slug}`} className={styles.leadership_link}>
            <ProfileCard image={person.image} name={person.name} role={person.roleTitle} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeadershipPage;
