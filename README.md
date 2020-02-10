# ghibli-movies-js-api

This is a single page application that shows Ghibli movies information. As a user, you can add movies to or delete movies from database.


## Installation

Put this to your terminal:

```ruby
git@github.com:chanwkkk/ghibli-movies-js-api.git
```

And then go inside the folder by typing this in your terminal:

```
cd ghibli-movies-js-api
```

To view the page correctly, you have to run the application server first. So go to the backedn folder: 

```
cd ghibli-movies-backend
```

And then install all missing gems by input:
```
bundle install
```

And then you can run the program by running:

```
rails s
```
After that, you should be able to see the following sentences:

```
=> Booting Puma
=> Rails 6.0.0 application starting in development
=> Run `rails server --help` for more startup options
Puma starting in single mode...
* Version 3.12.1 (ruby 2.6.1-p33), codename: Llamas in Pajamas
* Min threads: 5, max threads: 5
* Environment: development
* Listening on tcp://localhost:3000
Use Ctrl-C to stop
```
That means the server is working now. You can visit the database by going to 
`http://localhost:3000/movies`. 

Once the server is ready, open the `index.html` within folder `ghibli-movies-frontend` on your browser and then you can see, create and delete movies!

## Credit

I got all the movie and character information from these following websites, and also modify some of them: 

1. Ghibli Wiki  https://ghibli.fandom.com/wiki/Ghibli_Wiki
2. Disney Wiki  https://disney.fandom.com/wiki/The_Disney_Wiki
3. Studio Ghibli API https://github.com/janaipakos/ghibliapi.git 

