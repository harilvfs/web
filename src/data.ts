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
    { name: 'Arch', icon: 'https://raw.githubusercontent.com/harilvfs/assets/88139ac78acfe24c24e12021cc316cae044321a7/archlinux/arch_linux.svg', url: 'https://archlinux.org/' },
    { name: 'Debian', icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/harilvfs/debianx.png', url: 'https://www.debian.org/' },
    { name: 'Fedora', icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/harilvfs/fedora.png', url: 'https://fedoraproject.org/' },
    { name: 'openSUSE', icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/suse/opensuse.png', url: 'https://www.opensuse.org/' },
  ] as Distro[],
  about: [
    {
      command: 'whoami',
      text: "I'm Hari Chalise a full on Linux fanboy. I live in the terminal, love writing Bash scripts, and enjoy messing with OSS. I've been contributing to the Linux community for over a year now, mostly in the <strong><i>Arch Linux</i></strong> community <b><i>(arch btw)</b></i>, where I tweak and break things for kinda fun (btw, <i>not for fun<i>) and learning."
    },
    {
      command: 'cat journey.txt',
      text: "I <b>got</b> into Linux because of <i>fuc*ing</i> Microsoft shenanigans that they are doing with <b>Windows</b> & choosing <b>Linux</b> has been the best decision I have ever made in my life. I do tweaking systems, customizing kernels, and scripting stuff to make my setup run just right. I'm a little proficient with <i>Bash</i> and now learning <i>Rust(btw)</i>."
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
    title: 'Linux CLI Tool Developer',
    date: '2024 - Present',
    description: 'Making fast and simple command line tools using Rust(btw).'
  },
 
  {
    title: 'Bash Scripting Specialist',
    date: '2023 - Present',
    description: 'Writing Bash scripts to automate tasks. Breaking stuff, fixing it, and learning in the process.'
  },
 
  {
    title: 'Casual Designer',
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
    progress: 50
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
    icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/carch/carch.png',
    description: 'A simple Rust-based CLI tool (built with Ratatui) to streamline and automate your Linux system’s initial setup 🧩',
    link: 'https://github.com/harilvfs/carch'
  },
  {
    title: 'Arch Wiki',
    icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/archlinux/arch_linux.svg',
    description: 'Arch Wiki - OCD Edition ( Arch Linux Installation Guide )',
    link: 'https://github.com/harilfs/Arch-Wiki'
  },
  {
    title: 'DWM',
    icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/dwm/Dwm.png',
    description: 'Customized Dynamic Window Manager configuration for Linux.',
    link: 'https://github.com/harilvfs/dwm'
  },
  {
    title: 'Blog Site',
    icon: 'https://raw.githubusercontent.com/harilvfs/assets/refs/heads/main/profilestuff/Github-desktop-logo-symbol.svg.png',
    description: 'A simple, clean blog site built using React and TypeScript.',
    link: 'https://github.com/harilvfs/blog-site'
  }
];

export const skillsDescription = 'I’m quite familiar with <b>Linux environments</b>. I occasionally contribute to some projects and have a decent understanding of Bash scripting I actually enjoy working with it, back & forth. I love <i>Rust (btw)</i> <b>not</b> because of the <i>rewritting the whole universe in rust <b>`trend`</b></i>, but because I love how fast CLI tools or anything we can make.<br><br> As for other skills, they are mostly for showcase, I’m not an expert in them. I know the basics of Photoshop, but yeah I use Linux and don’t want to see any <i>f*cking</i> Adobe software here. I also do performance tuning with various kernels, somewhat customized often to the point where I break things every time.';
