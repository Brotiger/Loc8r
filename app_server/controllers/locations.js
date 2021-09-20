module.exports.homeList = function(req, res){
    res.render('location-list', {
        title: 'Loc8r - Подберет для вас место для работы с wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Подберет для вас место для работы с wifi'
        },
        locations: [
            {
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Primary wifi'],
                distance: '100м'
            },
            {
                name: 'Starcups1',
                address: '125 High Street, Reading, RG6 1PS2',
                rating: 4,
                facilities: ['Hot drinks1', 'Food1', 'Primary wifi1'],
                distance: '1000м'
            }
        ]
    });
}

module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {title: 'Starcups'},
        sidebar: {
            context: 'asdasdasdas asdasdasdasd asdasdasdas asdadadasd',
            callToAction: 'asdadasdasd asdasdasdasd asdasdasdasdasd asdadadsasdas asdadasd'
        },
        location: {
            name: 'Starcups',
            address: '125 High Sreet, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {lat: 37.604, lng: 55.6},
            openingTimes: [
                {
                    days: 'ПН - ПТ',
                    opening: '7:00',
                    closing: '19:00',
                    closed: false
                },
                {
                    days: 'СБ',
                    opening: '8:00',
                    closing: '17:00',
                    closed: false
                },
                {
                    days: 'ВС',
                    closed: true
                }
            ],
            reviews: [
                {
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 января 2013',
                    reviewText: 'asdasdas asdasdasd asdasdasd asdasdasdasd asdasdasd'
                },
            ]
        }
    });
}

module.exports.addReview = function(req, res){
    res.render('location-review-form', {
        title: 'asdasdads asdasd asfdasd',
        pageHeader: { title: 'Добавить отзыв' }
    });
}