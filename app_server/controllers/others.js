module.exports.about = function(req, res) {
    res.render('generic-text', { 
        title: 'О приложении',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat necessitatibus laudantium mollitia, et nostrum quae rerum temporibus suscipit, nihil at vel doloribus excepturi qui minus quisquam obcaecati voluptate aut.'
    });
}
