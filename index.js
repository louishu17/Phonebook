const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

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

let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

app.get('/api/persons', (request, response) => {
	response.json(persons);
});

app.get('/api/info', (request, response) => {
	const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
	console.log(new Date());
	response.send(`<div><p>Phonebook has info for ${maxId} people</p></div>
                    <div><p>${new Date()}</p></div>`);
});

app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	const person = persons.find((person) => person.id === id);
	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.delete('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((person) => person.id !== id);

	response.status(204).end();
});

const generateId = () => {
	const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
	return id;
};

app.post('/api/persons', (request, response) => {
	const body = request.body;

	console.log(body.name);
	console.log(body.number);

	if (!body.name) {
		return response.status(400).json({
			error: 'name missing',
		});
	}
	if (!body.number) {
		return response.status(400).json({
			error: 'number missing',
		});
	}
	if (persons.filter((person) => person.name === body.name).length !== 0) {
		return response.status(400).json({
			error: 'name must be unique',
		});
	}

	const person = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	app.use(morgan(JSON.stringify(person)));

	persons = persons.concat(person);

	response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
