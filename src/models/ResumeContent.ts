export default class ResumeContent{
    type: ContentType = ContentType.Text;
    data: String ='';
    child: ResumeContent | undefined;
    style: String | undefined;
}

export enum ContentType {
    Text, IconText, Bar, Column
}