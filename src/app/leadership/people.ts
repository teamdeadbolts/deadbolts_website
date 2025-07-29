export type PersonRole = 'Leadership' | 'Mentor';

export interface Person {
  slug: string;
  image: string;
  name: string;
  roleTitle: string;
  role: PersonRole;
  description: string;
}

export const people: Person[] = [
  {
    slug: 'zane-aloia',
    image: '/images/zane.webp',
    name: 'Zane Aloia',
    roleTitle: 'Team Captain',
    role: 'Leadership',
    description: `Zane is the Co-Founder and Team Captain of FRC Team 10980, The Deadbolts. He leads strategy sessions, oversees the integration of programming and mechanical systems, and drives the team’s outreach initiatives. With a passion for innovation and a vision for excellence, Zane is committed to building not just competitive robots, but a supportive and inclusive team culture that empowers every member. Prior to The Deadbolts, he helped lead a previous FRC team into the top 10% worldwide, demonstrating his ability to elevate performance and foster growth through collaborative leadership.
            
    Outside of robotics, Zane enjoys watching Formula One and developing iOS apps.`,
  },
  {
    slug: 'ethan-berg',
    image: '/images/ethan.webp',
    name: 'Ethan Berg',
    roleTitle: 'Mechanical Co-Captain',
    role: 'Leadership',
    description: `As Mechanical Co-Captain of the Deadbolts, Ethan is instrumental in transforming ideas into functional, competition-ready systems. He helps guide the team’s build process with a balance of creativity, attention to detail, and a drive to innovate. Whether he's sketching a new concept or leading a machining session, Ethan’s calm leadership helps bring mechanical ideas to life.
    
     When he’s not building robots, Ethan enjoys competitive swimming and machining with the lathe.`,
  },
  {
    slug: 'mukul-naidu',
    image: '/images/mukul.webp',
    name: 'Mukul Naidu',
    roleTitle: 'Mechanical Co-Captain',
    role: 'Leadership',
    description: `As Mechanical Co-Captain of the Deadbolts, Mukul helps lead the design and fabrication of the team’s robot. Known for his precision and collaborative spirit, he plays a key role in turning creative ideas into reliable systems on the field.
    
    Outside of robotics, Mukul enjoys woodworking and can often be found crafting detailed projects in his garage.
    `,
  },
  {
    slug: 'coen-shields',
    image: '/images/coen.webp',
    name: 'Coen Shields',
    roleTitle: 'Programming Captain',
    role: 'Leadership',
    description: ` As Programming Captain of the Deadbolts, Coen leads the development of the team’s software systems. From autonomous routines to real-time controls, he helps ensure the robot’s brain is just as powerful as its body. Coen plays a key role in making the robot smarter and more adaptable each season.
    
    When he isn't busy programming, Coen is an avid rock climber who enjoys challenging routes and high-altitude adventures.
    `,
  },
  {
    slug: 'sachin-sangvikar',
    image: '/images/placeholder-profile.webp',
    name: 'Sachin Sangvikar',
    roleTitle: 'Lead Mentor',
    role: 'Mentor',
    description: '',
  },
];
