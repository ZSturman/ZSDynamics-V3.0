export interface TagProp {
    id: string,
    name: string,
    topic: string
}

export interface ProjectImageProp {
    id: string,
    url: string,
    description?: string
}

export interface ProjectProp {
    id: string,
    title: string,
    description: string,
    tags: TagProp[],
    dateCompleted: string,
    dateUpdated: string,
    onGoing: boolean,
    link?: string,
    repo?: string,
    images: ProjectImageProp[],
    role: string,
    technologyStack: string[]
}

export interface ProjectCardProps {
    project: ProjectProp
}