# TFTClone (Built with React)

Demo Links - http://littup.cc, https://nirbhay.me/thisforthat

Hosted through GitHub pages - Refer the link: https://github.com/gitname/react-gh-pages

API Links: http://littup.cc/thisforthat/api/all_api_links.html

This website is a clone to http://itsthisforthat.com

![](https://thumbs.gfycat.com/UnluckyAngryEquine-size_restricted.gif)

## If you're using Ubuntu on your local machine, and you want to install the prerequisites at first and then add the source, follow the following steps:

Instructions to setup the react application

```
1. sudo apt install nodejs
2. sudo apt install npm
3. sudo npm install -g create-react-app
4. cd /var/www/html/thisforthat
5. create-react-app tftclone
6. cd tftclone
7. sudo npm install react-fab
8. sudo npm install react-particles-js
9. sudo npm install axios
10. sudo npm install react-burger-menu
11. sudo npm install react-twitter-embed
12. sudo npm install react-typist-loop
13. sudo npm install react-typist
14. sudo npm install material-icons-react
15. sudo npm install node-sass
16. npm start
```
17. Visit http://localhost:3000 in your browser to see the basic react application running.
18. Once, verified remove the contents of the source and public folders in your newly created application and replace them with the source and public folder contents in the repository.
```
19. npm start
```
20. Visit http://localhost:3000 in your browser to see tftclone application running.

Instruction to setup the api (apache php)

Install Apache
```
1. sudo apt-get update -y #using the -y option will automatically accept the conditions of the source update
2. sudo apt-get install apache2 -y #install apache
3. sudo systemctl start apache2.service #start apache
```

Install PHP
```
1. sudo apt-get install php -y
2. sudo apt-get install -y php-{bcmath,bz2,intl,gd,mbstring,mcrypt,mysql,zip} && sudo apt-get install libapache2-mod-php -y
```

Start Apache on boot
```
1. sudo systemctl enable apache2.service
```

Finally, restart Apache to allow PHP to run.
```
1. systemctl restart apache2.service
```

To know more visit: https://www.vultr.com/docs/how-to-install-apache-mysql-and-php-on-ubuntu-17-04

Install and Verify PhantomJS
```
1. sudo apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6-dev libfreetype6 libfontconfig1-dev libfontconfig1 -y
2. sudo wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
3. sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /usr/local/share/
4. sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
5. phantomjs --version
```

To know more visit: https://www.vultr.com/docs/how-to-install-phantomjs-on-ubuntu-16-04

Placing and verifying setup for the API files
```
1. cd /var/www/html
2. mkdir thisforthat
3. add the contents of the php_api folder in the repository to the newly created directory thisforthat.
4. visit http://localhost/thisforthat/api/index.php in your browser to verify if api has been setup correctly.
```

## Similarly, you can setup the application on a MAC too.

## Process Description:
- I have built the application using React and have used PhantomJS and PHP to scrape the data from the original site http://itsthisforthat.com.
- The Application contains the following components:
  1. ThisThatDisplay: It's the rotator along with the the this+that text combination you see in the center of the screen. I have used the TypistLoop library for the text display purpose.
  2. Refresh:This is the heart of the application. On pressing the button, the this+that text combination is fetched using the axios library and a new background image is fetched using the unsplash api according to the screen size.
  3. ParticlesBackground: This is for the particle effect on top of the background.
  4. SocialFloatingButton: This is for the social side of the application. It contains buttons to follow and share. I have used the react-twitter-embed library for this purpose.
  5. SubtextDisplay: This is used to display the subtext seen on the left sidebar with a gif in the background of the text imported from giphy.
  6. SlideBar: SlideBar is the pane you see on the left of the screen. Its used to display the subtext.
  7. APIDisplayComponent: This is for the link to the API clone created by me. It uses a svg for the purpose of display.

## Built With:
    - React
    - PHP
    
## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Developers:
- @nirbhayph - https://github.com/nirbhayph | https://linkedin.com/in/nirbhaypherwani
- @dhirensc - https://github.com/dhirensc | https://linkedin.com/in/dhirenchandnani

## Acknowledgements and Mentions:
> React libraries usages in the application: [Third Party Resources](https://github.com/nirbhayph/thisforthat/blob/master/Third%20Party%20Resources.pdf)

- @Wufe - https://github.com/Wufe/react-particles-js
- Ebram Marzouk - https://codepen.io/P3R0/pen/zxabvb?editors=0100
- @axios - https://github.com/axios/
- @logtrace - https://github.com/logtrace/material-icons-react
- Unsplash API - https://source.unsplash.com/random
- @negomi - https://github.com/negomi/react-burger-menu
- @nerp-tech - https://github.com/nerp-tech/react-fab
- @saurabhnemade https://github.com/saurabhnemade/react-twitter-embed
- Giphy - https://giphy.com/
- Hakkam Abdullah - https://codepen.io/Moslim/pen/zwJPgL
- James Mellers - https://codepen.io/jamesmellers/pen/XKmyoo
- @ratson - https://github.com/ratson/react-typist-loop
- Google Fonts - https://fonts.googleapis.com
- Google Icons - https://material.io/tools/icons/
- @ericpkerr - https://github.com/ericpkerr
- Ben Gilbert - https://linkedin.com/in/benjamingilbert
