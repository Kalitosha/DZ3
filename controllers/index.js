module.exports.getIndex = function(req, res){
    res.render('./pages/index', { title: 'Home' });
};

module.exports.postIndex = function(req, res){ // todo надо доделать
    res.json({ title: 'Home' });
};

