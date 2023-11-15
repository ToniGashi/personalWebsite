'use client';

import React, { useContext, useMemo } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { ThemeContext } from '@/app/context/ThemeContextProvider';

export default function ThemeSwitch() {
  const context = useContext(ThemeContext);

  useMemo(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', context.theme === 'light');
    }
  }, [context.theme]);

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={() => {
          context.setTheme(context.theme === 'light' ? 'dark' : 'light')
        }
      }
    >
      {context.theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
