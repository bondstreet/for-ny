#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi
echo 'Deploying to gh-pages...'
npm run clean || exit 0
npm run build
git init
git config user.name "Travis-CI"
git config user.email "travis@bondstreet.com"
npm run travis:deploy

