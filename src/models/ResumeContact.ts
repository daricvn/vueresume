export default class ResumeContact{
    name: String | undefined;
    avatar?: Link | undefined;
    addressLines: String[] | String | undefined | null;
    socialNetworks?: Link[] | Link | undefined | null;
    email?: Link[] | Link | undefined | null;
    phone?: String[] | String | undefined;
    otherLinks?: Link[] | Link | undefined;
    skipChild?: Boolean | undefined;
}

export class Link{
    alias?: String | undefined | null;
    ref: String | undefined | null;
    icon?: String | undefined | null;
}