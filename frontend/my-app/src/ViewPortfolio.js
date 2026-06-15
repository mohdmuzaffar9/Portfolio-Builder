import React, { useState } from 'react';
import axios from 'axios';
import './ComponentsStyles/view.css';
import Header from "./Header"

function ViewPortfolio() {
  const [name, setName] = useState('');
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState('');

  const fetchPortfolio = async () => {
    if (!name.trim()) {
      setError('Please enter a full name.');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:5000/api/getPortfolio', { name });
      if (!data || !data.FullName) {
        setError('No portfolio found for this name.');
        setPortfolio(null);
        return;
      }
      setPortfolio(data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error fetching portfolio.');
    }
  };

  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="portfolio-wrapper">
<Header/>
      <div className="search-section">
        <h2>Search Portfolio</h2>
        <input
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={fetchPortfolio}>View</button>
        {error && <p className="error">{error}</p>}
      </div>

      {portfolio && (
        <div className="portfolio">
          {/* Hero Section */}
          <section className="hero">
            {portfolio.profilePicture && (
              <img src={portfolio.profilePicture} alt="Profile" className="profile-img" />
            )}
            <div>
              <h1>{portfolio.FullName}</h1>
              <h3>{portfolio.Title}</h3>
              <p>{portfolio.Location}</p>
            </div>
          </section>

          {/* About */}
          <section className="section">
            <h2>About Me</h2>
            <p>{portfolio.aboutMe}</p>
          </section>

          {/* Education */}
          <section className="section">
            <h2>Education</h2>
            {portfolio.education.map((edu, idx) => (
              <div key={idx} className="card">
                <p>
                  Pursued a <strong>{edu.degree}</strong> in <strong>{edu.field}</strong> at <strong>{edu.institution}</strong>{' '}
                  from <strong>{formatDate(edu.startDate)}</strong> to <strong>{formatDate(edu.endDate)}</strong>.
                </p>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section className="section">
            <h2>Experience</h2>
            {portfolio.experience.map((exp, idx) => (
              <div key={idx} className="card">
                <p>
                  Worked as a <strong>{exp.jobTitle}</strong> at <strong>{exp.company}</strong> from{' '}
                  <strong>{formatDate(exp.startDate)}</strong> to <strong>{formatDate(exp.endDate)}</strong>.
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="section">
            <h2>Certifications</h2>
            {portfolio.certification.map((cert, idx) => (
              <div key={idx} className="card">
                <p>
                  Certified in <strong>{cert.certificatename}</strong> by <strong>{cert.issuingOrganization}</strong> in{' '}
                  <strong>{formatDate(cert.issueDate)}</strong>.
                </p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="section">
            <h2>Skills</h2>
            <div className="skill-tags">
              {portfolio.skills.map((skill) => (
                <span  className="tag">{skill}</span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="section">
            <h2>Languages</h2>
            <ul>
              {portfolio.languages.map((lang, idx) => (
                <li key={idx}>
                  Proficient in <strong>{lang.name}</strong> with <strong>{lang.yearsofexperince}</strong> years of experience.
                </li>
              ))}
            </ul>
          </section>

          {/* Projects */}
          <section className="section">
            <h2>Projects</h2>
            {portfolio.projects.map((proj, idx) => (
              <div key={idx} className="card">
                <p>
                  <strong>{proj.name}</strong>: {proj.description}
                </p>
                <p><strong>Tech Stack:</strong> {proj.techStack}</p>
                {proj.link && <a href={proj.link} target="_blank" rel="noreferrer">View Project</a>}
              </div>
            ))}
          </section>

          {/* Blog */}
          <section className="section">
            <h2>Blog Posts</h2>
            {portfolio.blog.map((post, idx) => (
              <div key={idx} className="card">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </section>

          {/* Contact */}
          <section className="section">
            <h2>Contact</h2>
            <p><strong>Email:</strong> {portfolio.contact?.email}</p>
            <p><strong>Phone:</strong> {portfolio.contact?.phone}</p>
            <p><strong>Address:</strong> {portfolio.contact?.address}</p>
            <p><strong>GitHub:</strong> <a href={portfolio.contact?.github} target="_blank" rel="noreferrer">{portfolio.contact?.github}</a></p>
            <p><strong>LinkedIn:</strong> <a href={portfolio.contact?.linkedIn} target="_blank" rel="noreferrer">{portfolio.contact?.linkedIn}</a></p>
          </section>
        </div>
      )}
    </div>
  );
}

export default ViewPortfolio;