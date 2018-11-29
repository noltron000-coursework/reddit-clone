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
- [ ] Complete `CRUD` of Subflames
	- [ ] `index` *View* a list of all subflames
			- [ ] Navigate to view all the posts of the same subreddit
	- [ ] `new` *View* subflame creation page
	- [ ] `create` *Actionably* create a subflame
		- [ ] Add a subreddit attribute to our post resource
	- [ ] `show` *View* a single subflame in detail
	- [ ] `edit` *View* subflame update-content page
	- [ ] `update` *Actionably* update a subflame
	- [ ] `destroy` *Actionably* delete a subflame
- [ ] Complete `CRUD` of Flares
	- [ ] `index` *View* a list of all flares (on current `show` subflame)
		- [X] Make the index route @ `/flares` go to the `flares-index` route
		- [X] Render a flares-index template @ `/flares`
		- [X] Loop over the flares object
		- [ ] Style the template
	- [X] `new` *View* post creation page
		- [X] Make a flares#new route (/flares/new) and template (flares-new.hbs)
		- [X] Add form to flares-new template
	- [ ] `create` *Actionably* create a post
		- [X] Make create flares route and check that form data is sending to new route
		- [X] Add Post model with mongoose
		- [X] Confirm flares are saving to database
		- [ ] Error Handling for missing fields
	- [ ] `show` *View* a single post in detail
		- [X] Make route to `flares#show` route `/flares/:id`
		- [X] display the post object
		- [ ] Style the template
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
- [ ] Connect flares and subflames
	- Each subflame has one parent document
	- Each subflame has many flares
	- Each post has one subflame
	- Each post has many comments
	- Each comment has one post
	- Each comment has many comments. (**∞ stretch goal**)
- [ ] Sign Up & Log In
	- Need more information on Sign Up & Log In
- [ ] Associate flares, comments, and votes with their author
	- Each author has many comments
	- Each comment has one author
	- Each author has many flares
	- Each post has one author
- [ ] `update` Vote a post up or down
- [ ] `update` Vote a comment up or down
- [ ] Search Functionality