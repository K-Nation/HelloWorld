# Copying instructions

## Templates

Words enclosed in `{{` and `}}` are templates that need to be filled.
For each template replace:

- `{{ gravatar_url }}` A link to a Gravatar image. See [here](#profile_image) for more info.
- `{{ profile_name }}` Your profile name. Be official
- `{{ linkedin_url }}` A link to your LinkedIn profile.
- `{{ github_url }}` A link to your GitHub profile.
- `{{ twitter_url }}` A link to your Twitter profile.
- `{{ profile_summary }}` Say something about yourself. Be creative.
- `{{ gradient_theme }}` A CSS class that applies a gradient theme to the banner behind the profile picture. One of:
    - gradient-pink-flavor
    - gradient-orange-fun
    - gradient-skyline


## Profile Image
Profile images are linked using Gravatar.
If you are not familiar with Gravatar, it is a service that allows you
to host your profile picture so that its accessible across different
platforms. You can create an account [here](https://en.gravatar.com/)

To generate a Gravatar URL; while at the root of this repository, run the
following command replacing `my@email.address` with the email you used to
set up your Gravatar account.

``sh
    yarn gravatar my@email.address
``
or 

``sh
    npm run gravatar my@email.address
``
