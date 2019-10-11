# Got 2 Go
![](https://img.shields.io/badge/Deployed-✓-brightgreen) ![](https://img.shields.io/badge/Version-0.1-fab1a0)
![alt text](/public/G2G.png)

Got 2 Go is a progressive web application for helping users find accessible bathrooms around them. Users can then apply additional filters through categories such as gender neutral or purchase required.

G2G will only render bathrooms in a 40 mile diameter from the user, 20 miles from the user being the farthest at any point. Custom distance filtering is not an option at this point, but is an important feature that will be implemented soon.

## Our Mission Statement

To create an app with high social impact and 

## Design

![alt text](/public/color-styles.png)
![alt text](/public/bathroom-listing-page.png)

## Technology

Because we wanted to provide fast geo-location and retrieval of bathrooms for mobile devices we had to be a little creative with our tech stack. Rather than opting for MERN stack, we used JAM stack.

Our application is decoupled with the backend API hosted independently on Heroku. The backend was made with GraphQL, GraphQL-yoga, Prisma, MongoDB, and JavaScript. We used GraphQL to create the schema calls to our frontend and used Prisma as our "ORM" for GraphQL so that it created resolver functions for us.

We connected our backend to a React frontend using Apollo to manipulate our backend. All components and pages were styled through CSS modules and a little bit of materialize.

To render maps onto our application we used the Google Maps API and styled the map to create a warm color pallette for the user. Custom markers were made to display information about the bathrooms and the markers themselves are clickable to direct users to a detail page about the specific bathroom.


## Future Features

* Upvote Downvote implementaion

* User Profile page

* Booksmarks

* Mailchimp API

* Stripe API

## The Team

![alt text](/public/grouppic.jpg)
From left to right:

[Jack](https://github.com/Jground-33): API/Admin Portal Lead
[Elise](https://eliseentzenberger.com ): UX Designer/Research Lead
[Joe](https://github.com/SleepyJosus): Front End Lead
[David](https://github.com/baeddavid): Back End Lead
[Alice](https://aliceccheung.com): UX Designer/Design Lead
[Rachel](https://rachelakerley.com): UX Designer
