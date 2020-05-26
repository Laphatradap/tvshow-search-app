
## TVSHOWLAND

### Installation
- `git clone git@github.com:Laphatradap/rtl-tvshowapp-client.git`
- `cd rtl-tvshowapp-client`
- `npm install`
- `npm run start`

### Technologies used
- [React](./src/components/EpisodeListContainer/index.jsx)
- [Redux-Thunk](./src/store/episodes/actions.js)
- [Redux-Persist](./src/store/store.js)
- [Sass](./src/styles/styles.scss)
- [Axios](./src/store/shows/actions.js)
- [Jest](./src/store/episodes/tests/actions.test.js)

### Features implemented
- A Homepage that displays shows cover images with search box
  - With search box, the user can search for a tvshow by its name.
- A TV show page displays following:
  - Show title
  - Show description
  - Show cover image
  - Show language
  - Show genres
  - Show episode list, rendering based on seasons. When clicking on the cover image, it will direct to the episode detail page for that specific episode
- A episode detail page displays the following:
  - Episode title
  - Epiosde summary
  - Episode cover image, when clicking on the cover image, it will direct to the www.tvmaze.com for that specific episode

*If any show or episodes' photo is missing, it is replaced by "no image yet photo".*

### Styling with Sass
- [Mobile-first approach](./src/styles/_EpisodeList.scss)
- On medium-sized screens, the`$screen-md-min: 768px` will overrides the small styles.

### Testing
- Focus on testing redux [actions](./src/store/shows/tests/actions.test.js) and [reducers](./src/store/shows/tests/reducer.test.js)
- To run the test: `npm run test` 

### Git usage
- [git branches and commit messages](https://github.com/Laphatradap/rtl-tvshowapp-client/commits/master)


### Create React App
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


**Any feedback to improve my code or git usage: [please drop me a message](https://www.linkedin.com/in/laphatradaphusri/)!**