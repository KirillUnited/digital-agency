export const site = {
    home: {
        hero: {
            pageTitle: 'Home',
            title: 'Разработка современных решений для бизнеса',
            description: 'Совмещая современный стиль, передовые технологии и инновационные подходы в интернет-маркетинге, мы разрабатываем эффективные средства для продвижения вашего бизнеса в онлайн-пространстве.',
            image: '/images/hero.png'
        },
    },
    about: {
        hero: {
            pageTitle: 'About Us',
            title: 'Our designs solve problems',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            image: '/images/about-hero.png',
            link: ''
        },
        aboutus: {
            title: 'Who we are',
            image: '/images/about-about-us.png',
            content: [
                {
                    title: 'Goal focussed',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                },
                {
                    title: 'Continuous improvement',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                }
            ]
        },
        mission: {
            content: [
                {
                    subtitle: 'Our Mission ',
                    title: 'Inspire, Innovate, Share',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    image: '/images/about-mission-1.png',
                    link: ''
                },
                {
                    subtitle: 'Our Vision',
                    title: 'Laser focus',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    image: '/images/about-mission-2.png',
                    link: ''
                },
            ]
        },
        benefits: {
            title: 'The benefits of working with us',
            content: [
                {
                    image: '1',
                    title: 'Customize with ease',
                    description: 'Odio id qui corrupti ad neque odit nesciunt itaque. Assumenda ut velit ipsam excepturi temporibus doloribus temporibus. Ab nesciunt necessitatibus eum. Ut itaque et eos. Officia laudantium a placeat laborum iure.'
                },
                {
                    image: '2',
                    title: 'Perfectly Responsive',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.'
                },
                {
                    image: '3',
                    title: 'Friendly Support',
                    description: 'Fugit autem illo praesentium iure quo. Dolorem possimus vitae facere.'
                }
            ]
        },
    },
    features: {
        hero: {
            pageTitle: 'Технологии',
            title: 'All the features you need',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: '/images/features-hero.png'
        },
        content: [
            {
                subtitle: 'Use Client-first',
                title: 'Top agencies and freelancers around the world use Client-first',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                image: '/images/feature-1.png',
                link: ''
            },
            {
                subtitle: 'Free Revision Rounds',
                title: 'Get free Revisions and one week of free maintenance',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-2.png',
                link: ''
            },
            {
                subtitle: '24/7 Support',
                title: 'Working with us, you will be getting 24/7 priority support',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-3.png',
                link: ''
            },
            {
                subtitle: 'Quick Delivery',
                title: 'Guranteed 1 week delivery for standard five pager website',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                image: '/images/feature-4.png',
                link: ''
            },
        ]
    },
};

export const navbar = [
    {
        label: 'Портфолио',
        route: '/portfolio',
        menu: 'categories'
    },
    {
        label: 'Услуги',
        route: '/pricing',
        menu: 'categories'
    },
    {
        label: 'Технологии',
        route: '/features'
    },
    {
        label: 'О нас',
        route: '/about'
    },
    {
        label: 'Вопросы',
        route: '/#faq'
    },
];

export const contacts = [
    {
        name: 'email',
        title: 'Пишите нам',
        href: 'mailto:contact@website.com',
        label: 'contact@website.com'
    },
    {
        name: 'phone',
        title: 'Позвоните нам',
        href: 'tel:0927627728525',
        label: '0927 6277 28525'
    },
];

export const steps = [
    {
        step: '01',
        title: 'Планирование',
        description: 'Ваши цели в бизнесе и планы по его цифровой трансформации.'
    },
    {
        step: '02',
        title: 'Дизайн',
        description: 'Создание адаптивного дизайна направленного на вашу целевую аудиторию'
    },
    {
        step: '03',
        title: 'Разработка',
        description: 'Создание и оптимизация вашего сайта для эффективного развития в онлайн-среде.'
    },
    {
        step: '04',
        title: 'Тестирование',
        description: 'Тщательное тестирование вашего сайта для обеспечения его эффективной работы в онлайн-среде.'
    },
    {
        step: '05',
        title: 'SEO-оптимизация',
        description: 'Оптимизация сайта с учетом потребностей вашей целевой аудитории для максимальной эффективности в поисковых системах.'
    },
    {
        step: '06',
        title: 'Реклама',
        description: 'Создание таргетированных и контекстных рекламных кампаний нацеленных на интересы вашей целевой аудитории.'
    },
];

export const projects = [
    {
        title: 'Дизайн сайта для Renovation Group',
        description: 'Новый стильный сайт Renovation Group - оцените онлайн!',
        thumbnail: '/images/project-1.png',
        link: '/'
    },
    {
        title: 'Таргетированная и контекстная реклама',
        description: 'Создание таргетированных и контекстных рекламных кампаний нацеленных на интересы вашей целевой аудитории.',
        thumbnail: '/images/project-2.png',
        link: '/'
    },
    {
        title: 'Разработка современных решений для бизнеса',
        description: 'Создание и оптимизация вашего сайта для эффективного развития в онлайн-среде.',
        thumbnail: '/images/project-3.png',
        link: '/'
    },
    {
        title: 'Дизайн',
        description: 'Создание адаптивного дизайна направленного на вашу целевую аудиторию',
        thumbnail: '/images/project-1.png',
        link: '/'
    },
    {
        title: 'SEO-оптимизация',
        description: 'Оптимизация сайта с учетом потребностей вашей целевой аудитории для максимальной эффективности в поисковых системах.',
        thumbnail: '/images/project-2.png',
        link: '/'
    }
];

export const marketing = {
    title: 'Реализуем проекты с надежными технологиями и эффективным маркетингом.',
    data: [
        {
            title: 'Контекстная реклама',
            description: 'Контекстная реклама — это эффективный инструмент привлечения внимания к вашему бизнесу. Текстовые, графические и видеообъявления появляются перед пользователями, когда они ищут информацию или интересуются определенной темой в сети. Обеспечьте максимальную видимость вашего предложения с нашей контекстной рекламой.',
            image: '/images/marketing-1.png',
            link: '/'
        },
        {
            title: 'Таргетированная реклама',
            description: 'Таргетированная реклама – это эффективный метод продвижения в интернете. Мы предлагаем возможность выводить вашу рекламу перед определенной целевой аудиторией, установив параметры на социальных сетях, сайтах или в приложениях. Максимизируйте воздействие на вашу целевую аудиторию – обратитесь к нам для настройки успешной таргетированной рекламной кампании',
            image: '/images/marketing-2.png',
            link: '/'
        },
    ]
};

export const faq = [
    {
        title: 'How much time does it take?',
        description: 'Dignissimos libero placeat nesciunt quaerat quia harum. Itaque reprehenderit pariatur suscipit fuga. Amet nihil repellendus iste. Corrupti est eveniet.'
    },
    {
        title: 'What is your class naming convention?',
        description: 'Nam et corporis ipsam. Aut eveniet sit ipsa error voluptatem. Tempora repudiandae rerum.'
    },
    {
        title: 'How do you communicate?',
        description: 'Quod qui adipisci sint libero harum cupiditate provident. Qui est fugit amet. Quo nisi qui quasi pariatur et odio. Magnam facilis magnam voluptas laborum aut iure maxime. A harum corrupti dolorem enim est qui. Omnis sint ipsam.'
    },
    {
        title: 'I have a bigger project. Can you handle it?',
        description: 'Aliquid sed eligendi incidunt ea quo vel officiis velit dolores. Dolor et enim maiores. Doloribus ipsum at et inventore occaecati recusandae perspiciatis quae. Dolore voluptas quia soluta ea delectus non eaque ut. Et laudantium asperiores pariatur perspiciatis officiis sed voluptatem consequatur.'
    },
    {
        title: 'What is your class naming convention?',
        description: 'Voluptatem repellendus explicabo impedit voluptas cumque et soluta quis ad. Quibusdam unde debitis itaque. Officia illo accusamus molestiae non cupiditate voluptas nisi est.'
    },
];

export const pricing = [
    {
        price: '$50+',
        subtitle: '',
        title: 'аудит сайта',
        description: 'Beatae reiciendis necessitatibus dolor saepe.',
        features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
        link: '/'
    },
    {
        price: '$200+',
        subtitle: 'Multi Design',
        title: 'дизайн сайта',
        description: 'Adipisci ipsa temporibus ea.',
        variant: 'primary',
        features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
        link: '/'
    },
    {
        price: '$350',
        subtitle: 'Multi Page',
        title: 'разработка сайта',
        description: 'Hic quo et quae beatae dicta doloremque quisquam ut.',
        features: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
        link: '/'
    },
    {
        price: '$200',
        subtitle: 'Per page',
        title: 'разработка лендинга',
        description: 'Unde ut aliquam odio ut omnis.',
        features: [],
        link: '/'
    },
    {
        price: '$200',
        subtitle: '',
        title: 'контакстная реклама',
        description: 'Atque repellat aut et.',
        link: '/'
    },
    {
        price: '$200',
        subtitle: '',
        title: 'таргетированая реклама',
        description: 'Quod totam voluptatum.',
        link: '/'
    },
    {
        price: '$150',
        subtitle: '',
        title: 'SEO продвижение',
        description: 'Rem nesciunt architecto itaque natus culpa doloremque neque et voluptatibus.',
        link: '/'
    },
    {
        price: '$200',
        subtitle: '',
        title: 'SMM (ведение профилей в соцсетях)',
        description: 'Laboriosam ex ut.',
        link: '/'
    },
]

export const brands = {
    title: 'Finsweet Users',
    count: '100.000+',
    list: [
        '/images/brand-1.png',
        '/images/brand-2.png',
        '/images/brand-3.png',
        '/images/brand-4.png',
        '/images/brand-5.png',
    ]
}