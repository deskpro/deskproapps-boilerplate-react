# Setting up Travis

In this section you will learn how to setup [Travis](https://travis-ci.org/) as your continuous integration and build server

## Setting up automated testing

Here at DeskPRO Apps we use a combination of GitHub and Travis to build and test our applications.

If you are not used to Travis, which is free to use for non-commercial projects, follow this easy guide (adapted from https://docs.travis-ci.com/user/getting-started/)
 
 1. Sign in to [Travis CI](https://travis-ci.org/auth) with your GitHub account, accepting the GitHub [access permissions confirmation](https://docs.travis-ci.com/user/github-oauth-scopes).
 2. Once you’re signed in, and we’ve synchronized your GitHub repositories, go to your [profile page](https://travis-ci.org/profile) and enable Travis CI for the open source repository you want to build
 3. Add the following `.travis.yml` file to your repository to tell Travis CI what to build:
 
 ```yaml
language: node_js
node_js:
  - '6'
install:
  - npm install && npm install @deskproapps/dpat
script:
  - npm run test && npm run package
 ```
 
 4. Add the .travis.yml file to git, commit and push, to trigger a Travis CI build.
 5. Check the [build status](https://travis-ci.org/) page to see if your build [passes or fails](https://docs.travis-ci.com/user/customizing-the-build/#Breaking-the-Build), according to the return status of the build command.
 
## Setting up Github deployments
 
We manage our releases on Github and we use [Travis](https://travis-ci.org/) to build our release artifacts for us. This is how your `.travis.yml` file should look like:

```yaml
language: node_js
node_js:
   - '6'
install:
   - npm install && npm install @deskproapps/dpat
script:
   - npm run test && npm run package
deploy:
  provider: releases
  api_key:
    secure: YOUR_API_KEY_ENCRYPTED
  file: dist/app.zip
  skip_cleanup: true
  on:
    tags: true

```

To obtain `YOUR_API_KEY_ENCRYPTED` it is best to first install the [Travis CLI client](https://github.com/travis-ci/travis.rb#installation), then run 
    
    travis setup releases
    
You will be asked to a series of questions, make sure you answer yes when you are asked if you want to encrypt your API key:
    
```
    Username: <your github username>
    Password for <your github username>: **************
    File to Upload: dist/app.zip
    Deploy only from <your-app-repository>? |yes| 
    Deploy from master branch? |yes| no
    Encrypt API key? |yes| 
```    

Add the .travis.yml file to git, commit and push. 

Follow the [official GitHub guide](https://help.github.com/articles/creating-releases/) to creating a release and once your release is published, Travis will be notified
that a new release tag has been created and will start building your application's release artifact. When it's done your release will have a new `app.zip` file ready for distribution!