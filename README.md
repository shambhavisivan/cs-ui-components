# cs-ui-components

A repository of CloudSense shared libraries.

- `cs-form`
- `cs-form-v2`
- `cs-grid`
- `cs-table`
- `cs-ui-components`
- `cs-ui-demo`

## Package Management

This repository is slowly switching over to using `yarn` over `npm`. Only libraries that have completely switched over to `yarn` are documented here. For other libraries, please refer to their respective `README.md` files.

If you need to install `yarn`, you can do so by running `npm install --global yarn`.

## Starting the Demo App

0. Make sure you are running `node v12.x.x` and are using `yarn v1.22.x` as your package manager.
1. Clone this git repository. If you've already cloned it before, pull the latest commit from the master branch.
2. Navigate to the root directory (here) with your terminal.
3. Run `yarn` or `yarn install` to install or update dependencies.
4. Run `yarn components build` or `yarn components watch` and `yarn form-v2 build` or `yarn form-v2 watch`.
  - If you have just cloned the repository for the first time or anew, or simply do not want to track changes or enable live reloading, run `yarn components build` and `yarn form-v2 build`.
  - If you wish to continuously create builds, track changes as you code and enable live reloading, run `yarn components watch` or `yarn form-v2 build`, depending on the module you want to track. __Note:__ You have to perform the previous step first if you're coming from a freshly cloned repository.
5. In a separate terminal session, run `yarn demo start` from the root directory to launch the Demo App locally.

If you do not wish to start the Demo App locally, you can access a hosted version of the latest published build [here](https://hvar.cloudsense.com/cs-ui-demo/). Use `cs-ui-demo-rnd` as the username and `c!z4uO&PaRZ2` for the password when prompted.

For instructions on how to use the Demo App once you've started it, you can refer to the `GettingStarted.md` file in the `src` folder or visit the Getting Started tab within the app itself.

## Local Testing in Products

If you need to hook up a local version or a local commit of the components to a product, follow these instructions:
1. Clone the product repository inside the root directory (here).
2. Remove `@cloudsense/cs-ui-components` from the dependency list in the product's `package.json` file.
3. Follow the instructions for running the product locally (this step will almost certainly include running either `npm install` or `yarn` in the product).
- _Note: This will make use of default Node package resolution by automatically linking any imported components to the local `cs-ui-components` library._
- _If you need to test another non-yarn package inside this repository, you can skip step 1._

## Available Commands

Make sure you are running `node v12.x.x` and are using `yarn v1.22.x` as your package manager.

You do not have to navigate to subdirectories or libraries to run scripts in there. You can make use of yarn workspaces by prefixing your command with the workspace name.

### Global

- `yarn` or `yarn install` - Install or update dependencies.
- `yarn <workspace name> <command>` - Run a command inside a workspace. Available workspaces are:
  - `components` - Commands that need to be run in the `cs-ui-components` library.
  - `demo` - Commands that need to be run in the `cs-ui-demo` directory.
  - `form-v2` - Commands that need to be run in the `cs-form-v2` library.

### Components

- `yarn components lint` - Detect linting errors.
- `yarn components lint -- --fix` - Fix detected linting errors.
- `yarn components build` - Compile a static version of the code to the `dist` folder.
- `yarn components watch` - Compile the code to the `dist` folder after every change.
- `yarn components publish` - Publish the code to the `@cloudsense/cs-ui-components` npm repository.

### Demo App

- `yarn demo start` - Run the app locally.
- `yarn demo build` - Compile a static version of the app to the `dist` folder.
- `yarn demo lint` - Detect linting errors.
- `yarn demo lint -- --fix` - Fix detected linting errors.

### Form V2

- `yarn form-v2 lint` - Detect linting errors.
- `yarn form-v2 lint -- --fix` - Fix detected linting errors.
- `yarn form-v2 build` - Compile a static version of the code to the `dist` folder.
- `yarn form-v2 watch` - Compile the code to the `dist` folder after every change.
- `yarn form-v2 publish` - Publish the code to the `@cloudsense/cs-form-v2` npm repository.
