# Copying instructions

## Set Up and Installation.
Having read the contribution guidelines you should have a copy of the source on your local machine. Either way here is a
recap: 

- [ ] Fork the repo.
- [ ] Clone your fork to your local machine.
- [ ] Install the project dependencies by running:
```sh
yarn
```
## Generating the Template and Adding a Profile.
Once you've got installation out of the way: 
 
- [ ] Generate a copy of the profile template by running
```sh
yarn template
```
- [ ] Edit the profile template at `./profile-template.html`. See [Templates](#templates) below on how to edit the template.
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

## Templates

Words enclosed in `{{` and `}}` are templates that need to be filled.
For each template replace:

- `{{ gravatar_url }}` A link to a Gravatar image. See [Adding A Profile Image](#adding-a-profile-image) below for more info.
- `{{ profile_name }}` Your profile name. Be official
- `{{ linkedin_url }}` A link to your LinkedIn profile.
- `{{ github_url }}` A link to your GitHub profile.
- `{{ twitter_url }}` A link to your Twitter profile.
- `{{ profile_summary }}` Say something about yourself. Be creative.
- `{{ gradient_theme }}` A CSS class that applies a gradient theme to the banner behind the profile picture. One of:
    - gradient-pink-flavor
    - gradient-orange-fun
    - gradient-skyline


## Adding A Profile Image
Profile images are linked using Gravatar.
If you are not familiar with Gravatar, it is a service that allows you
to host your profile picture so that its accessible across different
platforms. You can create an account [here](https://en.gravatar.com/)

To generate a Gravatar URL; while at the root of this repository, run the
following command replacing `my@email.address` with the email you used to
set up your Gravatar account.

```sh
yarn gravatar my@email.address
```
