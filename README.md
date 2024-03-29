## Alieldin's VS Code Settings (<sub><sup>_+ Linting/Formatting Setup_</sub></sup>)

I, for one, care a lot about styling my code and maintaining a consistent and easy to read flow while programming. I created this repo for the purpose of unifying these preferences in one place, and also for allowing others with a similar passion for clean code to get their editors up and running the same way.

In this repo, you will find the settings, extensions, and the relative keybindings I use for **VS Code**, as well as my opinionated linting and formatting rules for **ESLint** and **Prettier** respectively.

**Note**: since I have been mostly using [Vue 3](https://vuejs.org/) for Front-End development recently, some of the extension choices and linting/formatting rules could be influenced by that. Feel free to modify or remove these according to your use case.

## Code Formatting

Mainly coming from a .NET background, I believe styling the code with enough indentation and using semi-colons _where possible_ greatly helps with readability.

Here is the kind of formatting you should expect from using my settings (_see [Prettier Options](https://prettier.io/docs/en/options.html) for reference_):

<img src="https://user-images.githubusercontent.com/31348348/160286495-de6e92df-9d38-4b33-81b8-cace4a4d7813.png">

_**Note:** [Prettier](https://github.com/prettier/prettier), [ESlint](https://github.com/eslint/eslint), and [eslint-prettier-config](https://github.com/prettier/eslint-config-prettier) are required for this setup_. You can install them by simply running:
```
npm i -D prettier eslint eslint-prettier-config
```

### Optional
- You can also add the following commands to your `package.json` scripts:

  - `"lint": "eslint --ext .js,.ts,.vue --ignore-path .gitignore --fix src"` &ndash; -For checking any linting issues in all your files (_change file extensions accordingly_) using **ESLint**.

  - `"format": "prettier . --write"` &ndash; For automatically formatting all your files using **Prettier**.

- Install [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to automatically handling linting and formatting on committing staged files via Git hooks.

## How to Use

Start by taking a look at the recommended extensions (`extensions.json`), and install the ones you need. I have also included a section for "**Optional Extensions**" so feel free to skip those depending on your project and use case; all other extensions should be good to go.

After that is done, familarize yourself with the keybindings and copy the contents into your own `keybindings.json` file of your editor. Again, feel free to change these to fit your preferences.

Finally, modify the linting/formatting rules found in `eslintrc.js` and `prettierrc.js` respectively depending on your project/framework of choice, and you should be up and running.

<br>

**Happy Coding!**

## License

MIT
