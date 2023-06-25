const { Octokit } = require("@octokit/rest");
const githubToken = process.env.githubToken;
const octokit = new Octokit({ auth: githubToken });

async function getRepositories() {
  try {
    const response = await octokit.repos.listForAuthenticatedUser({
      per_page: 120,
    });
    const repositories = response.data.map(repositorieReponsoToRepoPreview);
    return repositories;
  } catch (error) {
    console.error("Error retrieving repositories:", error.message);
    throw error;
  }
}

function repositorieReponsoToRepoPreview(repositorie) {
  return {
    id: repositorie.id,
    name: repositorie.name,
    url: repositorie.html_url,
    description: repositorie.description,
    language: repositorie.language,
    topics: repositorie.topic,
  };
}

module.exports = { getRepositories };
