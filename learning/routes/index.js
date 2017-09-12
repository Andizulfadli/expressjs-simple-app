exports.index = function(req, res){
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Ray', 'Morten', 'Diaz']
    });
};

exports.about = function(req, res){
    res.render('default', {
        title: 'About',
        classname: 'about'
    });
};