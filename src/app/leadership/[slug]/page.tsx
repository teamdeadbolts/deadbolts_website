import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { people } from '../people';
import Button from '../../../components/button/button';
import Image from 'next/image';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = people.find(p => p.slug === slug);
  
  if (!person) {
    return {
      title: 'Person Not Found'
    };
  }
  
  return {
    title: `The Deadbolts | ${person.name}`,
    description: `Learn more about ${person.name}, The ${person.roleTitle}`
  };
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params;
  const person = people.find(p => p.slug === slug);
  
  if (!person) { 
    return notFound();
  }
  
  return (
    <div className={styles.profile_page_container}>
      <Image 
        src={person.image} 
        alt={person.name} 
        className={styles.profile_photo} 
        width={100} 
        height={100} 
      />
      <h1 className={styles.profile_name}>{person.name}</h1>
      <h2 className={styles.profile_role}>{person.roleTitle}</h2>
      <p className={styles.profile_description}>
        {person.description
          ? person.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))
          : 'No description available.'}
      </p>
      <div className={styles.button_wrapper}>
        <Button href="/leadership" variant="outline" color='#000' size='lg'>
          Back to Team Leadership
        </Button>
      </div>
    </div>
  );
}