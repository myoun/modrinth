export type SimpleProject = {
    project_id : string,
    project_type : string,
    slug : string,
    author : string,
    title : string,
    description : string,
    categories : Array<string>,
    versions : Array<string>,
    downloads : number,
    follows : number,
    icon_url : string,
    date_created : string,
    date_modified : string,
    latest_version : string,
    license : string,
    client_side : string,
    server_side : string,
    gallery : Array<string>
}

export type Project = {
    id : string,
    project_type : string,
    slug : string,
    author : string,
    title : string,
    description : string,
    categories : Array<string>,
    versions : Array<string>,
    downloads : number,
    followers : number,
    icon_url : string,
    latest_version : string,
    client_side : string,
    server_side : string,
    gallery : Array<Artwork>,
    body : string,
    issues_url : string,
    source_url : string,
    wiki_url : string,
    discord_url : string,
    donation_urls : Array<Donation>,
    team : string,
    body_url : null,
    moderator_message : null,
    published : string,
    updated : string,
    status : string,
    license : License,
}

type License = {
    id : string,
    name : string,
    url : string
}

type Donation = {
    id : string,
    platform : string,
    url : string
}

type Artwork = {
    url : string,
    featured : boolean,
    title : string,
    description : string,
    created : string
}