# Development

### Link to Deployed Website
https://dryfig372.github.io/development

### Goal and Value of the Application
The goal of the application is for users to find their next favorite movie(s). The movies listed are the highest-rated movies of 2022, making it easy for users to find a movie that they will enjoy, especially with the different genre and rating filters that make it easier to narrow down all the different movies they can watch and to put any interesting movies in one 'Favorites' list for easy access. 

### Usability Principles Considered
I considered aesthetic and minimalist design. By making the webpage less cluttered and focused on the big movie posters (which is what attracts most movie watchers in the first place), it makes the website easier to use. There is also visibility of system status if the user does not have any movies in their 'Favorites' list because the list informs the user that there are no movies that have been favorited. I also accounted for user control and freedom in that there is a reset button that resets all the filters so that the user does not have to refresh or exit the page in order to sort through all the movies again or try on different filters. 

### Organization of Components
I have only a Film component. The Film component is where each film and its corresponding information is organized into cards that the user can easily look through while scrolling through the website.

### How Data is Passed Down Through Components
The Film component contains information about the film's movie poster, name, director(s), runtime, genre, rating, and star rating (in other words, an aggregated rating of how much other watchers liked the movie on a scale of 1-10). The props that it takes in is specific film information from the dataset (for example, a film's respective movie poster, director(s), etc.). It also takes in the updateFavorites function from the App, which updates the 'Favorites' list by either adding or removing a user's favorite movies depending on if the user clicked the button (which is also included in the component) to add or remove the movie to their 'Favorites' list. Accounting for the clicking is done in the Film component, but adding or removing the film from the 'Favorites' list is done in the App through this updateFavorites function. In terms of state, [clicked, setClick] = useState(false) is used. In order to take the user's click into account, I made it so that the state is 'false' if the button has not been clicked, which means the film has not been added to the 'Favorites' list. 

### How the User Triggers State Changes
The user triggers state changes by clicking on the button, which will read 'Add to Favorites' if the film has not been added to the 'Favorites' list or 'Remove from Favorites' if the film has been added to the 'Favorites' list. The state is assumed to be false (that the film has not been added to the 'Favorites' list) until the user clicks the button and triggers that state change.

