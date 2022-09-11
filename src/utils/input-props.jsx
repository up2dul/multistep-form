import {
  IoCalendarNumber,
  IoCall,
  IoFileTray,
  IoGlobeOutline,
  IoHome,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5';

import { learnList, sourcesInfoList } from '@/utils';

export const firstTextProps = [
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

export const birthDateProps = {
  icon: <IoCalendarNumber />,
  label: 'Birth date',
  placeholder: 'Pick date',
  dropdownType: 'modal',
  withAsterisk: true
};

export const secondTextProps = [
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
    placeholder: 'e.g. 0888123123 or +6281234123',
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
    placeholder: 'e.g. https://github.com/guntur',
    withAsterisk: true
  },
  {
    name: 'linkedin',
    icon: <IoLogoLinkedin />,
    label: 'Linkedin URL',
    placeholder: 'e.g. https://linkedin.com/in/guntur',
    withAsterisk: true
  }
];

export const thirdRadioProps = [
  {
    name: 'level',
    orientation: 'vertical',
    label: 'Expertise level in web development',
    withAsterisk: true
  },
  {
    name: 'stack',
    orientation: 'vertical',
    label: 'Focus stack on web development',
    withAsterisk: true
  },
  {
    name: 'experience',
    orientation: 'vertical',
    label: 'Work experience',
    withAsterisk: true
  }
];

export const resumeFileProps = {
  icon: <IoFileTray />,
  label: 'Upload your Resume/CV',
  placeholder: 'Upload here',
  description: 'Optional. Can be in PDF or any other format file'
};

export const thirdMultiProps = [
  {
    name: 'learn',
    data: learnList,
    label: 'How did you learn to code and programming before?',
    placeholder: 'Pick here',
    description: 'You can choose more than 1',
    withAsterisk: true
  },
  {
    name: 'sourcesInfo',
    data: sourcesInfoList,
    label: 'Where did you know about this bootcamp?',
    placeholder: 'Pick here',
    description: 'You can choose more than 1',
    withAsterisk: true
  }
];

export const thirdTextareaProps = [
  {
    name: 'motivation',
    label: "What's your motivation to joining in this bootcamp?",
    description: 'Explain briefly and clearly',
    withAsterisk: true
  },
  {
    name: 'question',
    label: 'Do you have any question or feedback',
    description: 'Must be related to this bootcamp',
    withAsterisk: true
  }
];
