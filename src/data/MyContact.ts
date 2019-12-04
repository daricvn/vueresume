import ResumeContact from '@/models/ResumeContact';

export const MyContact: ResumeContact={
    name:'Darick Nguyen',
    addressLines:[],
    phone:'',
    email:{ icon: null, alias: null, ref:'mailto:daricvn@gmail.com' },
    socialNetworks:[
        { icon: 'facebook', alias: 'Facebook', ref:'https://fb.com/daricvn' },
        { icon: 'linkedin', alias:'LinkedIn', ref:'https://www.linkedin.com/in/daricvn'}
    ]
}