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
- [ ] Start Templating
	- [X] Add & connect Handlebars
	- [X] Add Navbar
		- [X] Add a logo that links to home
		- [X] Add an h1 that links to home
		- [X] Add a CTA button that links to new-post
	- [ ] Recolor the theme to match FlameWarz' style
- [ ] Complete `CRUD` of Subreddits
	- [ ] `index` *View* a list of all subreddits
	- [ ] `new` *View* subreddit creation page
	- [ ] `create` *Actionably* create a subreddit
	- [ ] `show` *View* a single subreddit in detail
	- [ ] `edit` *View* subreddit update-content page
	- [ ] `update` *Actionably* update a subreddit
	- [ ] `destroy` *Actionably* delete a subreddit
- [ ] Complete `CRUD` of Posts
	- [ ] `index` *View* a list of all posts (on current `show` subreddit)
		- [X] Make the index route @ `/flares` go to the `flares-index` route
		- [ ] Render a flares-index template @ `/flares`
		- [ ] Style the template and loop over the posts object
	- [X] `new` *View* post creation page
		- [X] Make a posts#new route (/posts/new) and template (posts-new.hbs)
		- [X] Add form to posts-new template
	- [ ] `create` *Actionably* create a post
		- [X] Make create posts route and check that form data is sending to new route
		- [X] Add Post model with mongoose
		- [X] Confirm posts are saving to database
		- [ ] Error Handling for missing fields
	- [ ] `show` *View* a single post in detail
		- [ ] Make route to `posts#show` route `/posts/:id`
		- [ ] Style the template and display the post object
	- [ ] `edit` *View* post update-content page
	- [ ] `update` *Actionably* update a post
	- [ ] `destroy` *Actionably* delete a post
- [ ] Complete `CRUD` of Comments
	- [ ] `index` *View* a list of all comments (on current `show` post)
	- [ ] `new` *View* comment creation box (on current `show` post)
	- [ ] `create` *Actionably* create a comment (on current `show` post)
	- [ ] ~~`show` *View* a single comment in detail~~ (**stretch goal**)
	- [ ] `edit` *View* comment update-content box (on current `show` post)
	- [ ] `update` *Actionably* update a comment (on current `show` post)
	- [ ] `destroy` *Actionably* delete a comment (on current `show` post)
- [ ] Connect posts and subreddits
	- Each subreddit has one parent document
	- Each subreddit has many posts
	- Each post has one subreddit
	- Each post has many comments
	- Each comment has one post
	- Each comment has many comments. (**∞ stretch goal**)
- [ ] Sign Up & Log In
	- Need more information on Sign Up & Log In
- [ ] Associate posts, comments, and votes with their author
	- Each author has many comments
	- Each comment has one author
	- Each author has many posts
	- Each post has one author
- [ ] `update` Vote a post up or down
- [ ] `update` Vote a comment up or down
- [ ] Search Functionality