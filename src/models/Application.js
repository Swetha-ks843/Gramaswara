const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        serviceType: {
            type: String,
            required: true,
            trim: true
        },

        applicantName: {
            type: String,
            required: true,
            trim: true
        },

        phoneNumber: {
            type: String,
            required: true,
            trim: true
        },

        address: {
            type: String,
            required: true,
            trim: true
        },

        dateOfBirth: {
            type: Date
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"]
        },

        applicationData: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        },

        status: {
            type: String,
            enum: ["Draft", "Submitted", "Completed"],
            default: "Draft"
        }
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model(
    "Application",
    applicationSchema
);

module.exports = Application;