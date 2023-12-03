export interface TagProp {
    id: string,
    name: string,
    topic: string
}

export interface ProjectProp {
    id: string,
    preTitle: string | null | undefined;
    title: string,
    subtitle: string | null | undefined;
    descriptionShort: string | null | undefined;
    descriptionLong: string | null | undefined;
    tags: TagProp[],
    dateCompleted: string,
    dateUpdated: string | null | undefined;
    onGoing: boolean,
    link: string | null | undefined;
    imageSrc: string,
    imageAlt: string,
    role: string
}

export interface ProjectCardProps {
    project: ProjectProp
}


