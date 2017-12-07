
Introduction:

This is a Blog App created with React and Meteor. It has basic CRUD functionality for users once in Logged in. At the root of the app, viewers can see all the publlished Apps and then choose to Login/Signup. 

How the CRUD functionality works in the App:
	Create- A Blog is created with Default Title and empty Body
	Read- All published apps available to view before and after login
	Update- Once Blog Created, if you click on the blog, the editor form opens and lets user make changes to title and body fields
	Delete- Once clicked on the app, the form comes with a delete button that will let users delete the blog

How to Run:

Run the following command in terminal:
Meteor run

Open Browser to the server displayed in terminal 


Feature:

	# CRUD functionality for Blogs with Real Time updates
	# Login & Signup for the Users
	# Pokemon Avatar & Unique Color Theme for each users
	# Clean UI with the help of Sementic UI library	 

Limitations:

	# On My Blogs page i.e. '/dashboard', sometimes avatar images are not getting displayed
	# On Create blog, it creates a default blog with a default title, you need to manually delete it to discard it from the server
	# On Delete blog, its doing a full page refresh
	# Users don't have choice over which Blog to Publish for public view. Once Blog Created, it is published for public view in real time.

future improvements:

	# Rich Text Editor to create Blogs
	# Lazy Loading or Pagination to display Blogs List
	# Blogs with multimedia contents like Images & Videos or YouTube links
	# implement functionality to let users choose which blog post to publish