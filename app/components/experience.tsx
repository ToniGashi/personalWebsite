'use client';

import 'react-vertical-timeline-component/style.min.css';

import React, { useContext } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { ThemeContext } from '@/app/context/ThemeContextProvider';
import { experiencesData } from '@/app/libs/data';
import { useSectionInView } from '@/app/libs/hooks';

import SectionHeading from './section-heading';
import './experience.css';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useContext(ThemeContext);

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="grey">
        {experiencesData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background:
                  theme === 'dark' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'dark'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === 'dark' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-0 font-normal">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
