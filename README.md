# **AndreDevayAPI**

> AndreDevayAPI is a free REST API which is written in JavaScript, using Node.js and Express.js, to connect to MongoDB and implement all CRUD (Create, Read, Update and Delete) operations to manage user accounts.


Feel free to see the source code [here](https://github.com/andretorresdg/AndreDevayAPI) .

---

## Table of Contents

- [Initiating](#initiating)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Testing](#testing)
- [Author](#author)
- [Support](#support)
- [License](#license)

---

## Initiating


>1) On GitHub, navigate to the [main page](https://github.com/andretorresdg/AndreDevayAPI) of the repository.

>2) Clone or download buttonUnder the repository name, click Clone or download.

>3) Clone URL buttonIn the Clone with HTTPs section, click  to copy the clone URL for the repository ( [this web URL](https://github.com/andretorresdg/AndreDevayAPI.git) ).

> 4) Open Git Bash and change the current working directory to the location where you want the cloned directory to be made.

> 5) Type git clone, and then paste the URL you copied in Step 3.


---

## Prerequisites

To run this API effectively, you will need the following programs:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)


And these packages:

- [Express](http://expressjs.com/)
- [MongoDB](https://www.npmjs.com/package/mongodb)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Leite](https://www.npmjs.com/package/leite)
- [Bcrypt.js](https://github.com/shaneGirish/bcrypt-nodejs)
- [Lodash](https://www.npmjs.com/package/lodash)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Request](https://www.npmjs.com/package/request)
- [Joi](https://www.npmjs.com/package/joi)
- [Babbel](https://babeljs.io/docs/en/usage)


> **Tips**

- Install the [Nodemon](https://nodemon.io/) to program more easily
- Use the [Postman](https://www.getpostman.com/) to test 
- Use always the last stable version of these programs and packages

---

## Installing

- You will need to follow these steps for each library that you install

> First, make sure you have already downloaded my API (if you do not, click [here](#initiating) and follow those steps before continuing the installing procedure)

> Then, open your command prompt and write "cd" + the path of the downloaded folder


For example:
```shell
$ cd D:\Users\Admin\Desktop\AndreDevayAPI
```

> Now, install all the packages with the followig command:

```shell
$ npm install --save
```

> If you want to install the nodemon, you should use another command:

```shell
$ npm install -g nodemon
```
 > Finally, you can test the API!



---

## Testing

### Running the main.js

> To run the program, type this in the  command prompt: 

```shell
$ node main.js
```
PS.: Make sure that the path to the "main.js" is correct. 

#### Commands
> These are the steps my API performs. If you wish, feel free to execute each.

PS.: I highly recommend [Postman](https://www.getpostman.com/)  to use the API.

##### GET​ /users
- This command returns an array of JSON with all the users in the database.
##### POST ​/users
-  You should use the "POST", if you want to create a new user.
##### GET ​/users/:id 
- The program will return a specific user to you.
##### PUT ​/users/:id
- It updates some info of a specific user.
##### DELETE ​/users/:id
- "DELETE" is useful to remove a specific user.

### Running the randomUser.js

> The API starts without any type of user. So, if you want that your database initiate with some random users, run the "randomUser.js" once (it will generate 85 random users). 

```shell
$ node randomUser.js
```
PS.: Make sure that the "main.js" is running in another window of the command prompt.

---

## Author

![](https://media.licdn.com/dms/image/C4D03AQFUz7v2_Sr8rg/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=Du-qqKbWMHPeq6Er3SDOVxrdX0dUE_jWQ-wGuamWVig)

| <a href="https://www.linkedin.com/in/andredevay/" target="_blank">**André Devay Torres Gomes**</a> |



---

## Support

If you need some help, contact [me](https://www.linkedin.com/in/andredevay/)!

E-mail:   <andretorresdg@usp.br>


---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2018 © Andre Devay