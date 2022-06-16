# NHS Type 1 Opt-Out Online Option

Patients in England can stop their GP data being used for purposes other than their direct care by completing a Type 1 Opt-out form MS Word document, and then sending it to their GP by email, post or in person.

This puts an extra burden on GP practices. NHS Digital will lighten this load by handling Type 1 opt-outs.

This app will let citizens authenticate and set their Type 1 opt-out preference, which will then be sent to the GP System Supplier of their GP Practice and registered against their GP record.

## Security

To prevent members of the public finding this prototype and thinking it is a live services, this app is protected by a user name and password. Please contact nick.etuk1@nhs.net to get the user name and passowrd.

## Environments

<a href="https://type1-opt-out-develop.herokuapp.com/">Development</a>
<a href="https://type1-opt-out-release-1.herokuapp.com/">Current stable release for testing</a>

## Installation instructions
These are the steps for installing the project on Ubuntu. Please adjust as necessary for your platform.

Install packages
- sudo apt install curl make -y

Install NVM
- curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
- source ~/.profile  

Install node
- nvm install node

Clone the Type 1 Opt-out repository GitHub
If necessary, install git
- sudo apt install git
- git clone https://github.com/nhsconnect/type1-opt-out.git

Install NPM packages
- cd ~type1-opt-out
- npm install
- npm install -ws

### Run the application locally

- npm run watch
- Go to localhost:3000 in your browser.

## Deployment

- Make build-all
- Make test-all

Push your branch to GitHub
Merge your branch into the develop branch

Once merged, the develop branch will automatically be deployed to Heroku (<a href="https://type1-opt-out-develop.herokuapp.com/">Heroku Type 1 Opt-Out Development instance</a>)

## Contribute

If you want to contribute to the NHS Type 1 Opt-Out Online Option by reporting bugs, fixing bugs, suggesting new features or writing documentation, please read our [contributing guidelines](CONTRIBUTING.md).

## Development enviroment

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://github.com/nhsconnect/type1-opt-out)

## Support

The NHS Type 1 Opt-Out Online Option is maintained by NHS Digital. [Email us](mailto:nick.etuk1@nhs.net), open a [Github issue](https://github.com/nhsconnect/type1-opt-out/issues/new) or get in touch on the [NHS Digital Type 1 Opt-Out Slack workspace](https://join.slack.com/t/nhs-service-manual/shared_invite/enQtNTIyOTEyNjU3NDkyLTk4NDQ3YzkwYzk1Njk5YjAxYTI5YTVkZmUxMGQ0ZjA3NjMyM2ZkNjBlMWMxODVjZjYzNzg1ZmU4MWY1NmE2YzE).
