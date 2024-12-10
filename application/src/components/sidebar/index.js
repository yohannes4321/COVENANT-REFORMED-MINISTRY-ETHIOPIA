import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarRoute, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    
                    <SidebarLink to="/ACTS" onClick={toggle}>
                      ACTS
                    </SidebarLink>
                    <SidebarLink to="/ACRFC" onClick={toggle}>
                       ACRFC
                    </SidebarLink>
                    <SidebarLink to="/ACREM" onClick={toggle}>
                        ACREM
                    </SidebarLink>
                    <SidebarLink to="/ACRMC" onClick={toggle}>
                        ACRMC
                    </SidebarLink>
                    <SidebarLink to="/about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                     
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                    
                </SideBtnWrap>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign Up
                    </SidebarRoute>
                    
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}