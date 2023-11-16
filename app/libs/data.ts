import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { FaVuejs } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import NextRestaurants from '@/public/nextRestaurants.png';
import BettingPlatform from '@/public/bettingPlatform.png';
import NextDashboard from '@/public/nextDashboard.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Cum Laude Graduate - Computer Science',
    location: 'American University in Bulgaria, Bulgaria',
    description:
      'I graduated with honors from the American University in Bulgaria with 1 major (Computer Science) and 2 minors (Mathematics and Information Systems).',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep 2017 - May 2021',
  },
  {
    title: 'Software Engineer Intern',
    location: 'Greenterprise Media, Tirana, Albania',
    description:
      'I found an internship as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: 'May 2018 - Aug 2018',
  },
  {
    title: 'Tutor of Fundamental Data Structures',
    location: 'American University in Bulgaria, Blagoevgrad, Bulgaria',
    description:
      'Had the opportunity to solidify my knowledge on the subjects covered by the course as well as other data structures while mastering teaching and learning the most useful ways of doing it.',
    icon: React.createElement(LuGraduationCap),
    date: 'Oct 2019 - Jan 2021',
  },
  {
    title: 'Founder and Mentor',
    location: 'The Software Engineering Team, University Club',
    description:
      "Organized a team of 15-25 members concerned with participating and hosting programming compertitions in our University.",
    icon: React.createElement(LuGraduationCap),
    date: 'Feb 2021 - Jan 2021',
  },
  {
    title: 'Frontend Developer',
    location: 'Seedstages, Remote',
    description:
      "Skills: Javascript · React Native · Git · Agile (SCRUM) · Front end development",
    icon: React.createElement(FaReact),
    date: 'Jan 2021 - Jul 2022',
  },
  {
    title: 'Chief Technology Officer and Full-Stack Developer',
    location: 'Green Funds, Blagoevgrad, Bulgaria',
    description:
      "Skills: Javascript · Vue.js, Node.js · Front-End Development · Back-End Web Development · PostgreSQL · Data Structures · Agile (SCRUM). ",
    icon: React.createElement(FaVuejs),
    date: 'Sep 2021 - Apr 2022',
  },
  {
    title: 'Full-stack JavaScript Developer',
    location: 'Sciant, Sofia, Bulgaria',
    description:
      "Skills: Javascript · React.js · TypeScript · Node.js · Tailwind CSS · Front-End Development · Back-End Web Development · Redux.js · Amazon Web Services (AWS) · PostgreSQL · Data Structures · Git · Agile (SCRUM) · Docker.",
    icon: React.createElement(FaReact),
    date: 'Aug 2021 - Jun 2022',
  },
  {
    title: 'Senior Software Engineer',
    location: 'DataDots, Sofia, Bulgaria',
    description:
      "Skills: JavaScript · React.js · TypeScript · Tailwind CSS · Next.js · Material UI · Sockets · REST · HTML5 · CSS · Algorithms.",
    icon: React.createElement(FaReact),
    date: 'Jan 2023 - Sep 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Next Restaurants',
    description:
      'I worked as a full-stack developer. Users can log in and make reservation to their restaurant of choice.',
    tags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind', 'Prisma'],
    imageUrl: NextRestaurants,
    projectUrl: 'https://next-project-geqjcb6no-tonigashi999-gmailcom.vercel.app'
  },
  {
    title: 'Next Dashboard',
    description:
      "A dashboard with some extra features to view and favorite cars. There is a fake delay to show the loading states.",
    tags: ['React', 'Next.js', 'Tailwind', 'Partial Pre-rendering'],
    imageUrl: NextDashboard,
    projectUrl: 'https://next-dashboard-one-self.vercel.app/dashboard'
  },
  {
    title: 'Betting Platform',
    description:
      'Proof of concept. A company wanted to display their data and be able to display changes from their end in real time to this platform.',
    tags: ['React', 'Node', 'REST', 'Sockets', 'Tailwind'],
    imageUrl: BettingPlatform,
    projectUrl: 'https://datadots-betting-ui.vercel.app'
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Redux',
  'AWS',
  'Express',
  'PostgreSQL',
  'Material UI',
  'MongoDB',
  'Agile (Scrum)'
] as const;
