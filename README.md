# Chattiest User Project

Welcome to the Chattiest User project. This mini app is used to compute the chattiest user in the room based on number of words said. The project is deployed live at [https://chattiest-user.joonsunn.com](https://chattiest-user.joonsunn.com).

## Running locally

1. Clone the repository.
2. Install the necessary dependencies by running `npm install` in the root directory.
3. Start the application by running `npm run dev`.
4. Navigate browser to `http://localhost:3000`.
5. To stop the application, enter `ctrl + c` in the terminal.

## Running as Docker container

_Pre-requisite: ensure `docker` and `docker compose` are installed._

1. Clone the repository.
2. Run `docker compose up -d --build` to start the production build of the application.  
   2a. Alternatively: on Linux/MacOS, run `make up-prod`.
3. Navigate browser to `http://localhost:3000`.
4. Run `docker compose down` to stop the application and remove the container.  
   4a. Alternatively: on Linux/MacOS, run `make down`.

Refer to Makefile for other commands (e.g. dev mode, interactive terminal, etc).

## Usage

- Step 1: Select text files by drag and drop (or click at drag and drop area to call the file selection menu).
- Step 2: Click `Upload` button. Results will be displayed in the results box within a shortwhile.
- Step 3 (Optional): Specify top # of chattiest users to display. The filtered results will displayed accordingly. Blank value or 0 will display all results.

## Additional information

- An example chat log file can be downloaded in the info dialog, activated by clicking on the Info icon.
- The chat log file format is specified in the info dialog.
- Only `.txt` files are acceptable in the file selection.

## Tests

To run the tests on a local build, run `npm run test` for one-off tests, `npm run test:watch` for watch mode.  
To run one-off tests as a Docker instance, run 'make test'. For watch mode while development container already running, run `make it` in a separate terminal window, then run `npm run test:watch` in the shell.  
Test files are stored in a `__test__` folder colocated in the respective folders where the function or component is being tested resides in.  
For example, the test for the `chattyCounter` function is colocated in the `/api/upload` folder; whereas the test for the main landing `Page` component resides in the root of `src/app/` folder.

## Technology used

- Language: JavaScript
- Framework: [Next.js](https://nextjs.org/)
- Components library: [Material UI](https://mui.com/)
- Testing framework: [Jest](https://jestjs.io/)
- Containerization: [Docker](https://www.docker.com/)
- Deployment: [Vercel](https://vercel.com/)
