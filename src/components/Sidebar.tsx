import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaHome, FaBars } from 'react-icons/fa';
import { RiLogoutBoxFill } from "react-icons/ri";
import SidebarItem from './SidebarItem';
import { useNavigateToHome } from '../hooks/useNavigateToHome';
import { useNavigateToLogin } from '../hooks/useNavigateToLogin';

const SidebarStyle = styled.div<{ expanded: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: ${({ expanded }) => (expanded ? '250px' : '80px')};
    height: 100%;
    background: #FFF;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.10);
    transition: width 350ms;
    z-index: 10;
`;

const Sidebar: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const { goToHome }= useNavigateToHome();
    const { goToLogin } = useNavigateToLogin();

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <SidebarStyle expanded={expanded}>
            <SidebarItem Icon={expanded ? FaTimes : FaBars} Text={expanded ? 'Fechar' : ''} expanded={expanded} onClick={toggleSidebar} />
            <SidebarItem Icon={FaHome} Text='Página Inicial' expanded={expanded} onClick={goToHome}/>
            <SidebarItem Icon={RiLogoutBoxFill} Text='Sair' expanded={expanded} onClick={goToLogin}/>

        </SidebarStyle>
    );
};

export default Sidebar;