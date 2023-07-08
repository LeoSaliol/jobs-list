import img1 from '../images/photosnap.svg';
import img2 from '../images/manage.svg';
import img3 from '../images/account.svg';
import img4 from '../images/myhome.svg';
import img5 from '../images/loop-studios.svg';
import img6 from '../images/faceit.svg';
import img7 from '../images/shortly.svg';
import img8 from '../images/insure.svg';
import img9 from '../images/eyecam-co.svg';
import img10 from '../images/the-air-filter-company.svg';

type Role = 'Frontend' | 'Backend' | 'Fullstack';
type Level = 'Junior' | 'Midweight' | 'Senior';
type Lenguages = 'HTML' | 'CSS' | 'Python' | 'Ruby' | 'JavaScript';
type Tools = 'React' | 'Sass' | 'Vue' | 'Django' | 'RoR' | 'Ruby' | '';
// type Badges = Role | Level | Lenguages | Tools;

export interface Vacancy {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: Role;
    level: Level;
    postedAt: string;
    contract: string;
    location: string;
    languages: Lenguages[];
    tools: Tools[];
}

export const vacancys: Vacancy[] = [
    {
        id: 1,
        company: 'Photosnap',
        logo: img1,
        new: true,
        featured: true,
        position: 'Senior Frontend Developer',
        role: 'Frontend',
        level: 'Senior',
        postedAt: '1d ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['HTML', 'CSS', 'JavaScript'],
        tools: [],
    },
    {
        id: 2,
        company: 'Manage',
        logo: img2,
        new: true,
        featured: true,
        position: 'Fullstack Developer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '1d ago',
        contract: 'Part Time',
        location: 'Remote',
        languages: ['Python'],
        tools: ['React'],
    },
    {
        id: 3,
        company: 'Account',
        logo: img3,
        new: true,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2d ago',
        contract: 'Part Time',
        location: 'USA Only',
        languages: ['JavaScript'],
        tools: ['React', 'Sass'],
    },
    {
        id: 4,
        company: 'MyHome',
        logo: img4,
        new: false,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '5d ago',
        contract: 'Contract',
        location: 'USA Only',
        languages: ['CSS', 'JavaScript'],
        tools: [],
    },
    {
        id: 5,
        company: 'Loop Studios',
        logo: img5,
        new: false,
        featured: false,
        position: 'Software Engineer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '1w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['JavaScript'],
        tools: ['Ruby', 'Sass'],
    },
    {
        id: 6,
        company: 'FaceIt',
        logo: img6,
        new: false,
        featured: false,
        position: 'Junior Backend Developer',
        role: 'Backend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'UK Only',
        languages: ['Ruby'],
        tools: ['RoR'],
    },
    {
        id: 7,
        company: 'Shortly',
        logo: img7,
        new: false,
        featured: false,
        position: 'Junior Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['HTML', 'JavaScript'],
        tools: ['Sass'],
    },
    {
        id: 8,
        company: 'Insure',
        logo: img8,
        new: false,
        featured: false,
        position: 'Junior Frontend Developer',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '2w ago',
        contract: 'Full Time',
        location: 'USA Only',
        languages: ['JavaScript'],
        tools: ['Vue', 'Sass'],
    },
    {
        id: 9,
        company: 'Eyecam Co.',
        logo: img9,
        new: false,
        featured: false,
        position: 'Full Stack Engineer',
        role: 'Fullstack',
        level: 'Midweight',
        postedAt: '3w ago',
        contract: 'Full Time',
        location: 'Worldwide',
        languages: ['JavaScript', 'Python'],
        tools: ['Django'],
    },
    {
        id: 10,
        company: 'The Air Filter Company',
        logo: img10,
        new: false,
        featured: false,
        position: 'Front-end Dev',
        role: 'Frontend',
        level: 'Junior',
        postedAt: '1mo ago',
        contract: 'Part Time',
        location: 'Worldwide',
        languages: ['JavaScript'],
        tools: ['React', 'Sass'],
    },
];