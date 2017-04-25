## Tensor-UI

User Interface for Tensor

## Introduction
(Describe the usage of the Tensor briefly)

## Features
(List features of the tensor in this space)

## Table of Content
- [Introduction](#introduction)
- [Features](#features)
- [Install](#install)
- [License](#license)

## Dependencies

What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `4.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

Once you have those, you should install these globals with `npm install --global`:
* `webpack` (`npm install --global webpack`)
* `webpack-dev-server` (`npm install --global webpack-dev-server`)
* `karma` (`npm install --global karma-cli`)
* `protractor` (`npm install --global protractor`)
* `typescript` (`npm install --global typescript`)
* `typedoc` (`npm install --global typedoc`)

## Installing
---
* `clone` this repo
* `npm install webpack-dev-server rimraf webpack -g` to install required global dependencies
* `typedoc -json typedoc.json`
* `npm install` to install all dependencies or `yarn`
* `npm run server` to start the dev server in another tab

# License
Copyright 2017 Pearson, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.