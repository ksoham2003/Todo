# Todo API Variations

This repository contains different iterations of a Todo/Notes API, showing progressive enhancement from a basic CRUD application to a fully-featured API with authentication, soft deletion, and rate limiting.

## server version 1
- basic implementation of notes app
- model, route, controller

## server version 2
- self implementation of notes app
- all of the above + services, middleware, validators
- added feature: User Auth

## server version 3
- self implementation of notes app with a twist
- all of the above 
- added feature: Soft Delete feature

## server version 4
- all of the above features
- added rate global-ratelimiting(10 requests) and auth-ratelimiting(5 requests)

---

## API Routes & Endpoints

### User Routes (`/api/user`)
*Note: Available starting from Server Version 2.*

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/check` | Health check for User routes |
| `POST` | `/register` | Register a new user and receive auth token |
| `POST` | `/login` | User login to receive auth token |
| `POST` | `/logout` | User logout and clear token |

### Note Routes (`/api/note`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/check` | Health check for Note routes |
| `POST` | `/` | Create a new single note |
| `GET` | `/` | Fetch all notes (soft-deleted omitted in ver 3/4) |
| `PATCH` | `/:id` | Update a specific note by ID |
| `DELETE`| `/:id` | Delete a specific note by ID (soft-delete in ver 3/4) |
