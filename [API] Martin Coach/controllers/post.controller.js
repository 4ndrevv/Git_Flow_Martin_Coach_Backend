const models = require('../models');

function add_user(req, res) {
    const user = {
        firstname_user: req.body.firstname_user,
        lastname_user: req.body.lastname_user,
        birthday_user: req.body.birthday_user,
        telephone_user: req.body.telephone_user,
        email_user: req.body.email_user,
        address_user: req.body.address_user,
    }
    models.user.create(user).then( result => {
        res.status(201).json({
            message: "Create user successfully",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
    });
});
}
    

module.exports = {
    add_user: add_user
}