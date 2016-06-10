#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi
echo 'Deploying to gh-pages...'
npm run clean || exit 0
npm run build || exit 0
cd dist/fornewyork
git init
git config user.name "Travis-CI"
git config user.email "travis@bondstreet.com"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/bondstreet/for-ny.git" master:gh-pages > /dev/null 2>&1
