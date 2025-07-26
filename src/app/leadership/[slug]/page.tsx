import { notFound } from 'next/navigation';
import styles from './page.module.css';
import { people } from '../people';
import Button from '../../../components/button/button';

interface PageProps {
  params: { slug: string };
}



export default async function PersonPage({ params }: PageProps) {
  const person = people.find(p => p.slug === params.slug);
  if (!person) { return notFound() }

  return (
    <div className={styles.profile_page_container}>
      <img src={person.image} alt={person.name} className={styles.profile_photo} />
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
