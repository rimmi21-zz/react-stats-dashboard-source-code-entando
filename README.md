# An Entando Bundle that displays a simple Stats Section MFE

## This is built on top of React and Tailwind CSS

## Creation Guidelines

In this bundle we have a single Micro Frontend(MFE). And it was built using the below steps:

- Create a new folder and name it with respect to the bundle. For me, it was statistical-dashboard.
- Inside it, create a bundle_src folder with a `descriptor.yaml` file with the following code:

```
code: simple-stats-app
description: Template for a statistics dashboard
components:
  widgets:
    - ui/widgets/widgets-dir/stats-widget/stats-widget-descriptor.yaml
```

(Note: The code name could be different for your case and the widgets path should be as above but with the exact ,yaml file name)

- Create the following folder structure:

  ui>widgets>widgets-dir>

  And inside widgets-dir folder, we create a new react app with the command `npx create-react-app stats-widget`

  - Inside this, we create a new **bundle** folder and add the yaml file with it's empty ftl file. So for my case it was `stats-widget-descriptor.yaml` and `stats-widget.ftl`

  - Now we modify the react app, as we wish to design it and then [Wrap it with a Custom Element](https://dev.entando.org/v6.3.2/tutorials/micro-frontends/react.html#wrap-with-custom-element) for Entando App to understand the HTML fragments.

  - We build the react app with `npm run build`

- We come back to the root directory of the project, and include the `prepareBundle.sh` and `prepareMicrofrontends.sh` as we can see it's included in my project already. It could be changed incase we were to change the project structure. But otherwise, it's recommended to keep it untouched.

- For the final part, we prepare this bundle with the `ent cli`. We open a terminal that points towards our root directory and use the below commands:

  ## Setting up Project Directory

  - Prepare the bundle directory `cp -r bundle_src bundle`
  - Initialize the project: `ent prj init`
  - Initialize publication: `ent prj pbs-init` (requires the git bundle repo url)
  - Attach to kubernetes for an Entando application via ent attach-kubeconfig config-file or similar

  ## Publish the bundle

  1. Build: `ent prj fe-build -a` (to just build the frontend, including changes from bundle_src)

  2. Publish: `ent prj fe-push` (publish just the frontend)

  3. Deploy (after connecting to k8s above): `ent prj deploy`

  4. Install the bundle via

  - App Builder,
  - `ent prj install`, or
  - `ent prj install --conflict-strategy=OVERRIDE` on subsequent installs.

  5. Iterate steps 1-4 to publish new versions.

Pushing the source code to Github was the hardest part, as this has a sub module that consists of the React App. The following steps helped me!

(I created this application locally at first and then i added this to a new Github Repo.)

- At first, i initialised this repo by `git init`
- Next, added this to git `git remote add origin https://github.com/rimmi21/react-statistics-ui.git`. But i found out that my submodule i.e the folder inside **ui/widgets/widgets-dir/stats-widget** was untracked!
- I went inside the submodule i.e **ui/widgets/widgets-dir/stats-widget** and removed the hidden `.git` folder.
- I did a `rm -rf --cached ./ui/widgets/widgets-dir/stats-widget` from the root directory.
- Next, did a final `git add .`
- Also, did this `git branch -M main` and `git push -u origin main` to push the code to the right branch of our repo, as it was the very first push.
