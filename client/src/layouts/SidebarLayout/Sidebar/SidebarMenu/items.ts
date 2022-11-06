import { ReactNode } from 'react';
import DonutSmallTwoToneIcon from '@mui/icons-material/DonutSmallTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        icon: DonutSmallTwoToneIcon,
        link: '/app/dashboard'
      }
    ]
  }
];

export default menuItems;
