import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarMenu = [
	{
		title: 'Personal Details',
		path: '/personalDetail',
		icon: <FaIcons.FaUserPlus />,
		cName: 'nav-text'
	},
	{
		title: 'Property Details',
		path: '/property',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Financial Details',
		path: '/financialDetail',
		icon: <FaIcons.FaRegWindowRestore />,
		cName: 'nav-text'
	},
	{
		title: 'Demographics',
		path: '/demographics',
		icon: <IoIcons.IoIosFilm />,
		cName: 'nav-text'
	},
	{
		title: 'Declarations',
		path: '/declaration',
		icon: <IoIcons.IoMdApps />,
		cName: 'nav-text'
	},
	{
		title: 'Summary',
		path: '/summary',
		icon: <IoIcons.IoIosStar />,
		cName: 'nav-text'
	},

];
