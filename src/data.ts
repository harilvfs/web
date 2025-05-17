/* eslint-disable @typescript-eslint/no-unused-vars */
import { Experience, Project, Skill, SocialLink, Distro } from './types';
import { FaLinux, FaFedora, FaTwitter, FaReddit, FaGithub, FaDiscord, FaTelegram, FaLaptopCode, FaBook, FaWindowMaximize, FaTerminal, FaDesktop, FaServer, FaNetworkWired, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { SiRust } from 'react-icons/si';

export const userData = {
  name: 'Hari Chalise',
  location: 'Kathmandu, Nepal',
  profilePic: `${process.env.PUBLIC_URL}/aayush.png`,
  shortBio: 'Linux enthusiast & Bash scripting specialist with a passion for open source and system optimization.',
  distros: [
    { name: 'Arch', icon: FaLinux },
    { name: 'Debian', icon: FaLinux },
    { name: 'Fedora', icon: FaFedora },
  ] as Distro[],
  about: [
    {
      command: 'whoami',
      text: "I'm Hari Chalise, a Linux enthusiast specializing in Bash scripting and passionate about open source. I've been actively contributing to the Linux community for over a year, particularly within the Arch Linux ecosystem, where I focus on creating efficient and customized solutions."
    },
    {
      command: 'cat journey.txt',
      text: "My tech journey began with a fascination for Linux, leading me to explore system management and kernel customization. I'm proficient in Bash scripting and am currently learning Rust. I'm excited by its potential for building secure and efficient systems."
    }
  ],
  email: 'harilvfs@chalisehari.com.np'
};

export const socialLinks: SocialLink[] = [
  {
    name: 'Twitter',
    icon: 'FaTwitter',
    url: 'https://x.com/harilvfs',
    ariaLabel: 'Twitter Profile'
  },
  {
    name: 'Reddit',
    icon: 'FaReddit',
    url: 'https://reddit.com/u/aayush-le',
    ariaLabel: 'Reddit Profile'
  },
  {
    name: 'Telegram',
    icon: 'FaTelegram',
    url: 'https://t.me/harilvfs',
    ariaLabel: 'Telegram Contact'
  },
  {
    name: 'Discord',
    icon: 'FaDiscord',
    url: 'https://discord.com/invite/8NJWstnUHd',
    ariaLabel: 'Discord Server'
  },
  {
    name: 'GitHub',
    icon: 'FaGithub',
    url: 'https://github.com/harilvfs',
    ariaLabel: 'GitHub Profile'
  }
];

export const experiences: Experience[] = [
  {
    title: 'Bash Scripting Specialist',
    command: '~/scripts$ ./automation.sh --optimize',
    date: '2023 - Present',
    description: 'Creating efficient automation solutions and optimizing system performance.'
  },
  {
    title: 'Linux Tools Development',
    command: '~/dev$ make install',
    date: '2022 - Present',
    description: 'System optimization across various distributions with Arch Linux expertise.'
  },
  {
    title: 'Design Work',
    command: '~/design$ inkscape project.svg',
    date: '2021 - Present',
    description: 'Creating visuals and layout design.'
  }
];

export const skills: Skill[] = [
  {
    name: 'Linux Environments',
    icon: 'FaLinux',
    progress: 80
  },
  {
    name: 'Bash Scripting',
    icon: 'FaTerminal',
    progress: 90
  },
  {
    name: 'Rust Programming',
    icon: 'SiRust',
    progress: 70
  },
  {
    name: 'Photoshop',
    icon: 'FaDesktop',
    progress: 50
  },
  {
    name: 'System Administration',
    icon: 'FaServer',
    progress: 85
  },
  {
    name: 'Networking',
    icon: 'FaNetworkWired',
    progress: 75
  },
  {
    name: 'Security Hardening',
    icon: 'FaShieldAlt',
    progress: 65
  },
  {
    name: 'Performance Tuning',
    icon: 'FaTachometerAlt',
    progress: 80
  }
];

export const projects: Project[] = [
  {
    title: 'Carch',
    icon: 'FaLaptopCode',
    description: 'An automated script for quick & easy Linux system setup (Arch & Fedora) 🧩',
    link: 'https://github.com/harilvfs/carch'
  },
  {
    title: 'Arch Wiki',
    icon: 'FaBook',
    description: 'OCD-Edition: Arch Linux Installation Note.',
    link: 'https://github.com/harilfs/Arch-Wiki'
  },
  {
    title: 'DWM',
    icon: 'FaWindowMaximize',
    description: 'Customized Dynamic Window Manager configuration for Linux.',
    link: 'https://github.com/harilvfs/dwm'
  },
  {
    title: 'Blog Site',
    icon: 'FaLaptopCode',
    description: 'A simple, clean blog site built using React and TypeScript.',
    link: 'https://github.com/harilvfs/blog-site'
  }
];

export const skillsDescription = 'Technical specialist with focus on practical skills over formal education, with continuous learning in open-source technology. Background includes Computer Management education with emphasis on hands-on technical experience and solving complex problems with elegant solutions.';
