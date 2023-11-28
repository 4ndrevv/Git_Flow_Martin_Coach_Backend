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

function show_user(req, res){
    const id = req.params.id;

    models.user.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "user not found"
            })
        }
    })
}

function show_all_user(req, res){
    models.user.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "something wrong"
        })
    })
}

function update_user(req, res){
    const id = req.params.id;
    const update_user = {
        firstname_user: req.body.firstname_user,
        lastname_user: req.body.lastname_user,
        birthday_user: req.body.birthday_user,
        telephone_user: req.body.telephone_user,
        email_user: req.body.email_user,
        address_user: req.body.address_user,
    }
// id:id -> colunme value:colunme table
    models.user.update(update_user, {where:{id:id}}).then(result => {
        res.status(200).json({
            message: "user update success",
            user: update_user
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something wrong",
            error: error
        })
    }) 
}

function delete_user(req, res){
    const id = req.params.id;

    models.user.destroy({where: {id:id}}).then(result => {
        res.status(200).json({
            message: "user delete success",
            user: update_user
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something wrong",
            error: error
        })
    })
}
    

module.exports = {
    add_user: add_user,
    show_user: show_user,
    show_all_user: show_all_user,
    update_user: update_user,
    delete_user: delete_user
}