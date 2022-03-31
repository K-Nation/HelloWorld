# Hello World.

### What it is.
A catalog of K-Nation member profiles.

### Why it exists.
An introduction to the world of code. <br/>
The purpose of this repo is twofold; First, to allow member to introduce themselves
in a meaningful way to the rest of the developer community. It's also a trial of sorts as members will have to do a 
bit of legwork to make their first contribution.

### How to contribute.
Adding your profile to the catalog is in concept quite simple, but can be daunting for a noob.
Please read the [CONTRIBUTION GUIDELINES](https://github.com/K-Nation/HelloWorld/blob/main/CONTRIBUTING.md) then follow these steps to add your profile.

- [ ] Fork the repo and clone it to your machine.
- [ ] Install all dependencies.
- [ ] Edit and copy the profile template from `docs/profile-template.html`. Please read the [COPYING INSTRUCTIONS](https://github.com/K-Nation/HelloWorld/blob/main/COPYING.md)
- [ ] Paste your profile into `docs/index.html` immediately above
```HTML
<!-- END OF PROFILE LIST -->
```
- [ ] Generate the CSS by running
```sh
yarn build:css
```
- [ ] Verify that your details were added properly by running the website locally. Run the server with
```sh
yarn serve
```
- [ ] Commit your changes, push to GitHub and create a pull request.


### License

This project is released under the [MIT](https://choosealicense.com/licenses/mit/) License.
