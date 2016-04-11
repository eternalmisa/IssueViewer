# Github Issue Viewer (AngularJS apps)

### Introduction
Let me begin by expressing the gratitude of this opportunity Vine gave to me. And then, I would like to give a brief introduction about my project.

This project is an application based on AngularJS framework, which is a viewer of github issues that is entirely client-side. In the development process, I design the whole project using MVC pattern (Please see the "MVC-pattern.jpg"). 

	1. Model: The data that comes from the REST API (https://api.github.com/repos/npm/npm/issues) and the data that API vending is JSON format, which will be stored in javascript objects.

	2. View: The 'index.html' is the template for views. The 'app.js' will route between 'default.html' and 'detail.html' and display all of the objects retrived from RESTful API call.

	3. Controller: The 'app.js' is the main application module and will route between different views/controllers. There are two controllers in my project, 'default.js', 'detail.js' and two custom services which I've factored out of my controllers: 'IssueList.js' and 'Issue.js'. The controller queries the REST API and puts what's necessary for the View on the $scope.

*MVC-pattern.jpg:* ![image](https://github.com/eternalmisa/IssueViewer/blob/master/MVC-pattern.jpg)

*Something else need to mention:*

At first, I tried to write code by myself about the recovering the format of issue body and comments, and the autoLink for @(at sign)/#(hashtag). It costs lots of time and the actual effect is not very perfect. Therefore, I use some open source code to help me. 

1. Using [marked.js](https://github.com/chjj/marked/tree/master/lib) to help convert plain text into html using Markdown text-to-HTML conversion code. 

2. Using twitter-autoLink.js (extract the functionalities I need from [twitter-text.js](https://github.com/twitter/twitter-text/tree/master/js)) to help implement autoLink for @(at sign)/#(hashtag).

### Run the Application
(If you've not installed node.js on your machine before, please using the following command to install.)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install node
```
In order to run this application, please start the server using command:

```
npm start
```

Now please browse to the app at `http://localhost:8000/app/index.html`.



## Directory Layout

```
app/                    --> contains all of the source files for this app              
  assets/               --> contains open sources from Github
    marked.js              
    twitter-autoLink.js       
    ui-bootstrap-tpls-1.2.1.min.js 
  bower_components/     -->contains the angular framework files  
  javascripts/			-->contains all javascript files  
  	controllers/
  		default.js		
  		detail.js      
  	filters/
  		filter.js      
  	services/
  		Issue.js	
  		IssueList.js  
  	app.js   
  stylesheets/			-->contains all stylesheets files
  	style.css
  views/				-->contains all html files
  	default.html      
  	detail.html
  index.html   
 node_modules/        --> contains the npm packages for the  tools we need
```

## Detail information of each file
***assets/marked.js:*** convert plain text into markdown format        
***assets/twitter-autoLink.js:*** extract from twitter-text.js for @(at sign) 
and #(hashtag)        
***assets/ui-bootstrap-tpls-1.2.1.min.js:*** Provide pagination links with the multi-page pagination component.        
***javascripts/controllers/default.js:*** the controller logic: DefaultCtrl (query and display the issue list)        
***javascripts/controllers/detail.js:*** the controller logic: DetailCtrl (query and display a sepcific issue)        
***javascripts/filters/filter.js:*** custom interpolation filter: format the value of issue content for displaying in view)        
***javascripts/services/Issue.js:*** call API "https://api.github.com/repos/npm/npm/issues/:number/:comments" to get the summary and comments of one sepecific issue.        
***javascripts/services/IssueList.js:*** call API "https://api.github.com/repos/npm/       
***javascripts/app.js:*** main application module, route between view/
controller.        
***stylesheets/style.css:*** the style of whole project (lots of same tags in default.html and detail.html, so I put all css in one file.)        
***views/default.html:*** the partial template to display the issue list. Default Page.        
***views/detail.html:*** the partial template to display the detail of one issue. Detail Page.        
***index.html:*** app layout file (the main html template file of the app)