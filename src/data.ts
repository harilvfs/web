/* eslint-disable @typescript-eslint/no-unused-vars */
import { Experience, Project, Skill, SocialLink, Distro } from './types';
import { FaLinux, FaFedora, FaTwitter, FaReddit, FaGithub, FaDiscord, FaTelegram, FaLaptopCode, FaBook, FaWindowMaximize, FaTerminal, FaDesktop, FaServer, FaNetworkWired, FaShieldAlt, FaTachometerAlt } from 'react-icons/fa';
import { SiRust } from 'react-icons/si';

export const userData = {
  name: 'Hari Chalise',
  location: 'Kathmandu, Nepal',
  profilePic: `${process.env.PUBLIC_URL}/aayush.png`,
  shortBio: 'Linux enthusiast & Bash scripting specialist with a big love 💖 for OSS.',
  distros: [
    { name: 'Arch', icon: FaLinux },
    { name: 'Debian', icon: FaLinux },
    { name: 'Fedora', icon: FaFedora },
  ] as Distro[],
  about: [
    {
      command: 'whoami',
      text: "I'm Hari Chalise a full on Linux fanboy. I live in the terminal, love writing Bash scripts, and enjoy messing with OSS. I've been contributing to the Linux community for over a year now, mostly in the Arch Linux community (arch btw), where I tweak and break things for kinda fun (btw, not for fun) and learning."
    },
    {
      command: 'cat journey.txt',
      text: "I 'got' into Linux because of fuc*ing Microsoft shenanigans that they are doing with Windows & choosing Linux has been the best decision I have ever made in my life. I do tweaking systems, customizing kernels, and scripting stuff to make my setup run just right. I'm a little proficient with Bash and now learning Rust(btw)."
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
    description: 'Writing Bash scripts to automate tasks. Breaking stuff, fixing it, and learning in the process.'
  },
  {
    title: 'Linux CLI Tool Developer',
    command: '~/cli$ cargo build --release',
    date: '2024 - Present',
    description: 'Making fast and simple command line tools using Rust(btw).'
  },
  {
    title: 'Linux Tools Developer',
    command: '~/dev$ make install',
    date: '2023 - Present',
    description: 'Building and tweaking tools across various Linux distros.'
  },
  {
    title: 'Casual Designer',
    command: '~/design$ inkscape project.svg',
    date: '2021 - Present',
    description: 'Sometimes I do make style banner logo and many more not best but usable.'
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
    progress: 65
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
    description: 'A simple Rust-based CLI tool (built with Ratatui) to streamline and automate your Linux system’s initial setup 🧩',
    link: 'https://github.com/harilvfs/carch'
  },
  {
    title: 'Arch Wiki',
    icon: 'FaBook',
    description: 'Arch Wiki - OCD Edition ( Arch Linux Installation Guide )',
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

export const skillsDescription = 'I’m quite familiar with Linux environments. I occasionally contribute to some projects and have a decent understanding of Bash scripting I actually enjoy working with it, back & forth. I love Rust (btw) not because of the (rewritting the whole universe in rust "trend"), but because I love how fast CLI tools or anything we make can be. As for other skills, they;re mostly for showcase; I’m not an expert in them. I know the basics of Photoshop, but yeah I use Linux and don’t want to see any f*cking Adobe software here. I also do performance tuning with various kernels, somewhat customized often to the point where I break things every time. Yeah, learning curve.';
