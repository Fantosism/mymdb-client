# MyMDB

MyMDB is a personal movie database watchlist. Create an account and keep track of all your future streaming binge-watch sessions.

[View a live demonstration of the application here.](https://mymdb-client.herokuapp.com/)

Username: 'Tezting'

Password: '123456789'

Although feel free to make your own account.

## Stack

### Client - React.js && Redux.js

Front end broken into individual React components.

Used Redux to store state for access in particular child components.

Routing with React-Router-Dom

### Server - Node.js, Express.js, MongoDB

MyMDB uses Node.js as server sided environment.

Handles routing through Express.js

Persistent data stored with MongoDB via [mlab.com](http://www.mlab.com). Mongoose used for any and all DB CRUD operations.

Users are authenticated with Passport.js middleware. Bcrypt is used to hash user passwords. JWT Auth stored in local storage, hashed passwords stored in DB.

## Links

### Client

[Heroku](https://mymdb-client.herokuapp.com/)  
[Github Repository](https://github.com/Fantosism/mymdb)

### Schema

#### Movie

```
{
  movies: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  favorited: {
    type: Array,
  },
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
}
```

#### User

```
{
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
}
```

### API

```
/api
├── /users
│   └── GET
│       └── /currentuser
│   └── POST
│       ├── /register
│       └── /login
├── /search
│   └── POST
│       └── /
├── /movie
│   └── GET
│       ├── /
│       └── /favorite
│   └── POST
│       ├── /
│       └── /favorite
│   └── DELETE
│       └── /:id
```
