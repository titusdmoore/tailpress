# Edge Webware Tailpress
The purpose of this file is to describe how to setup the development enviorment for theme development with WordPress and Tailpress as a starter theme.

## Enviorment Setup
- Node Version - `v16.15.1`
	- Alternate Node Version - `v14.20.0`
- Docker
	- Docker has to be installed on your development machine. The `wp-env` module uses Docker Compose to spin up an instance of WordPress that you can use for development.
	- Refer to the following tutorials to install Docker
		- [Windows](https://docs.docker.com/desktop/install/windows-install/ "Windows")
		- [Linux](https://docs.docker.com/desktop/install/linux-install/ "Linux")
		- [Mac](https://docs.docker.com/desktop/install/mac-install/ "Mac")
- Composer
  - Composer is a php package manager. Composer must be installed on the system globally before you can lint php.
  - Installing Composer
    - Windows
      - [Download install from Composer](https://getcomposer.org/doc/00-intro.md#installation-windows)
    - Install Composer with brew for Mac
      - `brew install composer`
- Run the following commands to begin the development process
	- `npm install`
	- `npm run env-start`
		- This command begins the Docker Compose instance for WordPress. This command may take awhile but after it finishes there will be a WordPress and MySQL instance for both development and testing.
	- `npm run watch-sync`
		- This command begins the watch process for all sections of the code base. After a build finishes it starts `browser-sync` starts and you can visit the development site at `localhost:3000`.
			- Note: currently the Tailpress theme is not actived by default. If you run into this issue go into the WP-Admin area under `Apperance`->`Themes` and activate Tailpress.

## Linting and Testing
- Run `npx wp-scripts lint-js` and `npx wp-scripts lint-js --fix` to lint javascript. All issues must be fixed before commiting to the main branches.
- Run `npm run cypress:open` to run cypress tests within the GUI and run `npm run cypress:headless` to run it in the terminal
	- Please add additional tests as features are added.

## Configuration Files
- `.wp-env.json`
	- This file controls the configuration that is used by `wp-env` run in the `npm run env-start` command.
	- You can refer to the [docs](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#wp-env-json "docs") for information on how to edit the `.wp-env.json` file.
- `package.json`
	- This file is used by `npm` to install modules, as well as additional commands such as `npm run watch-sync`.
	- Refer to the [docs](https://docs.npmjs.com/cli/v6/configuring-npm/package-json "docs") on how to edit the `package.json` file.
- `tailwind.config.json` 
	- This file is used by TailwindCSS to determine what files should be included inside of the project, it also can be used to extend or customize TailwindCSS.
	- Refer to the [docs](https://tailwindcss.com/docs/configuration) on how to edit the `tailwind.config.json` file.
- `theme.json`
	- This file is required by WordPress for block themes.
	- This file also includes some global style information needed by the theme.

## Known Issues and In-Progress Features
- `npm run watch-sync` first run after initial git pull has a warning on page load.
	- **Reason:** this is because `watch:blocks` is still running when browser-sync finishes. This means there is no build folder inside of flexible content.
- Scaffold command to generate new flexible content blocks
	- Runs like `create-react-app`
	- Two options out of the gate `--with-react` and `--static`
- Logic to prevent update button fails if you set new item to correct answer then delete in quiz block.
- Add PHPUnit and XDebug to project and add them inside of package.json as scripts.
- Move theme to be more inline with WordPress' block theme standards