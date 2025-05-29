const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const Submission = new mongoose.Schema({
    homeworkId: {
        type: ObjectId,
        ref: 'Homework',
        required: true,
    },
    studentId: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    markDone: {
        type: Boolean,
        default: false,
    },
    fileAttributes: [{
        name: String,
        size: String,
        extension: String,
    }],
    attachedFiles: [{
        type: String, // link Google Drive
    }],
    comment: String,
    score: {
        type: Number,
        default: null,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Submission', Submission);
