import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

//  this api service used for fetching git list
export const getPublicGists = () => octokit.gists.listPublic()

//  this api service call when get username in props then fetch the result according to it
export const getGistForUser = username =>  octokit.gists.listForUser({ username });