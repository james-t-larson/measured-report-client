## Long-Term Goals

- Make header 90% of screen size to match article width on mobile
- Need to display proper errors if articles/categories fail to fetch
- Move all the error catching logic to api.ts
- rename all fetch methods to set
- Add themes, mimic themes from financial times
- Need back button when reading an article for mobile screens
- Make scroll bar invisible on mobile screens
- Store all category articles in state. Only fetch  category articles when they are not in state
- Create express server that gets category 1 articles, and stores them in redis.

## To Do

- Fix issue with selecting an artocle and being at the bottom of the page
- Implement Login Page
- Get PWA working
- Publish to Android and iOs app stores

## Doing


## Done

- Fix center article height and size
    > At the moment, they are smaller than the side articles. This looks strangeq
- Get categories implmented
- Need unified method for calling the api
    > It should not be done in the stores
- Put domains into configs
- When visting a category without articles, show a fallback page
- Update interfaces to reflect what comes from the api
- Switch nav bar to use new typeface
    > https://www.cdnfonts.com/lt-afficher-neue.font <- this typeface has more font-wights and options. Should be better for smaller screens and the logo
- BUG: When visiting a specific article, refreshing the page removes the article from state.
    * [ ] Add requeest to store
    * [ ] If article is not defined request the specific article
