'use client';

import React from 'react';

import { projectsData } from '@/app/libs/data';
import { useSectionInView } from '@/app/libs/hooks';

import Project from './project';
import SectionHeading from './section-heading';
import Link from 'next/link';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <div className="group mb-3 last:mb-0 sm:mb-8" key={index}> 
            <Link href={project.projectUrl}>
              <Project {...project} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
