# 🏫 School Management API

A RESTful Node.js backend built with **Express.js** and **MongoDB Atlas**, designed to manage school records and retrieve schools based on a user's geographical location.

---

## 🌟 Features

- ➕ Add a new school with name, address, and coordinates.
- 📍 Retrieve all schools sorted by **proximity to user's location**.
- 🌍 Geospatial querying using MongoDB's `$geoNear`.
- ☁️ Live deployment using **Render**.
- 📬 API collection available via **Postman**.

## 📦 Tech Stack

- **Node.js**: Backend JavaScript runtime for building the application.
- **Express.js**: Web framework used for creating scalable and modular RESTful APIs.
- **MongoDB**: NoSQL database for managing user location.
- **MongoDB Atlas**: Cloud-hosted MongoDB service for secure and scalable database hosting.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **ES6 Modules**: For maintaining a modular and organized code structure.

## Fork the Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://elements.getpostman.com/redirect?entityId=36661483-1b60d78f-c7d1-47b3-9fa9-8c7b2e319573&entityType=collection)

## ⚙️Setup for Backend

#### Install dependencies

```bash
  npm install
```

#### Create a .env file

```bash
  PORT=3000
  MONGO_URI=your-mongodb-url
```

#### Start the backend server

```bash
 npm run dev
```

## 📡 API Reference

#### Add School

`POST /api/schools/addSchool`

#### Body:

```json
{
  "name": "XYZ School",
  "address": "ABC location",
  "latitude": 18.577,
  "longitude": 73.778
}
```

#### Get Schools

`GET /api/schools/listSchools?lat=19&lng=73`

## Live Demo

Project Deployed on Render.com

[Click here](https://school-management-api-ptqq.onrender.com)

## Authors

- [Mayur Madankar](https://github.com/mayurmadankar)

## Contact me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayur-madankar/) [![LeetCode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&logoColor=black)](https://leetcode.com/u/mayurmadankar/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:madankarmayur5@gmail.com)
[![Naukari](https://img.shields.io/badge/Naukri.com-0A66C2?style=for-the-badge&logo=Naukri.com&logoColor=white)](https://www.naukri.com/mnjuser/profile?id=&altresid)
