import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NAVS = [
  {
    icon: 'Home',
    text: 'Home',
    href: '/dashboard',
    children: [],
  },
  {
    icon: 'Job',
    text: 'Job',
    href: '/job/job-status',
    children: [
      {
        text: 'Job Status',
        href: '/job/job-status',
      },
      {
        text: 'Job Planning',
        href: '/job/job-planning',
      },
    ],
  },
  {
    icon: 'Searched',
    text: 'Searched',
    href: '/searched/protein-result',
    children: [
      {
        text: 'Protein Results',
        href: '/searched/protein-result',
      },
      {
        text: 'Glycoprotein Results',
        href: '/searched/glycoprotein-result',
      },
    ],
  },
  {
    icon: 'Statistics',
    text: 'Statistics',
    href: '/statistics/protein-result',
    children: [
      {
        text: 'Protein Results',
        href: '/statistics/protein-result',
      },
      {
        text: 'Glycoprotein Results',
        href: '/statistics/glycoprotein-result',
      },
    ],
  },
  {
    icon: 'Network',
    text: 'Network',
    href: '/network/protein-result',
    children: [
      {
        text: 'Protein Results',
        href: '/network/protein-result',
      },
      {
        text: 'Glycoprotein Results',
        href: '/network/glycoprotein-result',
      },
    ],
  },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { pathname } = useLocation();

  const toggleSideBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <h1 onClick={() => toggleSideBar()}>CELLKEY</h1>
      <ul className={isOpen ? 'hidden' : 'block'}>
        <li>dd</li>
        <li>dd</li>
        <li>dd</li>
        <li>dd</li>
      </ul>
      <ul className={!isOpen ? 'hidden' : 'block'}>
        {NAVS.map((nav, index) => {
          return (
            <div key={index}>
              <li
                className={
                  pathname.includes(nav.text.toLowerCase())
                    ? 'text-green-500'
                    : 'text-black'
                }
              >
                <Link to={nav.href}>{nav.text}</Link>
              </li>
              <ul
                className={
                  pathname.includes(nav.text.toLowerCase()) ? 'block' : 'hidden'
                }
              >
                {nav.children.map((child, idx) => (
                  <li
                    key={idx}
                    className={
                      pathname === child.href ? 'text-green-500' : 'text-black'
                    }
                  >
                    <Link to={child.href}>{child.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
