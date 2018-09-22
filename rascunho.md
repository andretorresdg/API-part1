while (i<3) {
    i ++
    
    /** @type {number}
     * The creation of random CPF is used as the password of the fake users.
     */
    var typedPASS = leite.pessoa.rg()
    
    /** @type {string} */
    var emailFILL = leite.pessoa.email()

    /**@type {number} 
     * The creation of random age is used as the personal number of the fake users.
    */
    var numberFILL = leite.pessoa.idade({ min: 800000000, max: 999999999 });

    /** @type {string} */
    var nameFILL = leite.pessoa.nome()

    /** @type {string} */
    var surnameFILL = leite.pessoa.sobrenome();

    /** @type {string} */
    var phoneFILL = numberFILL.toString();

    /** @type {string} */
    var hash = bcrypt.hashSync(typedPASS);


    /** @type {object}
     * Represents a fake user
     */
    var leiteUser = new Login({
        email: emailFILL,
        first_name: nameFILL,
        last_name: surnameFILL,
        personal_phone: phoneFILL,
        password: hash            
    });
}
