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

-- developed the secondary container
    - used the custom hooks to get the popular, top rated and upcoming movies
    - created a separate component for movie list
    - created a separate component for movie card
    - updated the stores with the corresponding movies
    - added all the constants like card poster path, api urls etc in the constants file
    - Made the secondary container scrollable
    - Made the UI look excellent using tailwind css.
