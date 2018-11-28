# BEW-1-2_reddit-clone
Reddit Clone is a project in Make School's Backend 1-2. By utilizing relationships, a large variety of tasks can be implemented. This can be cloned and transformed into other websites that might use a similar routing system.

See the tutorial: <a href="https://www.makeschool.com/academy/track/reddit-clone-in-node-js">Make School</a>

## Technologies Used
- Node.js
- Express
- Express Handlebars
- Express Validator
- Body Parser
- Server Architecture:
	- MongoDB
	- Mongoose
	- Robo 3T

## To Do:
1. [ ] Start Templating
	1. [X] Add & connect Handlebars
	1. [X] Add Navbar
		- [X] Add a logo that links to home
		- [X] Add an h1 that links to home
		- [X] Add a CTA button that links to new-post
	1. [ ]Recolor the theme to match FlameWarz' style
1. [ ] Complete `CRUD` of Subreddits
	1. [ ] `index` *View* a list of all subreddits
	1. [ ] `new` *View* subreddit creation page
	1. [ ] `create` *Actionably* create a subreddit
	1. [ ] `show` *View* a single subreddit in detail
	1. [ ] `edit` *View* subreddit update-content page
	1. [ ] `update` *Actionably* update a subreddit
	1. [ ] `destroy` *Actionably* delete a subreddit
1. [ ] Complete `CRUD` of Posts
	1. [ ] `index` *View* a list of all posts (on current `show` subreddit)
		- [ ] Make the root route (/) go to the posts#index route render a posts-index template
		- [ ] Style the template and loop over the posts object
	1. [X] `new` *View* post creation page
		- [X] Make a posts#new route (/posts/new) and template (posts-new.hbs)
		- [X] Add form to posts-new template
	1. [ ] `create` *Actionably* create a post
		- [X] Make create posts route and check that form data is sending to new route
		- [X] Add Post model with mongoose
		- [X] Confirm posts are saving to database
		- [ ] Error Handling for missing fields
	1. [ ] `show` *View* a single post in detail
	1. [ ] `edit` *View* post update-content page
	1. [ ] `update` *Actionably* update a post
	1. [ ] `destroy` *Actionably* delete a post
1. [ ] Complete `CRUD` of Comments
	1. [ ] `index` *View* a list of all comments (on current `show` post)
	1. [ ] `new` *View* comment creation box (on current `show` post)
	1. [ ] `create` *Actionably* create a comment (on current `show` post)
	1. [ ] ~~`show` *View* a single comment in detail~~ (**stretch goal**)
	1. [ ] `edit` *View* comment update-content box (on current `show` post)
	1. [ ] `update` *Actionably* update a comment (on current `show` post)
	1. [ ] `destroy` *Actionably* delete a comment (on current `show` post)
1. [ ] Connect posts and subreddits
	- Each subreddit has one parent document
	- Each subreddit has many posts
	- Each post has one subreddit
	- Each post has many comments
	- Each comment has one post
	- Each comment has many comments. (**∞ stretch goal**)
1. [ ] Sign Up & Log In
	- Need more information on Sign Up & Log In
1. [ ] Associate posts, comments, and votes with their author
	- Each author has many comments
	- Each comment has one author
	- Each author has many posts
	- Each post has one author
1. [ ] `update` Vote a post up or down
1. [ ] `update` Vote a comment up or down
1. [ ] Search Functionality