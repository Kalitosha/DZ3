module.exports.getAdmin = function(req, res){
    res.render('./pages/admin', { title: 'Admin' });
};

module.exports.postAdmin = function(req, res){ // todo надо доделать
    // res.json({ title: 'Admin' });
};

module.exports.postSkills = function(req, res){ // admin/skills // todo надо доделать
    // res.json({ title: 'Admin' });
};

module.exports.postUpload = function(req, res){ // admin/upload // todo надо доделать
    // res.json({ title: 'Admin' });
};
