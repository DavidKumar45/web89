# Personal Website
This is my no-bullshit personal website. It is literly text, links, and pretty colors.
Feel free to fork and use for yourself. You can spice it up with changing the font or using a different color theme.

## Installation
```shell script
git clone https://github.com/bradenn/website.git
cd website
npm install
echo "PORT=3000" > .env # This is for development only
```

## Running In Development
Basic:
```shell script
node app.js
```
Recommended:
```shell script
nodemon app.js
```

## Running In Production
I recommend using docker if you have access, even for such a lightweight project.
### Build your container
```shell script
docker build . -t [your-name-space]/[your-image-name]:[version] # You can tag it seperatly if needed
```


## License
[mpl-2.0](https://choosealicense.com/licenses/mpl-2.0/)
