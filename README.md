## ANY - UNKNOW - NEVER

TYPESCRIPT

---

I start creating the project with the commands

```
npm i typescript --save-dev
```

```
npx tsc --init
```

```
nano tsconfig.json
```

in the tsconfig.json make sure you add the outDir value in the same to tell where should be settig the compiling of the ts\*

### To run the project in the terminal

```
ts-node <path-directory-file>
```

example

```
 ts-node project/index.ts
```

### To compile the project

for exmaple to see the console.log in the browser console use:

```
tsc <path-directory-file.ts>
```

\*
If is a folder outDir or dist (distribution) over there is going to be the .js file and .js.map file

the can be run the command to compile

```
tsc --outDir <folder-name> <path-directory-file.ts>
```

## WEBPACK

Using webpack
create the webpack file

```
touch webpack.config.js
```

then

```
npx webpack
```

```
npm install webpack-cli --save-dev
```

### Compile with webpack

If we use Webpack, don't need to run tsc separately. Webpack will take care of bundling and compiling your TypeScript files based on the configuration in your webpack.config.js file.

Now to complie with webpack use the command

```
npx webpack --config webpack.config.js
```

or alternatively use the --watch flag so will recompile whenever there are changes.

```
npx webpack --config webpack.config.js --watch
```

Script instead of typing the command (look into packge.json)

```
npm run start
```
