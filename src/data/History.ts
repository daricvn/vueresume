import ResumeSection from '@/models/ResumeSection';
import { ContentType } from '@/models/ResumeContent';

export const MyHistory: ResumeSection[]=[
    { id: 1, title:'Section 1', contents:[
        { type: ContentType.Text, data:'Some text in here', length : 0, child: null, style: null }
    ]},
    { id: 2, title:'Section 2', contents:[
        { type: ContentType.Text, data:'Some text in here 1', length : 0, child: null, style: null },
        { type: ContentType.Text, data:'Some text in here 2', length : 0, child: null, style: null },
        { type: ContentType.Text, data:'Some text in here 3', length : 0, child: null, style: null }
    ]},
    { id: 3, title:'Section 3', contents:[
        { type: ContentType.Text, data:'Some text in here 1', length : 0, child: null, style: null },
        { type: ContentType.Text, data:'Some text in here 2', length : 0, child: null, style: null },
        { type: ContentType.Text, data:'Some text in here 3', length : 0, child: null, style: null },
        { type: ContentType.Text, data:'Some text in here 4', length : 0, child: null, style: null },
        { type: ContentType.Column, data:'', length : 0, child: [ 
            { type: ContentType.Bar, data:'English', length : 80, child: null, style: null },
            { type: ContentType.Bar, data:'English', length : 80, child: null, style: null }
        ], style: null }
    ]}
]