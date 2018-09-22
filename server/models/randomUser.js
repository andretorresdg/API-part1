/**
 * @fileOverview A script that populates the database with 85 fake users.
 * @author <a href="https://www.linkedin.com/in/andredevay/"> André Devay </a>
 * @version 1.0
 */

 /**
 * @module leite
 * @desc Contains utility functions for create random users.
 */
const Leite = require('leite');
const leite = new Leite();

 /**
 * @module bcrypt
 * @desc This module uses crypto to create random byte arrays .
 */

const bcrypt = require('bcrypt-nodejs');
var {Login} = require('./login.js');

/**
 * @module axios
 * @desc Make HTTP requests from node.js
 */

const axios = require('axios');
var i = 0;

/**
 * @function funcAS
 * @async
 * @param {object} user All the information of an especif user.
 */

async function funcAS(user) {
	try {
		const response = await axios({
			method:'post',
			url: 'http://localhost:3000/users',
			data: user
		});
		console.log("Sent successfully one more random user!")


	} catch (error) {
		console.error(error);
	}
}

while (i<85) {
    i ++

    /** @namespace {typedPASS} String The creation of random CPF is used as the password of the fake users.
     */
    var typedPASS = leite.pessoa.rg()
    
    /** @namespace {emailFILL} String */
    var emailFILL = leite.pessoa.email()

    /**@namespace {numberFILL} Number The creation of random age is used as the personal number of the fake users.
    */
    var numberFILL = leite.pessoa.idade({ min: 800000000, max: 999999999 });

    /**@namespace {nameFILL} String */
    var nameFILL = leite.pessoa.nome()

    /** @namespace {surnameFILL} String */
    var surnameFILL = leite.pessoa.sobrenome();

    /** @namespace {phoneFILL} String */
    var phoneFILL = numberFILL.toString();

    /** @namespace {hash} String */
    var hash = bcrypt.hashSync(typedPASS);


   /**
    * @namespace {leiteUser} Object Cotains all info of an user.
    * @property {String} email 
    * @property {String} first_name 
    * @property {String} last_name 
    * @property {String} personal_phone 
    * @property {String} password 
    */
    var leiteUser = new Login({
        email: emailFILL,
        first_name: nameFILL,
        last_name: surnameFILL,
        personal_phone: phoneFILL,
        password: hash            
	});
	
	console.log(leiteUser);
	funcAS(leiteUser)


}



