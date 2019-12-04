import ResumeSection from '@/models/ResumeSection';
import { ContentType } from '@/models/ResumeContent';

export const MyHistory: ResumeSection[]=[
    { id: 1, title:'Section 1', contents:[
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here', desc:'', length : 0, child: null, style: null }
    ]},
    { id: 2, title:'Section 2', contents:[
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 1', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 2', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Timeline, icon: null, color : null, data:'', desc:'', length : 0, child: [
            { type: ContentType.TimelineItem, icon: null, color : null, data:'Some achievement', desc:'Some description', length: '1-2019', child: null, style: null}
        ], style: null }
    ]},
    { id: 3, title:'Section 3', contents:[
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 1', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 2', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 3', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here 4', desc:'', length : 0, child: null, style: null },
        { type: ContentType.Column, icon: null, color : null, data:'', desc:'', length : 0, child: [ 
            { type: ContentType.Bar, icon: null, color : null, data:'English', desc:'', length : 80, child: null, style: null },
            { type: ContentType.Bar, icon: null, color : null, data:'C#', desc:'', length : 85, child: null, style: null }
        ], style: null }
    ]}
]