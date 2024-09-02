import React from 'react';
import styled from 'styled-components';

const SidebarItemStyle = styled.div<{ expanded: boolean }>`
    margin-top: 20px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
        margin-right: ${({ expanded }) => (expanded ? '10px' : '0')};
    }

    span {
        display: ${({ expanded }) => (expanded ? 'inline' : 'none')};
        font-size: 16px;
    }
`;

interface SidebarItemProps {
    Icon: React.ComponentType;
    Text: string;
    expanded: boolean;
    onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, Text, expanded, onClick }) => {
    return (
        <SidebarItemStyle expanded={expanded} onClick={onClick}>
            <Icon />
            <span>{Text}</span>
        </SidebarItemStyle>
    );
}

export default SidebarItem;