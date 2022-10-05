import {GitHubUser} from "../@types/user";

export const isGithubUser = (user: any): user is GitHubUser => 'id' in user;
