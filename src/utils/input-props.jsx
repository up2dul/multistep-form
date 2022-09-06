import {
  IoCall,
  IoGlobeOutline,
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5';

export const firstTextList = [
  {
    name: 'firstName',
    label: 'First name',
    placeholder: 'e.g. Guntur',
    withAsterisk: true
  },
  {
    name: 'lastName',
    label: 'Last name',
    placeholder: 'e.g. Hidayat'
  }
];

export const secondTextList = [
  {
    name: 'cityCountry',
    icon: <IoHome />,
    label: 'City and Country',
    placeholder: 'e.g. Bandung, Indonesia',
    withAsterisk: true
  },
  {
    name: 'phoneNumber',
    icon: <IoCall />,
    label: 'Phone number',
    placeholder: 'e.g. +62 888-1234-1234',
    description: 'Preferably that is used for Telegram/WhatsApp',
    withAsterisk: true
  },
  {
    name: 'email',
    icon: <IoMail />,
    label: 'Email address',
    placeholder: 'e.g. guntur@hidayat.com',
    description: 'Must be an active email',
    withAsterisk: true
  },
  {
    name: 'website',
    icon: <IoGlobeOutline />,
    label: 'Personal website URL',
    placeholder: 'e.g. https://guntur.com',
    description: 'Optional, but it would be better if you had one'
  },
  {
    name: 'github',
    icon: <IoLogoGithub />,
    label: 'Github URL',
    placeholder: 'e.g. https://github.com/guntur'
  },
  {
    name: 'linkedin',
    icon: <IoLogoLinkedin />,
    label: 'Linkedin URL',
    placeholder: 'e.g. https://linkedin.com/in/guntur'
  }
];
