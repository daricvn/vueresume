export default class ResumeContent{
    type: ContentType = ContentType.Text;
    icon?: String | undefined | null;
    color?: String | undefined | null;
    bgColor?: String | undefined | null;
    data: String ='';
    desc?: String | undefined ='';
    length?: Number | String | null = 0;
    child?: ResumeContent[] | undefined | null;
    style?: String | undefined | null;
    skipChild?: Boolean | undefined;
}

export enum ContentType {
    Text, IconText, Bar, Column, Image, ImageText, Timeline, TimelineItem,
    Chip, ChipList, Title, Line
}