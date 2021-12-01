# Project Name

> @the-boring/components

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Usage](#usage)
    - [Example](#example)
  - [Authors](#authors)
  - [License](#license)

## Usage

To start consuming this library, make sure to have the peerDependencies met. Check [package.json](package.json).

To install the library in your project, run:

```sh
$ npm install @the-boring/components
```

### Example

Assuming we are using it in nextjs with typescript. Here is an example to use test component from our library

```nextjs
import type { NextPage } from "next";
import { TestComponent } from "@the-boring/components";

const Home: NextPage = () => {
  return (
    <TestComponent theme="primary" />
  );
};
...
```

## Authors

- [Shashank Rawat](https://github.com/rawat-shashank)

## License

This project is licensed under the terms of the [MIT license](license.md)
