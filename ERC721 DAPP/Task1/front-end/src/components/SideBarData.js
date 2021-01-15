import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from "react-icons/ri";
import * as FcIcons from "react-icons/fc";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Total Supply',
    path: '/totalSupply',
    icon: <MdIcons.MdAttachMoney/>,
    cName: 'nav-text'
  },
  {
    title: 'Check Balance',
    path: '/balanceOf',
    icon: <MdIcons.MdAccountBalanceWallet/>,
    cName: 'nav-text'
  },
  {
    title: 'Transfer',
    path: '/transfer',
    icon: <BiIcons.BiTransfer/>,
    cName: 'nav-text'
  },
  {
    title: 'Allowance',
    path: '/allowance',
    icon: <FcIcons.FcApproval/>,
    cName: 'nav-text'
  },
  {
    title: 'Approve',
    path: '/approve',
    icon: <FcIcons.FcApprove/>,
    cName: 'nav-text'
  },
  {
    title: 'TransferFrom',
    path: '/transferFrom',
    icon: <RiIcons.RiFolderTransferFill/>,
    cName: 'nav-text'
  },
 
]; 