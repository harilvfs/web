import React from 'react';
import { FaTwitter, FaReddit, FaTelegram, FaDiscord, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import {
  SidebarContent,
  ProfilePic,
  UserName,
  UserLocation,
  TerminalHeader,
  TerminalUser,
  TerminalPath,
  DistroIcons,
  Distro,
  SocialLinks,
  SocialLink,
  ProfileBadge,
  ProfileBio,
} from './styled';
import { userData, socialLinks } from '../data';

const iconMap: { [key: string]: React.ReactNode } = {
  FaTwitter: <FaTwitter size={18} />,
  FaReddit: <FaReddit size={18} />,
  FaTelegram: <FaTelegram size={18} />,
  FaDiscord: <FaDiscord size={18} />,
  FaGithub: <FaGithub size={18} />,
};

const Profile: React.FC = () => {
  return (
    <SidebarContent>
      <ProfilePic>
        <img src={userData.profilePic} alt="Profile" />
        <ProfileBadge />
      </ProfilePic>
      <TerminalHeader>
        <TerminalUser>user</TerminalUser>:<TerminalPath>~</TerminalPath>$
      </TerminalHeader>
      <UserName>{userData.name}</UserName>
      <UserLocation>
        <FaMapMarkerAlt /> {userData.location}
      </UserLocation>
      
      <ProfileBio>{userData.shortBio}</ProfileBio>
      
      <DistroIcons>
        {userData.distros.map((distro, index) => (
          <Distro key={index} title={distro.name}>
            <distro.icon size={16} /> {distro.name}
          </Distro>
        ))}
      </DistroIcons>
      
      <SocialLinks>
        {socialLinks.map((social, index) => (
          <SocialLink
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            delay={index * 100}
          >
            {iconMap[social.icon]}
          </SocialLink>
        ))}
      </SocialLinks>
    </SidebarContent>
  );
};

export default Profile; 