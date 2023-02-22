const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
    addNewTicket
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets})
            });
        });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}  

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect(`/flights/${flight._id}`);
    });
}

function addNewTicket(req, res) {
    const seat = req.body.seat;
    const price = req.body.price;
    const flight = req.params.id;
    const ticket = new Ticket({seat, price, flight});
    ticket.save(function(err) {
        if (err) return res.render('flights/new');
        res.redirect(`/flights/${req.params.id}`);
    });
}