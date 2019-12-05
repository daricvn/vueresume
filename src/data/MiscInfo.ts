import ResumeContent, { ContentType } from '@/models/ResumeContent';

export const MiscInfo: ResumeContent[]=[
    { type: ContentType.Text, color:'text-white', data:'Skills:', child: [
        { type: ContentType.ChipList, data:'', child:[
            { type: ContentType.Chip, data:'English', length:'12px', icon:'star', style:'glossy', desc:'primary', color:'white'},
            { type: ContentType.Chip, data:'Other 1', length:'12px', style:'glossy', desc:'primary', color:'white'},
            { type: ContentType.Chip, data:'Other 2', length:'12px', style:'glossy', desc:'primary', color:'white'},
            { type: ContentType.Chip, data:'Other 3', length:'12px', style:'glossy', desc:'primary', color:'white'}
        ]}
    ], skipChild: true },
    
    { type: ContentType.Text, color:'text-white', data:'Knowledge:', child: [
        { type: ContentType.ChipList, data:'', child:[
            { type: ContentType.Chip, data:'Ability 1', length:'12px', desc:'primary', color:'white'},
            { type: ContentType.Chip, data:'Ability 2', length:'12px', desc:'primary', color:'white'},
            { type: ContentType.Chip, data:'Ability 3', length:'12px', desc:'primary', color:'white'}
        ]}]
    , skipChild: true },
    { type: ContentType.Text, color:'text-white', data:'Interests:', child: [
            { type: ContentType.Chip, data:'Interest 1', length:'12px', icon:'star', style:'outline', color:'white'},
            { type: ContentType.Chip, data:'Interest 2', length:'12px',icon:'home', style:'outline', color:'white'},
            { type: ContentType.Chip, data:'Interest 3', length:'12px',icon:'call', style:'outline', color:'white'}
        ]
    , skipChild: true }
]