import ResumeContent, { ContentType } from '@/models/ResumeContent';

export const Skills: ResumeContent[]=[
    { type: ContentType.Title, color:'text-white', data:'Skills:', child: [
        { type: ContentType.ChipList, data:'', child:[
            { type: ContentType.Chip, data:'English', icon:'star', desc:'white', color:'orange'},
            { type: ContentType.Chip, data:'Other 1', desc:'white', color:'blue'},
            { type: ContentType.Chip, data:'Other 2', desc:'white', color:'blue'},
            { type: ContentType.Chip, data:'Other 3', desc:'white', color:'blue'}
        ]}
    ], skipChild: true }
]