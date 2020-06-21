# sparky

Simple, responsive sparklines in Vanilla JavaScript. 📈

![Node.js CI](https://github.com/kmoo/sparky/workflows/Node.js%20CI/badge.svg)

## Backstory 📖

My goal in building this repo was not to create the perfect "Sparkline" library (see Edward Tufte's [writing on sparklines](https://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR) for a brief history).
Instead, my goal was to really just do a deep-dive into the native [SVGElement API](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement).

I've been building data visualizations in web apps for quite a few years now using wonderful libraries (including [D3.js](https://d3js.org/), [Chartist.js](https://gionkunz.github.io/chartist-js/) and others!) but my knowledge of `SVG`s was basically limited to masking, injecting some custom visual elements, or putting in an ugly (and probably innefficient) hack.

After doing this little hobby project, I feel like I've have gained a nice rudimentary knowledge of the `SVGElement API` (P.S. - [here's a great tutorial](https://css-tricks.com/svg-path-syntax-illustrated-guide/) if you want to learn as well!).
However, in addition to that, I've gained a huge appreciate for the data visualization libraries out there.

My other, and less obvious goal was to make something stupid lightweight and stupid simple.
A teeny-tiny data visualization library that's both responsive and browser-compatible.

It worked! I was honestly surprised at how quickly I moved from "Hello World!" to drawing fancy little sparklines.
Who knows, maybe [`sparky`](https://github.com/kmoo/sparky) will take off?

_Thanks for reading! If you want to find out more about my code and other creative endeavors (like novels and music), then please check out my website, [lukemoorman.com](http://lukemoorman.com)._

## Setup

### Prerequisites

#### Software

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

### Install Locally

In a terminal, run the following command:

```bash
git clone git@github.com:kmoo/sparky.git
```

Then install the required dependencies with this command:

```bash
yarn install
```

## Example

Run the following command in a terminal:

```bash
yarn serve
```

Navigate to the following link in a browser:

http://localhost:5000/example

You should see something like this! 🎉

![Image of Sparky sparklines](./images/example.png)

## Running tests

Tests are located in the `/src/` directory with the extension `.test.js`. To run them use [Jest](https://jestjs.io/). To run the tests from the terminal, simply enter the following command:

```bash
yarn test
```

## Linting

[ESLint](https://github.com/eslint/eslint) and [Prettier](https://github.com/prettier/prettier) are used to style JS.

Run the following terminal command to lint JS:

```bash
yarn lint
```

Run the following terminal command to automatically style JS:

```bash
yarn prettier
```

## Contributing

- Please reach out to [@kmoo](https://github.com/kmoo). Thanks!
