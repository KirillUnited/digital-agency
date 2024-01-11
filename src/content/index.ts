export const navbar = [
    {
        label: 'Портфолио',
        route: '/projects'
    },
    {
        label: 'Услуги',
        route: '/features'
    },
    {
        label: 'Технологии',
        route: '/tech'
    },
    {
        label: 'О нас',
        route: '/about'
    },
    {
        label: 'Вопросы',
        route: '/faq'
    },
];

export const contacts = [
    {
        name: 'email',
        title: 'Email me at',
        href: 'mailto:contact@website.com',
        label: 'contact@website.com'
    },
    {
        name: 'phone',
        title: 'Call us',
        href: 'tel:0927627728525',
        label: '0927 6277 28525'
    },
];

export const site = {
    home: {
        hero: {
            pageTitle: 'Home',
            title: 'Разработка современных решений для бизнеса',
            description: 'Совмещая современный стиль, передовые технологии и инновационные подходы в интернет-маркетинге, мы разрабатываем эффективные средства для продвижения вашего бизнеса в онлайн-пространстве.',
            image: '/images/hero.png'
        },
        steps: [
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
        ],
        projects: [
            {
                title: 'Дизайн сайта для Renovation Group',
                description: 'Новый стильный сайт Renovation Group - оцените онлайн!',
                cover: '/images/project-1.png',
                link: '/'
            },
            {
                title: 'Таргетированная и контекстная реклама',
                description: 'Создание таргетированных и контекстных рекламных кампаний нацеленных на интересы вашей целевой аудитории.',
                cover: '/images/project-2.png',
                link: '/'
            },
            {
                title: 'Разработка современных решений для бизнеса',
                description: 'Создание и оптимизация вашего сайта для эффективного развития в онлайн-среде.',
                cover: '/images/project-3.png',
                link: '/'
            },
            {
                title: 'Дизайн',
                description: 'Создание адаптивного дизайна направленного на вашу целевую аудиторию',
                cover: '/images/project-1.png',
                link: '/'
            },
            {
                title: 'SEO-оптимизация',
                description: 'Оптимизация сайта с учетом потребностей вашей целевой аудитории для максимальной эффективности в поисковых системах.',
                cover: '/images/project-2.png',
                link: '/'
            }
        ]
    }
}