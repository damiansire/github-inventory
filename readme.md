# Initial Project Configuration

This repository requires initial configurations for proper functionality. Follow the steps below to set up the project correctly:

## Step 1: Add Personal Access Token to the .env file

1. Obtain a Personal Access Token (PAT) from [this link](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creación-de-un-personal-access-token-classic).
2. Create a .env file in the root of the project.
3. Add your Personal Access Token to the .env file.

```shell
GITHUBTOKEN=your_personal_access_token
```

Make sure to replace your_personal_access_token with the token you obtained in the previous step.

**¡Important!** Do not share or make your Personal Access Token public, as it could compromise the security of your GitHub account.

## Project Execution

Follow these steps to run the project locally:

1. Install project dependencies by running the following command in your terminal:

```shell
npm install
```

2. Start the application with the following command:

```shell
npm start
```

This will start the execution of the application, and you will be able to access it through your browser or as per the specific project instructions.
