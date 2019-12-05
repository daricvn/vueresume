import ResumeContact from '@/models/ResumeContact';

export const MyContact: ResumeContact={
    name:'Your Name',
    addressLines:[
        "Street",
        "State",
        "Country"
    ],
    phone:'+phone number',
    email:{ icon: null, alias: 'your@email.com', ref:'mailto:your@email.com' },
    socialNetworks:[
        { icon: 'fab fa-facebook', alias: 'Facebook', ref:'https://fb.com/yourfacebook' },
        { icon: 'fab fa-linkedin', alias: 'LinkedIn', ref:'https://www.linkedin.com/in/yourlinkedin'}
    ],
    otherLinks:[
        { icon: 'fab fa-github', alias: 'GitHub', ref:'https://github.com/yourgithub'}
    ]
}