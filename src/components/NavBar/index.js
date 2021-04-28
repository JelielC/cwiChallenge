import React from "react";
import { DivLogo, NavBarContainer, Separator } from './styles';
import logo from '../../assets/logo.svg';
import overview from '../../assets/overview.svg';
import tickets from '../../assets/tickets.svg';
import ideas from '../../assets/ideas.svg';
import contacts from '../../assets/contacts.svg';
import agents from '../../assets/agents.svg';
import articles from '../../assets/articles.svg';
import settings from '../../assets/settings.svg';
import subscription from '../../assets/subscription.svg';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

    const routes = [
        { path: '/overview', name: 'Overview', icon: overview },  
        { path: '/ticket', name: 'Tickets', icon: tickets },  
        { path: '/ideas', name: 'Ideas', icon: ideas },  
        { path: '/contacts', name: 'Contacts', icon: contacts },  
        { path: '/agents', name: 'Agents', icon: agents },  
        { path: '/articles', name: 'Articles', icon: articles },  
    ]
    
    return(
        <NavBarContainer>
            <DivLogo>
                <img src={logo} alt='' />
                <span>
                    Dashboard
                </span>
            </DivLogo>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>
                        <NavLink exact to={route.path}>
                            <div>
                                <img src={route.icon} alt={`Icone de ${route.name}`}/>
                                <span>
                                   {route.name}
                                </span>
                          </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Separator></Separator>
            <ul>
            <li>
                <NavLink exact to="/settings">
                    <div>
                        <img src={settings} alt=''/>
                        <span>
                            Settings
                        </span>
                    </div>
                </NavLink>
                </li>
                <li>
                    <NavLink exact to="/subscriprion">
                        <div>
                            <img src={subscription} alt=''/>
                            <span>
                                Subscription
                            </span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </NavBarContainer>
    );
}