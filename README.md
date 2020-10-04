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
### Build Your Container
```shell script
docker build . -t [your-name-space]/[your-image-name]:[version]
```
### Push Your Container
Make sure you are logged in first, then push to Docker hub
```shell script
docker push [your-name-space]/[your-image-name]:[version]
```
### Considering CI
For something this small, setting up ci may seem trivial. It is. You can at least setup github to build your image.
Here is my GitHub Action workflow.
[.github/workflows/docker-image.yml](https://github.com/bradenn/website/blob/master/.github/workflows/docker-image.yml)

## Considerations
Why not just a single html file? That is a wonderful question. With the way I have all of my servers configured, I don't really have a way to serve an HTML file without using more resources than express.

## License
[mpl-2.0](https://choosealicense.com/licenses/mpl-2.0/)
