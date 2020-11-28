const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const { response } = require('express');

const application = express();

dotenv.config();

application.use(helmet());
application.use(cors());
application.use(morgan('dev'));
application.use(express.json());

application.post('/fcm', (req, res, next) => {
  const { title, content, delay, deviceId } = req.body;

  if (!delay) {
    delay = 0;
  }

  const configuration = {
    to: `${deviceId}`,
    notification: {
      title: `${title}`,
      body: `${content}`,
      content_available: true,
      priority: 'high',
    },
  };

  const headerConfiguration = {
    headers: {
      Authorization: `key=${process.env.SERVER_KEY}`,
    },
  };

  res.status(200).json({
    success: true,
    message: 'Request was sent.',
  });

  setTimeout(() => {
    axios.post(
      'https://fcm.googleapis.com/fcm/send',
      configuration,
      headerConfiguration
    );
  }, +delay * 1000);
});

application.get('/', (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Default route',
  });
});

application.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
