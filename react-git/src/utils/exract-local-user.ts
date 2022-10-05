import {GitHubUser, LocalGitHubUser} from "../@types/user";

export const extractLocalUser = (user: GitHubUser): LocalGitHubUser => ({
  login: user.login,
  avatar_url: user.avatar_url,
  name: user.name,
  bio: user.bio,
  blog: user.blog,
  company: user.company,
  created_at: user.created_at,
  followers: user.followers,
  following: user.following,
  location: user.location,
  public_repos: user.public_repos,
  twitter_username: user.twitter_username,
});
