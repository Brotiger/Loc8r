module.exports.homeList = function(req, res){
    res.render('location-list', {title: 'Главная'});
}

module.exports.locationInfo = function(req, res){
    res.render('location-info', {title: 'Информация о мастоположении'});
}

module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Добавить отзыв'});
}