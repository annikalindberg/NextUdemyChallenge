'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classes from './nav-link.module.css';

export default function NavLink({ href, children }) {
  // the children prop is used to pass the text of the link to the NavLink component from the parent component.
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}` // Correct template string syntax
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
