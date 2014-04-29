# My Boilerplate
This is a combination of:
- HTML5 Boilerplate
- Grunt
- Compass
- Susy

Last update: 29 April 2014

## Workflow
### Install
1. Go to Folder
2. Create package.json npm init
3. Install Grunt Tasks (locally) 
npm install grunt --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-compass --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-contrib-watch --save-dev

### Setup
4. Go to Github, Clone Boilerplate and Create Project Repo
5. Combine Files, Remove Boilerplate Folder & Initialise Git
mv * ..
mv .gitignore ..
mv .htaccess ..
sudo rm -r boilerplate

### Config
6. Install Susy sudo gem install susy
7. Git Init & First Commit