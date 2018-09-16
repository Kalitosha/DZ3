module.exports.getLogin = function(req, res){
    res.render('./pages/login', { title: 'Login' });
};

module.exports.postLogin = function(req, res){ // todo надо доделать
    // res.json({ title: 'Login' });
};

