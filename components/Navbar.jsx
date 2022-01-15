import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, forwardRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Icon } from '@components';

export default forwardRef(({ onClick, href, isSelected, route }, ref) => {
  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 30
  };
  
  return (
    <li
      key={route.toLowerCase()}
      className='vz-nav-li'
      vz-selected={isSelected ? '' : undefined}
      vz-route={route}
    >
      <a className='vz-nav-a vz-link' href={href} onClick={onClick} ref={ref}>
        {route}
      </a>
      {isSelected &&
        <motion.div
          layoutId='nav-indicator'
          className='vz-nav-li-active-indicator'
          initial={false}
          transition={spring}
        />
      }
    </li>
  );
});

export default function Navbar () {
  const router = useRouter();
  const routes = [ 'Plugins', 'Themes', 'Docs', 'Learn', 'About', 'FAQ' ];
  const [ selected, setSelected ] = useState(router?.pathname);

  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url);
      console.log(router?.pathname);
      setSelected(url);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <>
      {/* // @todo Remove this check after coming soon is over. */}
      {router.pathname === '/'
        ? null
        : (
          <nav className='vz-nav-wrapper'>
            <div className='vz-nav'>
              <div className='vz-nav-logo'>
                <Link href='/'>
                  <a>
                    Home
                    <Icon name='Vizality' size='50' />
                  </a>
                </Link>
              </div>
              <AnimateSharedLayout>
                <ul className='vz-nav-ul'>
                  <AnimatePresence>
                    {routes.map(route => {
                      const isSelected = selected.startsWith(`/${route.toLowerCase()}`) || (selected === '/' && route === 'Home');
                      const r = route === 'Home' ? '/' : `/${route.toLowerCase()}`;
                      return (
                        <Link key={route.toLowerCase()} href={r} passHref>
                          <NavItem
                            key={route.toLowerCase()}
                            route={route}
                            isSelected={isSelected}
                          />
                        </Link>
                      );
                    })}
                  </AnimatePresence>
                </ul>
              </AnimateSharedLayout>
            </div>
          </nav>
        )
      }
    </>
  );
}
