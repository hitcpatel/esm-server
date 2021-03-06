# EAO Project Information & Collaboration System (EPIC)

EPIC is the BC Environmental Assessment Office's web-based project information and collaboration system, a tool to improve the efficiency and transparency of the provincial environmental assessment process by providing citizens and stakeholders with more intuitive access to project data and information.

Built through the Office's EAO Systems Modernization Project (ESM), in alignment with and as a pathfinding project of the BCDevExhange collaboration between the Office of the Chief Information Officer and Government Communication and Public Engagement's Government Digital Experience teams, this application is a tool to support the work of EAO staff, project proponents, and other stakeholders as environmental assessments are conducted.

## Features

The features provided by the web-based EPIC application include:

* Greater transparency, understanding and public participation in the Environmental Assessment (EA) process
* Comprehensive project details, status, important dates, contact information, and other relevant information
* Public-facing view of documents related to proposed and ongoing development projects
* Maps showing exactly where projects are located within the province

## Browser Compatibility

* IE 11/Edge
* Safari (evergreen)
* Chrome (evergreen)
* Firefox (evergreen)


## Content Author Prerequisites

* A GitHub account with 2-factor authentication enabled.
* Write access to this repository

## Developer Requirements

EPIC has been built using MongoDB, Express, AngularJS and NodeJS.  See http://mean.io/ for more information on the project's development stack. Basic globally install requirements for Win32, OSX, or Linux are as follows:

* node@ >= 6.11.3
* npm@ >= 2.15.1
* mongodb-server@ >= 2.6.x
* grunt@ >= 0.4.5
* git
* yarn >= 1.3.2

The following environment variables must be set in order for a Minio object storage instance to be used for document uploads:
* `MINIO_HOST` - the URL pointing to a Minio instance (can be play.minio.io)
* `MINIO_ACCESS_KEY` - the minio access key to be used for authentication
* `MINIO_SECRET_KEY` - the minio secret key to be used for authentication


## Installation
 `yarn install`

Note: If you've previously done an installation, and are upgrading from npm to yarn and node 4 -> 6, make sure you delete the `node_modules/` folder and `public/lib/` folder.

## Development mode
 Please set your PATH, MINIO_HOST, MINIO_ACCESS_KEY, MINIO_SECRET_KEY, and MONGODB_DATABASE variables before running.

 export MONGODB_DATABASE=“mean-dev”

 export MINIO_HOST="minio-esm-dev-esm-dev.pathfinder.gov.bc.<i></i>ca"

 export PATH="[you path here]"

 export MINIO_ACCESS_KEY="[access key here]"

 export MINIO_SECRET="[secret key here]"

 `npm start`

## Windows Environment Variables
  If you are using a Mingw64, Cygwin64 or git bash, then you can set the above variables in your .bashrc at your posix root directory (the directory you start in when you start your posix environment).  
		
Restart your terminal and type "env" to check if your settings are there.  If not, then you can try to create a .bash_profile file containing the following code:
		
		if [ -f ~/.bashrc ]
		then
			. ~/.bashrc
		fi
		

## Production Mode
`grunt build && NODE_ENV=production node server.js`

After this you may open up a browser of your choice and navigte to http://localhost:3000/

## Unit Tests

The unit tests are broken into two pieces: the client tests, and the server tests.

### Client
Run `npm run test-client`

This will execute the unit tests using Karma and Jasmine. See the `karma.conf.js`

This will create a code coverage report at `build/coverage/client`.

### Server
Run `npm run test-server`

This will execute the unit tests using Mocha. See the `mocha_istanbul` grunt task.

This will create a code coverage report at `build/coverage/server`.
## Functional Tests

Run `npm run e2e`

### Prerequisites
* A Mongo DBMS must already be running as a service.

This will trigger the following steps, via the gruntfile:
1. Create a new functional test database
2. Start the functional test server
3. Run the functional tests
4. Drop the functional test database
5. Shutdown the functional test server

### Configurable Environment Variables
Environment Variable  | Default Value         | Description
--------------------- | --------------------- | ---------------------
FUNCTIONAL_HOST       | localhost             | location of the functional test server
FUNCTIONAL_PORT       | 3001                  | port of the functional test server
BASEURL               | http://localhost:3001 | the url targeted by the functional tests
MONGODB_FUNC_HOST     | localhost             | location of the mongodb instance targeted by the functional test server
MONGODB_FUNC_PORT     | 27017                 | port of the mongodb instance targeted by the functional test server
MONGODB_FUNC_DATABASE | mem-dev-func          | name of the database used by the functional test server

## Project Status

The project was released in February 2017 as a public beta, with continuing engagement, co-design and development proceeding to enhance the web application through future releases.  Feedback, involvement and contribution are greatly appreciated!  If you have any comments, please send us an email at epicsupport.eao@gov.bc.ca or click https://www.projects.eao.gov.bc.ca/contact to learn more.

# Visual Studio Code

To use our Visual Studio Code extensions copy the contents of vscodeextensions.txt in the root directory and paste it into bash. If it doesnt work, make sure you have the Code CLI installed `code --version` and if it's not installed open the command palette (shift + command + p) and run `Shell Command: install 'code' command in PATH`.

## How to Contribute

Feel free to create pull requests from the default "master" branch, click here to create one automatically: https://github.com/bcgov/esm-server/pull/new/master.

## Licence

    Copyright 2018 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
