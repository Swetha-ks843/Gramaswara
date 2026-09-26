const Application = require("../models/Application");

// Create a new application
const createApplication = async (req, res) => {
    try {
        const application = await Application.create(req.body);

        res.status(201).json({
            success: true,
            message: "Application created successfully",
            data: application
        });
    } catch (error) {
        console.error("Create application error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to create application",
            error: error.message
        });
    }
};


// Get all applications
const getApplications = async (req, res) => {
    try {
        const applications = await Application.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: applications.length,
            data: applications
        });
    } catch (error) {
        console.error("Get applications error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to get applications",
            error: error.message
        });
    }
};


// Get one application
const getApplicationById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            data: application
        });
    } catch (error) {
        console.error("Get application error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to get application",
            error: error.message
        });
    }
};


// Update an application
const updateApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Application updated successfully",
            data: application
        });
    } catch (error) {
        console.error("Update application error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to update application",
            error: error.message
        });
    }
};


// Delete an application
const deleteApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(
            req.params.id
        );

        if (!application) {
            return res.status(404).json({
                success: false,
                message: "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Application deleted successfully"
        });
    } catch (error) {
        console.error("Delete application error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to delete application",
            error: error.message
        });
    }
};


module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication
};