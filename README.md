# MonniRS Soundboard

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Eppu/monnirs-soundboard/pulls)

A damn small soundboard based on some React code.


Setup
-----

1. `yarn install`
2. Place sound files (preferably .ogg files) in the `public/assets/sounds/`-directory.
3. Add any new sounds or configuration info to `src/config.json`.
4. `yarn start` will launch a development server that listens to `localhost:3000`.

Build
-----

* `yarn build` generates a new production package inside the `build` directory.

Deployment
-----
To deploy to production, install the Vercel CLI with `npm i -g vercel`. Then, log in using `vercel login`. Afterwards, you can deploy by running `vercel` in the project root.

[Vercel](https://vercel.com).

Bug? Feature idea?
------------------

Feel free to fork, I'd be glad to merge a pull request. :)
