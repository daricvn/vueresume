import ResumeSection from '@/models/ResumeSection';
import { ContentType } from '@/models/ResumeContent';

export const MyHistory: ResumeSection[]=[
    { id: 1, title:'About Me', contents:[
        { type: ContentType.Text, icon: null, color : null, data:'Some text in here', desc:'', length : 0, child: null, style: null }
    ]},
    { id: 2, title:'Experience', contents:[
        { type: ContentType.Timeline, icon: null, color : null, data:'', desc:'', length : 0, child: [
            { type: ContentType.TimelineItem, icon: null, color : null, data:'Event 1', desc:'Some description', length: '5-2018', child: null, style: null},
            { type: ContentType.TimelineItem, icon: null, color : null, data:'Event 2', desc:'Some description', length: '1-2019', child: null, style: null},
            { type: ContentType.TimelineItem, icon: 'star', color : 'warning', data:'Event 3', desc:'Some important notes', length: '4-2019', child: null, style: null}
        ], style: null }
    ]},
    { id: 3, title:'Project', contents:[
        { type: ContentType.Text, data:'Some text in here 1', desc:'', length : 0, child: null, style: null },
        { type: ContentType.IconText, icon:'star', data:'Some text in here 2'},
        { type: ContentType.Title, data:'Title', desc:'', length : '2014', child: null, style: null },
        { type: ContentType.Line, data:'', length: 4 },
        { type: ContentType.Text, data:'Some other text in here', desc:'', length : 10, child: null, style: null }
    ]},
    { id: 4, title:'Other section', contents:[
        { type: ContentType.Text, data:'Some text in here 1', desc:'', length : 0, child: null, style: null },
        { type: ContentType.IconText, icon:'star', data:'Some text in here 2'},
        { type: ContentType.IconText, icon:'home', data:'Some text in here 3'},
        { type: ContentType.IconText, icon:'call', data:'Some text in here 4'}
    ]}
]