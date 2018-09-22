/**
 * @fileOverview A script that populates the database with 85 fake users.
 * @author <a href="mailto:andretorresdg@usp.br">André Devay</a>
 * @version 1.0
 */

const Leite = require('leite');
const leite = new Leite();
const bcrypt = require('bcrypt-nodejs');
var {Login} = require('./login.js');
const axios = require('axios');
var i = 0;
//module.exports = {leiteUser}
//leiteUser.save()




axios({
	method: 'post',
	url: 'http://localhost:3000/users',
	data: {
		email: 'andrearroz@sp.com',
		first_name: 'pao',
		last_name: 'devay',
		personal_phone: '998877665',
		password: 'hulkhulk'
	}
}).then(function(res) {
	console.log(res.status);
	console.log(JSON.stringify(res.data, undefined, 2));
}).catch((e) => {
	console.log('Deu erro', e);
});