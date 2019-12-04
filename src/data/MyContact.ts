import ResumeContact from '@/models/ResumeContact';

export const MyContact: ResumeContact={
    name:'Darick Nguyen',
    addressLines:[],
    phone:'',
    email:{ icon: null, alias: null, ref:'mailto:daricvn@gmail.com' },
    socialNetworks:[
        { icon: 'fab fa-facebook', alias: 'Facebook', ref:'https://fb.com/daricvn' },
        { icon: 'fab fa-linkedin', alias: 'LinkedIn', ref:'https://www.linkedin.com/in/daricvn'}
    ]
}