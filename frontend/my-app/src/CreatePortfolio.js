import  { useState } from 'react';
import axios from 'axios';
import './ComponentsStyles/index.css'
import Header from "./Header"

const CreatePortfolio = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    Title: '',
    profilePicture: '',
    email: '',
    phone: '',
    Location: '',
    aboutMe: '',
    education: [{
      degree: '',
      institution: '',
      field: '',
      startDate: '',
      endDate: ''
   }],
    experience: [{
      jobTitle: '',
      company: '',
      description: '',
      startDate: '',
      endDate: ''
   }],
    certification: [{
      cerficatename: '',
      issuingOrganization: '',
      issueDate: ''
   }],
    skills: [],
    languages: [{
      name: '',
      yearsofexperince: ''
    }],
    projects: '',
    blog: [{
      title: '',
      content: ''
    }],
    contact: [{
      email: '',
      phone: '',
      address: '',
      linkedIn: '',
      github: ''
    }],
    projects: []
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/portfolio', formData);
      alert('Portfolio created!');
    } catch (error) {
      console.error(error);
      alert('Error creating portfolio');
    }
  };

  return (
    <>
    <Header/>
   
    <form onSubmit={handleSubmit} className = "form-container">
      <input type="text" placeholder="FullName" onChange={(e) => setFormData({ ...formData, FullName: e.target.value })} />
      <input type="text"   placeholder="Title" onChange={(e) => setFormData({ ...formData, Title: e.target.value })} />
      <input type="file" placeholder="ProfilePicture" onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })} />
      <input type="email" placeholder="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <input type="text" placeholder="Location" onChange={(e) => setFormData({ ...formData, Location: e.target.value })} />
      <textarea type="text" placeholder="aboutMe" onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value })} />
        
      <h1>education</h1>
    
      <input type="text" placeholder="Degree" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, degree: e.target.value } })} />
      <input type="text" placeholder="Institution" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, institution: e.target.value } })} />
      <input type="text"  placeholder="Field" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, field: e.target.value } })} />
      <input type="date"   placeholder="startDate" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, startDate: e.target.value } })} />
      <input type="date" placeholder="endDate" onChange={(e) => setFormData({ ...formData, education: { ...formData.education, endDate: e.target.value } })} />
    
      <h2>Experience</h2>

      <input type="text" placeholder="jobTitle" onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, jobTitle: e.target.value } })} />
      <input type="text" placeholder="Company" onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, company: e.target.value } })} />
      <input type="text" placeholder="Description" onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, description: e.target.value } })} />
      <input type="date"  placeholder="startDate" onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, startDate: e.target.value } })} />
      <input type="date"  placeholder="endDate" onChange={(e) => setFormData({ ...formData, experience: { ...formData.experience, endDate: e.target.value } })} />
      
      <h3>certification</h3>

      <input type="text" placeholder="certificatename" onChange={(e) => setFormData({ ...formData, certification: { ...formData.certification, certificatename: e.target.value } })} />
      <input type="text" placeholder="issuingOrganization" onChange={(e) => setFormData({ ...formData, certification: { ...formData.certification, issuingOrganization: e.target.value } })} />
      <input type="date" placeholder="issueDate" onChange={(e) => setFormData({ ...formData, certification: { ...formData.certification, issueDate: e.target.value } })} />
      <h4>Skills</h4>
      <input type="text" placeholder="skill" onChange={(e) => {
        const newSkills = [...formData.skills];
        newSkills.push(e.target.value);
        setFormData({ ...formData, skills: newSkills });
      }} />
      
      <h5>languages</h5>
      <input type="text" placeholder="name" onChange={(e) => setFormData({ ...formData, languages: { ...formData.languages, name: e.target.value } })} />
      <input type="number" placeholder="yearsofexperience" onChange={(e) => setFormData({ ...formData, languages: { ...formData.languages, yearsofexperince: e.target.value } })} />
        
      

      <h6>Projects</h6>
      {formData.projects.map((proj, idx) => (
        <div key={idx}>
          <input type="text" placeholder="Project Name" onChange={(e) => {
            const newProjects = [...formData.projects];
            newProjects[idx].name = e.target.value;
            setFormData({ ...formData, projects: newProjects });
          }} />
          <input type="text" placeholder="Description" onChange={(e) => {
            const newProjects = [...formData.projects];
            newProjects[idx].description = e.target.value;
            setFormData({ ...formData, projects: newProjects });
          }} />
          <input type="text" placeholder="Tech Stack" onChange={(e) => {
            const newProjects = [...formData.projects];
            newProjects[idx].techStack = e.target.value;
            setFormData({ ...formData, projects: newProjects });
          }} />
          <input type="url"   placeholder="Project Link" onChange={(e) => {
            const newProjects = [...formData.projects];
            newProjects[idx].link = e.target.value;
            setFormData({ ...formData, projects: newProjects });
          }} />
          <button type="button" onClick={() => {
            const newProjects = [...formData.projects];
            newProjects.splice(idx, 1);
            setFormData({ ...formData, projects: newProjects });
          }
          }>Remove Project</button>
        </div>
      ))}
      <button type="button" onClick={() => {
        const newProjects = [...formData.projects];
        newProjects.push({ name: '', description: '', techStack: [], link: '' });
        setFormData({ ...formData, projects: newProjects });
     }}>Add Project</button>  

      <h6>blog</h6>
      <input type="text" placeholder="Title" onChange={(e) =>setFormData({ ...formData, blog: { ...formData.blog, title: e.target.value } })} /> 
     <input type="text" placeholder="Content" onChange={(e) =>  setFormData({ ...formData, blog: { ...formData.blog, content: e.target.value } })} />
  

      <h6>Contact</h6>
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })} />
      <input type="tel" placeholder="Phone" onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, phone: e.target.value } })} />
      <input  type="text" placeholder="Address" onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, address: e.target.value } })} />
      <input type="text" placeholder="LinkedIn" onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, linkedIn: e.target.value } })} />
      <input type="text" placeholder="Github" onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, github: e.target.value } })} />
     <button type="submit">Create Portfolio</button>
     <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
      </link>
    </form>
    </>
  );
};

export default CreatePortfolio;