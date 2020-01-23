# Typescript-Guide

Typescript: The Complete Developer's Guide [2020]

Source: [udemy](https://www.udemy.com/course/typescript-the-complete-developers-guide)

## Setup
```
npm install -g typescript ts-node
```

### Install Extension "Prettier - Code formatter" by Esben Peterson.

File -> Preferences -> Settings -> Search: Format On Save -> Check

File -> Preferences -> Settings -> Search: Single Quote -> Check

#### Configure Plugin:

    - Prettier: Print Width = 120
    - Prettier: Single Quote = Checked
    - Prettier: Tab Width = 4

**Tool to help us run Typescript in the browser**
```
npm install -g parcel-bundler
```
**To execute the index.js on port 1234**
```
parcel index.js
```

## Converting TS Files to JS Files
Creates a **TS config file** (*tsconfig.json*)
```
tsc --init
```

### Create two directories src and build

| Directory | Description |
| --- | --- |
| **src** | Stores all TS Files (***input files***) |
| **build** | Stores all JS Files (***output files***) |

### Configure tsconfig.json
Convert and change the following lines:

"outDir": "./build"

"rootDir": "./src"

### Execute
```
tsc
```
**Execute every time a change is made**
```
tsc --watch
```