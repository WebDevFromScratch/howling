# Howling

A [Ghost](http://github.com/tryghost/ghost/) theme, made with
[Tailwind CSS](https://github.com/tailwindcss/tailwindcss).

# Todos

- [x] build post view
- [x] add menu/navbar
- [x] extract footer properly - well, somewhat properly so far...
- [x] add a possiblity to turn the theme into a `.zip` archive
- [ ] add author pages
- [ ] add custom pages
- [ ] add better readme
- [ ] add easy customisation possibilities
- [ ] add different treating of posts without data like: image, tags, etc.
- [ ] add different treating of collaborative posts

# Customising

- Update files in any way you want :)
- To build assets, simply run `gulp` command
- To then turn your customised theme into a .zip file, that you can then upload
  via your Ghost admin panel, run `gulp-zip`

# Using on your website

- Download the `howling.zip` file or clone the whole repository
  `git clone git@github.com:WebDevFromScratch/howling.git`
- Open up your Ghost admin panel (`YOUR_WEBSITE_BASE_URL/ghost` or use the [native
  Ghost app](https://ghost.org/downloads/) for the system you are on)
- Go to the `Settings -> Design` sub-menu tab in your Ghost admin, click on the
  `Upload a theme` button and select the `howling.zip` file
- Make sure that `howling` theme is active
