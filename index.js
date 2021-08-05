require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Person = require('./models/person');

app.use(express.static('build'));
app.use(cors());
app.use(express.json());

app.use(
	morgan(function (tokens, req, res) {
		return [
			tokens.method(req, res),
			tokens.url(req, res),
			tokens.status(req, res),
			tokens.res(req, res, 'content-length'),
			'-',
			tokens['response-time'](req, res),
			'ms',
			JSON.stringify(req.body),
		].join(' ');
	})
);

app.get('/api/persons', (request, response) => {
	Person.find({}).then((persons) => {
		response.json(persons);
	});
});

app.get('/api/info', (request, response) => {
	const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
	console.log(new Date());
	response.send(`<div><p>Phonebook has info for ${maxId} people</p></div>
                    <div><p>${new Date()}</p></div>`);
});

app.get('/api/persons/:id', (request, response) => {
	Person.findById(request.params.id).then((person) => {
		response.json(person);
	});
});

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((person) => person.id !== id);

	response.status(204).end();
});

app.post('/api/persons', (request, response) => {
	const body = request.body;

	if (body.name === undefined) {
		return response.status(400).json({ error: 'name missing' });
	}

	if (body.number === undefined) {
		return response.status(400).json({ error: 'number missing' });
	}

	const person = new Person({
		name: body.name,
		number: body.number,
	});

	person.save().then((savedPerson) => {
		response.json(savedPerson);
	});
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
