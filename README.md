# Chattiest User Project

Welcome to the Chattiest User project. This mini app is used to compute the chattiest user in the room based on number of words said. The project is deployed live at [https://chattiest-user.vercel.app](https://chattiest-user.vercel.app).

## Running locally

1. Clone the repository.
2. Install the necessary dependencies by running `npm install` in the root directory.
3. Start the application by running `npm run dev`.
4. Navigate browser to `http://localhost:3000`
5. To stop the application, enter `ctrl + c` in the terminal.

## Running using Docker

_Pre-requisite: ensure `docker` and `docker compose` are installed._

1. Clone the repository.
2. Run `docker compose up` to start the application.
3. Navigate browser to `http://localhost:3000`.
4. Run `docker compose down` to stop the application and remove the container.

## Usage

- Step 1: Select text files by drag and drop (or click at drag and drop area to call the file selection menu).
- Step 2: Click `Upload`button.
- Step 3: Specify top # of chattiest users to display.

## Additional information

- An example chat log file can be downloaded in the info dialog, activated by clicking on the Info icon.
- The chat log file format is specified in the info dialog.
- Only `.txt` files are acceptable in the file selection.

## Tests

To run the tests, run `npm run test`.  
Test files are stored in a `__test__` folder colocated in the respective folders where the function or component is being tested resides in.  
For example, the test for the `chattyCounter` function is colocated in the `/api/upload` folder; whereas the test for the main landing `Page` component resides in the root of `src/app/` folder.

## Technology used

- Language: JavaScript
- Framework: [Next.js](https://nextjs.org/)
- Components library: [Material UI](https://mui.com/)
- Testing framework: [Jest](https://jestjs.io/)
- Containerization: [Docker](https://www.docker.com/)
- Deployment: [Vercel](https://vercel.com/)
