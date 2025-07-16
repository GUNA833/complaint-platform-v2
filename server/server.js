const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
console.log("MONGO_URI is:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const complaintRoutes = require('./routes/complaintRoutes');
app.use('/api/complaints', complaintRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 6000, () => console.log('Server running'));
  })
  .catch(err => console.error(err));
