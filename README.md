# Project Title

NList

## Overview

NList is a place to discover and promote volunteering opportunities. The 'air-bnb' of volunteering.

### Problem

It is often hard and time consuming to find local opportunities to volunteer whether it is for charities, community events or local projects. Organisations and groups on the other hand also find it difficult to find volunteers.

Volunteering is siloed with small teams relying on the same pool of local volunteers. Local and community projects tend spread through word of mouth meaning limited scope and lack of diversity.

Onboarding onto a volunteer scheme can be long, analogue whilst organisations looks for the same information volunteers need to go through the same onboarding for each organisation. It is also diffucult to find local volunteering opportunities with no dedicated platform to support those looking for local volunteering opportunities

By lowering the barrier to entry for volunteers & providing and open and and transparent communication and onboarding, charities and community projects can increase thier pool of volunteers.

### User Profile

Charities, community groups & those looking to volunteer locally.

The app will be broken into two 'sides' one to browse and sign up to volunteer opportunities and one to 'host' and manage volunteer opportunities

### Features

- As a user, I want to be able to find volunteering opportunities close to me.
- As a user, I want to be able to 'vet' volunteering opportunities by seeing information about the opportunity, reviews and feedback from other users
- As a user, I want to be able communicate with the 'owner' of a volunteering opportunity i.e. ask questions & clarifications
- As a user, I want to be able to log in and view my account information
- As a user, I want to be able to provide details on my account to let prospective volunteer groups know about me i.e user bio, previous experience, any relevent qualifications DBS checks etc
- As a user, I want to be able filter volunteer opportunities to my needs i.e. large charities, sporting events local community projects
- As a user, I want to be able to post my own volunteer opportunities and own a page.
- As a user, I want to be able to track my reviews and scores to build a profile that is more attractive to prospective volunteer opportunities.

- As a page owner, I want to be able to list the key requirements of the volunteer opportunity. i.e. time location, description number of volunteers.
- As a page owner, I want to be able to communicate with volunteers that have signed up.
- As a page owner, I want to be 'vet' and accept reject volunteers
- As a page owner, I want to be able to set a limit on number of volunteers that is visible on my page.
- As a page owner, I want to be able to set a limit on number of volunteers that is visible on my page.
- As a page owner, I want to be able to set a limit on number of volunteers that is visible on my page.

## Implementation

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

No external APIs will be used for this sprint.

### Sitemap

- Login
- User Account
- Browse opportinties (List of opportunities)
- Opportunity page - information about opportunity
- Create Opportunity
- Opportunity chat
- Manage Opportunities

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

![](./assets/login-page.png)
![](./assets/opportunities-page.png)
![](./assets/opportunity-page.png)
![](./assets/user-info.png)
![](./assets/chat.png)
![](./assets/create-opportunity.png)
![](./assets/my-opportunities.png)

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

**GET /opportunities**

**GET /opportunities/:id**

**POST /opportunities/:id/comments**

**POST /opportunities/new-opportunity**

**POST /user/new-user**

**PUT /opportunities/:id/rating**

### Auth

Yes - tbd based on next weeks lectures

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

- Create client

  - react project, boiler plate and basic routes

- Create Server

  - make an express server and boilerplate routes.

- Create migrations

- Build a seed data set of fake volunteers (15/20) and volunteer opportunities - 10-15 large and small

- Deploy client and server projects so all commits will be reflected in production

- Feature: User Login

  - log in homepage with new user sign up

- Feature: User Profile

  - implement user profile page
  - GET user for exisiting users
  - POST user/new-user for new users

- Feature: All Opportunities page

  - implement opotunities page
  - create GET for opportunities

- Feature: Opportunity page

  - implement opotunity page
  - create GET for opportunities by id

- Feature: Opportunity page comments

  - implement opotunity page
  - create GET for opportunities by id

- Feature: Create Opportunity page

  - implement create opportunity page via form
  - create POST for new opportunities

- Feature: My opportunities page
  - implement page for all accepted opportunities page.
  - create POST for new opportunities

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- map feature for where opportunities are location.
