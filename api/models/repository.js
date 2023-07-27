const mongoose = require('mongoose');

const repoSchema = mongoose.Schema(
  {
    repoName: {
      type: String,
      required: true,
      trim: true,
    },
    userID: {
      type: String,
      required: true,
      trim: true,
    },
    description: String,
    access: {
      type: String,
      required: true,
      enum: ['public', 'private'],
      default: 'public',
    },
    creationDate: {
      type: Date,
      default: Date.now(),
    },
    lastUpdated: {
      type: Date,
      default: Date.now(),
    },
    numVisits: {
      type: Number,
      default: 1,
    },
    numForks: {
      type: Number,
      default: 0,
    },
    numStars: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
); //not keeping document versioned

module.exports = mongoose.model('Repository', repoSchema);
