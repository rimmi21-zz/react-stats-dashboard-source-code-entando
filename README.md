# An Entando Bundle that displays a simple Stats Section MFE

## This is built on top of React and Tailwind CSS

Pushing the source code to Github was the hardest part, as this has a sub module that consists of the React App. The following steps helped me!

(I created this application locally at first and then i added this to a new Github Repo.)

- At first, i initialised this repo by `git init`
- Next, added this to git `git remote add origin https://github.com/rimmi21/react-statistics-ui.git`. But i found out that my submodule i.e the folder inside **ui/widgets/widgets-dir/stats-widget** was untracked!
- I went inside the submodule i.e **ui/widgets/widgets-dir/stats-widget** and removed the hidden `.git` folder.
- I did a `rm -rf --cached ./ui/widgets/widgets-dir/stats-widget` from the root directory.
- Next, did a final `git add .`
- Also, did this `git branch -M main` and `git push -u origin main` to push the code to the right branch of our repo, as it was the very first push.
