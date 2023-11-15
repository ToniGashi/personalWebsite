'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { useSectionInView } from '@/app/libs/hooks';

import SectionHeading from './section-heading';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Computer Science</span> and minors in 
        Information Systems and Mathematics, I decided to pursue my
        passion for programming. I have been professionally working as a{' '}
        <span className="font-medium">full-stack web developer</span>.{' '} since
        before graduating in 2021. {' '}
      </p>

      <p className='mb-3'>   
        <span className="italic">My favorite part of programming</span> 
          is the problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{' '}
          <span className="font-medium">
            React, Next.js, Node.js, PostgreSQL
          </span>
          . I am also familiar with TypeScript, Prisma, MongoDB, Docker, AWS, etc. 
          I am always looking to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a front-end or full-stack developer.{' '}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, any sport involving physical activity and chess. I also enjoy{' '}
        <span className="font-medium">learning new things</span> and making people cringe from my dad jokes. 
        I am currently learning about{' '} <span className="font-medium">Software Architecture</span> and
        got my eyes on my second AWS certification.
      </p>
    </motion.section>
  );
}
