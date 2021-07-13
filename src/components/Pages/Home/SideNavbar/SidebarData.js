import React from 'react'
import CategoryIcon from '@material-ui/icons/Category';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData = [
          {
                    title: 'Categories',
                    icon: <CategoryIcon/>,
                    link: "/home"
          },
          {
                    title: 'Following',
                    icon: <PersonAddIcon/>,
                    link: "/mailbox"
          },
          {
                    title: 'Wallet',
                    icon: <AccountBalanceWalletIcon/>,
                    link: "/analytics"
          },
          {
                    title: 'Enrolled Audition',
                    icon: <CastForEducationIcon/>,
                    link: "/dashboard"
          },
          {
                    title: 'Setting',
                    icon: <SettingsIcon/>,
                    link: "/friends"
          },
]
