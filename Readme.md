# Node.js Basics

## Overview
This repository contains several tasks to learn the basics of Node.js

## Getting Started

### Prerequisites
- Node.js version 22.9.0
- npm version 10.8.3
- A terminal/command prompt

### Running  Tasks
#### 1. Directly from the Command Line
You can execute the following commands in your terminal:
```
node src/cli/env.js
node src/cp/cp.js
node src/fs/copy.js
node src/fs/create.js
node src/fs/delete.js
node src/fs/list.js
node src/fs/read.js
node src/fs/rename.js
node src/hash/calcHash.js
node src/modules/esm.mjs
node src/streams/read.js
node src/streams/transform.js
node src/streams/write.js
node src/wt/main.js
node src/zip/compress.js
node src/cli/args.js --some-arg value1 --other 1337 --arg2 42
npx cross-env SOME=any RSS_foo=bar RSS_bar=baz
```

2. **Using Script from package.json :**
```
  "cli:args": "node src/cli/args.js --some-arg value1 --other 1337 --arg2 42",
    "cli:env": "npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node src/cli/env.js",
    "cp": "node src/cp/cp.js",
    "fs:copy": "node src/fs/copy.js",
    "fs:create": "node src/fs/create.js",
    "fs:delete": "node src/fs/delete.js",
    "fs:list": "node src/fs/list.js",
    "fs:read": "node src/fs/read.js",
    "fs:rename": "node src/fs/rename.js",
    "hash": "node src/hash/calcHash.js",
    "modules": "node src/modules/esm.mjs",
    "streams:read": "node src/streams/read.js",
    "streams:transform": "node src/streams/transform.js",
    "streams:write": "node src/streams/write.js",
    "wt": "node src/wt/main.js",
    "zip:compress": "node src/zip/compress.js",
    "zip:decompress": "node src/zip/decompress.js"
```