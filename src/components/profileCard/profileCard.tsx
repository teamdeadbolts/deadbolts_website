'use client';
import React from 'react';
import Image from 'next/image';
import styles from './profileCard.module.css';

interface Props {
  image: string;
  name: string;
  role: string;
  description?: string;
}

const ProfileCard: React.FC<Props> = ({ image, name, role, description }) => (
  <div className={styles.profileCard}>
    <div className={styles.imageWrapper}>
      <Image src={image} alt={name} className={styles.image} width={100} height={100} />
    </div>
    <div className={styles.content}>
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.role}>{role}</h4>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  </div>
);

export default ProfileCard;
