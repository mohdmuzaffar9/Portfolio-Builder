const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// require('dotenv').config();

const app = express();
// MONGO_URI=mongodb://localhost:27017/portfolioBuilder

//const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/portfolioBuilder", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const portfolioSchema = new mongoose.Schema({
  FullName: String,
  Title: String,
  profilePicture: String,
  email: String,
  phone: String,
  Location: String,
  aboutMe: String,
  education: [{
    degree: String,
    institution: String,
    field: String,
    startDate: Date,
    endDate: Date
  }],
  experience: [{
    jobTitle: String,
    company: String,
    description: String,
    startDate: Date,
    endDate: Date
  }],
  certification: [{
    certificatename: String,
    issuingOrganization: String,
    issueDate: Date
  }],
  skills: [String],
  languages: [{
    name: String,
    yearsofexperince: Number
  }],
  projects: [{
    name: String,
    description: String,
    techStack: String,
    link: String
  }],
  blog: [{
    title: String,
    content: String
  }],
  contact: {
    email: String,
    phone: String,
    address: String,
    linkedIn: String,
    github: String
  }
  
});


const Portfolio = mongoose.model('Portfolio', portfolioSchema);

app.post('/api/portfolio', async (req, res) => {
  try {
    const newPortfolio = new Portfolio(req.body);
    console.log(newPortfolio)
    await newPortfolio.save();
    res.status(201).json(newPortfolio);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create portfolio' });
  }
});

app.post('/api/getPortfolio', async (req, res) => {
  
  const {name} = req.body
  console.log(name)
 try {
    const portfolio = await Portfolio.findOne({ FullName  : name });
    console.log(portfolio,"its a request call");
    if (!portfolio) return res.status(404).json({ error: 'Not found' });
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
