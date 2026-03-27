'use client';
import {memo, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import CloseIcon from '@/icons/CloseIcon';
import MenuIcon from '@/icons/MenuIcon';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';
import {useTranslation} from 'react-i18next';
import LocaleConfig from '@i18n/localeConfig';
import FlagSerbiaIcon from '@icons/FlagSerbiaIcon';
import FlagUkIcon from '@icons/FlagUkIcon';

const homeLinks = [
  {href: '/', title: 'Početna', section: ''},
  {href: '/#services', title: 'Usluge', section: 'services'},
  {href: '/#galerija', title: 'Galerija', section: 'galerija'},
  {href: '/#packages', title: 'Tretmani', section: 'packages'},
];

const pageLinks = [
  {href: '/gallery', title: 'Svi Slučajevi'},
  {href: '/about', title: 'O Ordinaciji'},
];

const Languages = [
  {code: 'sr', Icon: FlagSerbiaIcon, label: 'SR'},
  {code: 'en', Icon: FlagUkIcon, label: 'EN'},
];

const LangToggle = ({currentLang, mobile = false}: {currentLang: string; mobile?: boolean}) => (
  <div
    className={cn('flex items-center overflow-hidden rounded-full border border-white/30 text-sm')}>
    {Languages.map(({code, Icon, label}) => (
      <button
        key={code}
        onClick={() => LocaleConfig.changeLanguage(code)}
        className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 transition-colors hover:cursor-pointer',
          'text-white/70 hover:text-white',
          {
            'bg-white/20 font-medium text-white': currentLang === code,
            'flex-1': mobile,
          },
        )}>
        <Icon
          width={16}
          height={16}
        />
        {label}
      </button>
    ))}
  </div>
);

const Navigation = () => {
  const {
    t,
    i18n: {language},
  } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const rafRef = useRef<number>(null);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => setMounted(true));
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = homeLinks
      .filter(l => l.section !== '')
      .map(l => ({id: l.section, el: document.getElementById(l.section)}))
      .filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 80) {
        setActiveSection('');
        return;
      }
      let current = '';
      for (const s of sections) {
        if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      setActiveSection('');
    };
  }, [isHome]);

  const navLinkCls = (isActive: boolean) =>
    cn(
      'px-3 py-1.5 rounded-lg text-sm transition-colors',
      isActive
        ? 'bg-white/20 text-white font-medium'
        : 'text-white/75 hover:text-white hover:bg-white/10',
    );

  const mobileLinkCls = (isActive: boolean) =>
    cn(
      'block w-full text-left py-2 px-3 rounded-lg text-sm transition-colors',
      isActive
        ? 'text-primary font-semibold bg-accent'
        : 'text-gray-700 hover:text-primary hover:bg-accent dark:text-gray-300 dark:hover:text-white',
    );

  const currentLang = mounted ? language : 'sr';

  return (
    <nav className={"bg-primary dark:bg-primary-dark fixed top-0 right-0 left-0 z-50 shadow-lg"}>
      <div className={"mx-auto px-4"}>
        <div className={"flex h-16 flex-row items-center justify-between"}>
          <Link
            href={"/"}
            className={"flex flex-row items-center gap-2 text-xl font-semibold text-white"}>
            <LogoIcon
              height={32}
              width={32}
            />
            <span>{"DentaVita"}</span>
          </Link>

          {/* Desktop */}
          <div className={"hidden items-center gap-1 md:flex"}>
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(
                  isHome &&
                    (item.section === '' ? activeSection === '' : activeSection === item.section),
                )}>
                {t(item.title)}
              </Link>
            ))}

            <div className={"mx-2 h-4 w-px bg-white/20"} />

            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkCls(pathname === item.href)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={"mx-2 h-4 w-px bg-white/20"} />

            <Link
              href={"/#contact"}
              className={"text-primary hover:bg-accent hover:text-primary-dark rounded-full bg-white px-5 py-2 text-sm font-medium transition"}>
              {t('Zakažite Pregled')}
            </Link>

            <LangToggle currentLang={currentLang} />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <div className={"flex items-center gap-2 md:hidden"}>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={"p-2 text-white"}
              aria-label={"Toggle menu"}>
              {isOpen ? (
                <CloseIcon
                  width={24}
                  height={24}
                />
              ) : (
                <MenuIcon
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className={"space-y-1 border-t border-white/10 bg-white py-4 md:hidden dark:bg-gray-900"}>
            <p className={"px-3 pb-1 text-[10px] tracking-widest text-gray-400 uppercase"}>
              {t('Na početnoj')}
            </p>
            {homeLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(
                  isHome &&
                    (item.section === '' ? activeSection === '' : activeSection === item.section),
                )}
                onClick={() => setIsOpen(false)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={"my-3 border-t border-gray-100 dark:border-gray-800"} />

            <p className={"px-3 pb-1 text-[10px] tracking-widest text-gray-400 uppercase"}>
              {t('Stranice')}
            </p>
            {pageLinks.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={mobileLinkCls(pathname === item.href)}
                onClick={() => setIsOpen(false)}>
                {t(item.title)}
              </Link>
            ))}

            <div className={"my-3 border-t border-gray-100 dark:border-gray-800"} />

            <div className={"px-1"}>
              <LangToggle
                currentLang={currentLang}
                mobile
              />
            </div>

            <Link
              href={"/#contact"}
              className={"bg-primary hover:bg-primary-dark block rounded-full px-6 py-2.5 text-center text-sm font-medium text-white transition"}
              onClick={() => setIsOpen(false)}>
              {t('Zakažite Pregled')}
            </Link>
          </div>
        )}
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default memo(Navigation);
