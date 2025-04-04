const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.log(err));
