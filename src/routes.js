

import DashboardIcon.svg from "../src/assets/DashboardIcon.svg"
import DashboardIconActive.svg from "../src/assets/DashboardIconActive.svg"

const routes = [

  { 
      label: 'Dashboard',
      path: '/dashboard', 
      icon: 'DashboardIcon',
      activeIcon: 'DashboardIconActive',
  },
  { 
      label:'Accounts Management',
      path:'/accounts',        
      icon: 'AccountsIcon' ,  
      activeIcon: 'AccountsIconActive',
  },
  { 
      label:'Settings',
      path:'/settings',        
      icon: 'SettingsIcon',
      activeIcon: 'SettingsIconActive',
  },            
  { 
      label:'Users List',
      path:'/users',        
      icon: 'UsersListIcon',
      activeIcon: 'UsersListIconActive',
  },            
  { 
    label:'Logout',
    path:'/logout',        
    icon: 'LogoutIcon',
    activeIcon: 'LogoutIconActive',
  },    
];

export default routes;