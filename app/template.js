"use client";
import { usePathname } from 'next/navigation';
import styles from './template.module.css';

export default function Template({ children }) {
  const pathname = usePathname();
  return <div key={pathname} className={styles.page}>{children}</div>;
}
