NetFlix GPT

- Login page 
    - SignUp page
    - Header

- Browse page
  - Header
  - Main movie section
    

Below are the features : 

- Sign In / Sign up single page for both
- Authentication using Firebase
- Browse page 
  - Main Section
    - Trailer background
    - actions buttons on the trailer
    - movie details
  - Secondary section
    - movies list * n
    - movie cards in each list * n

- used tmdb to get now playing movies list - now playing movies list
- create a slice to store now playing movies list
- to get the main trailer, filter the movies list by type as Trailer
- main movie trailer detials are also added to the redux slice
- showed the trailer in the main section
- showed the details also on top of the trailer

- developed the secondary container
  - used the custom hooks to get the popular, top rated and upcoming movies
  - created a separate component for movie list
  - created a separate component for movie card
  - updated the stores with the corresponding movies
  - added all the constants like card poster path, api urls etc in the constants file
  - Made the secondary container scrollable
  - Made the UI look excellent using tailwind css.

- bug fixed
  - when refreshing - redux store is updating user with null. 
  - This is fixed by using onAuthStateChanged from firebase to persist the user state  even after refresh.

- next is developing the gpt search movie recommendations page
  - added a button in header for gpt search
  - created a gpt slice to manage the gpt page state
  - toggled the gpt page state using redux
  - created a gpt search component and added gpt page in the main page using gpt slice state
  - created Open Ai secret key to use the open ai api
  - got the get search movies from the open ai api
  - updated these results in the slice
  - showed the gpt suggested movie results using the existing movie list component. This is re-used which is excellent
  - made the gpt search page scrollable down. 
  - finally made the gpt search page look excellent with tailwind css.

- fixed the bug 
  - when user navigates from brwose to gpt by changing the url, toggle the gpt view state
  - this is fixed.

- made the app responsive
- deployed on firebase