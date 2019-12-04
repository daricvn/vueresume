export default class ResumeContent{
    type: ContentType = ContentType.Text;
    data: String ='';
    length: Number = 0;
    child: ResumeContent[] | undefined | null;
    style: String | undefined | null;
}

export enum ContentType {
    Text, IconText, Bar, Column, Image, ImageText
}