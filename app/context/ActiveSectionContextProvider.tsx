'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

import type { links } from '../libs/data';

export type SectionName = (typeof links)[number]['name'];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  const activeSectionValue = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, timeOfLastClick],
  );

  return (
    <ActiveSectionContext.Provider value={activeSectionValue}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    );
  }

  return context;
}
