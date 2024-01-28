'use client';

import { SyntheticEvent, useContext } from 'react';
import MenuItem from '@/components/atoms/MenuItem/MenuItem';
import Menu from '@/components/molecules/Menu';
import { NavigationContext } from '@/contexts/NavigationContext';

const Navigation = () => {
  const { menuIndex, setMenuIndex } = useContext(NavigationContext);


  const handleMenuChange = (_: SyntheticEvent, newValue: number) => {
    if (newValue < 3) {
      setMenuIndex(newValue);
    }
  };

  return (
    <Menu value={menuIndex} onChange={handleMenuChange}>
      <MenuItem label="Hire Me" href="/"/>
      <MenuItem label="Experience" href="/experience"/>
      <MenuItem label="Skills" href="/skills"/>
      <MenuItem label="Resume" target="_blank" href="https://drive.google.com/file/d/14m6_HWfWbRf3bGS6DFX4ouGlbCVA_e6q/view?usp=sharing"/>
    </Menu>
  );
};

export default Navigation;
