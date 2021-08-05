require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Person = require('./models/person');

app.use(cors());
app.use(express.json());

morgan.token('post', (request) => {
	if (request.method === 'POST') return JSON.stringify(request.body);
	else return '';
});

morgan.format(
	'postFormat',
	':method :url :status :res[content-length] - :response-time ms :post'
);

app.use(morgan('postFormat'));

app.get('info', (request, response) => {
	Person.find({}).then((persons) => {
		response.send(`<div><p>Phonebook has info for ${
			persons.length
		} people</p></div>
		<div><p>${new Date()}</p></div>`);
	});
});

app.get('/api/persons', (request, response) => {
	Person.find({}).then((persons) => {
		response.json(persons);
	});
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

	person
		.save()
		.then((savedPerson) => savedPerson.toJSON())
		.then((savedAndFormattedPerson) => {
			response.json(savedAndFormattedPerson);
		});
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

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
