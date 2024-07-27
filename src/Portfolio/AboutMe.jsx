import React from 'react';

import PortfolioLogo from '../assets/codewithmat.png';

import ProfilePhoto from '../assets/profile-photo.jpg';

import PythonLogo from '../assets/python.svg';
import BootstrapLogo from '../assets/bootstrap.svg';
import JavaScriptLogo from '../assets/js.svg';
import JavaLogo from '../assets/java.svg';
import ReactLogo from '../assets/logo-react.svg';
import ViteLogo from '../assets/vite.svg';

import BantayKape from '../assets/bantaykape.png';
import BWRS from '../assets/droplet.svg';

import DMMMSUXCCS from '../assets/dmmmsuxccs.png';
import TESDA from '../assets/tesda.png';
import PCLU from '../assets/pclu.png';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from'react-icons/fa';

const iconProperties = {
    color: [
        '#3b5998',
        '#d62976',
        '#0077b5',
        'white'
    ],
    size: 40
}

const AboutMe = {
    profile_name: 'Ralph Matthew Aquino',
    website: 'CodeWithMat',
    profile_photos: [
        PortfolioLogo,
        ProfilePhoto
    ],

    profile_summary: `
        I am an Aspiring Machine Learning Engineer passionate with data analysis and
        AI development. I am also flexible in Web and Mobile App Development 
        eager to contribute to a dynamic and challenging working environment.
    `,

    age: '23',
    email: 'akoaymatsu@gmail.com',
    phone_number: '0968-351-3963',
    location: 'La Union, Philippines',

    education: [
        {
            school: 'PCLU',
            address: 'Agoo, La Union',
            year_graduated: '2019',
            track: 'STEM (Science Technoloy Engineering and Mathematics)',
            school_logo: PCLU
        },
        {
            school: 'TESDA RTC-I',
            address: 'San Fernando City, La Union',
            year_graduated: '2020',
            track: 'Computer System Servicing',
            school_logo: TESDA
        },
        {
            school: 'DMMMSU-SLUC',
            address: 'Agoo, La Union',
            year_graduated: '2024',
            track: 'Bachelor of Science in Computer Science',
            school_logo: DMMMSUXCCS
        },
    ],

    social_links: [
        {
            platform: 'Facebook',
            url: 'https://www.facebook.com/matth.aquino.9',
            icon: <FaFacebookSquare 
                        size={iconProperties.size} 
                        color={iconProperties.color[0]}
                    />
        },
        {
            platform: 'Instagram',
            url: 'https://www.instagram.com/akoaymatsu/',
            icon: <FaInstagramSquare 
                        size={iconProperties.size} 
                        color={iconProperties.color[1]}
                  />
        },
        {
            platform: 'LinkedIn',
            url: 'https://www.linkedin.com/in/matthew-aquino-9854a0198/',
            icon: <FaLinkedin 
                    size={iconProperties.size}
                    color={iconProperties.color[2]}
                    />
            
        },
        {
            platform: 'GitHub',
            url: 'https://github.com/akoaymatsu',
            icon: <FaGithubSquare 
                    size={iconProperties.size}
                    color={iconProperties.color[3]}
                  />
        }
    ],
    header_items: [
        'Education',
        'Tech Stack',
        'Projects',
        'Contact'
    ],

    tech_stack: [
        {
            tech: 'Python',
            description: 'I am proficient in Python programming and have extensive experience with machine learning algorithms, data analysis, and scripting.',
            tech_logo: PythonLogo,
        },

        {
            tech: 'JavaScript',
            description: 'I am adept at JavaScript programming and have hands-on experience with modern JavaScript features and asynchronous programming.',
            tech_logo: JavaScriptLogo,
        },

        {
            tech: 'Java',
            description: 'I have experience with Java programming, including developing Android applications and working with Java frameworks for various development projects.',
            tech_logo: JavaLogo,
        },

        {
            tech: 'React',
            description:  'I am familiar with React for building dynamic and interactive user interfaces, leveraging its component-based architecture for efficient development.',
            tech_logo: ReactLogo,
        },
        {
            tech: 'Bootstrap',
            description: 'I use Bootstrap for designing responsive web interfaces, utilizing its pre-built components and grid system to create user-friendly and visually appealing layouts.',
            tech_logo: BootstrapLogo,
        },
        {
            tech: 'Vite',
            description: 'I work with Vite to optimize and speed up the development workflow, leveraging its fast build times and modern development features for efficient frontend development.',
            tech_logo: ViteLogo,
        }
    ],

    projects: [
        {
            title: 'BantayKape',
            year: '2024',
            description: 'A mobile application designed to detect pests and diseases in coffee crops as well as provide integrated management solutions',
            image: BantayKape
        },
        {
            title: 'Bani Water Refilling Station Sales and Delivery System',
            year: '2024',
            description: 'A web application made for Bani Water Refilling Station\'s day-to-day sales and delivery',
            image: BWRS
        },
    ],

    other_interests: [
        {
            hobby: 'Watch',
            description: 'I enjoy watching movies, TV shows, documentaries, and even Anime',
            categories: [
                'RomCom', 
                'Mystery', 
                'Inception', 
                'Supernatural'
            ]
        },
        {
            hobby: 'Physical Activities',
            description: 'I enjoy participating in different kinds of physical activities',
            categories: [
                'Volleyball', 
                'Basketball', 
                'Badminton', 
                'Chess'
            ]
        },
        {
            hobby: 'Listen to Music',
            description: 'I enjoy listening to various genres of music',
            categories: [
                'Rock', 
                'Pop', 
                'Hip-Hop', 
                'Classical'
            ]
        }
    ]
       
}

export default AboutMe