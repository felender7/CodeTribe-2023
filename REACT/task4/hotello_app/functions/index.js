/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Provide your email service credentials here
  service: "Gmail", // e.g., 'Gmail'
  auth: {
    user: "felender23@gmail.com", // Your email address
    pass: "Tlang126920.!!", // Your email password
  },
});

exports.sendReservationEmail = functions.firestore
  .document('reservation/{reservationId}')
  .onCreate((snap, context) => {
    const reservationData = snap.data();

    const mailOptions = {
      from: "felender23@gmail.com", // Your email address
      to: reservationData.email,
      subject: "Reservation Confirmation",
      text: `Hello ${reservationData.name},\n\nThank you for your reservation. Your reservation details are as follows:\n\nHotel Name: ${reservationData.hotelName}\nCheck-In: ${reservationData.updateCheckIn}\nCheck-Out: ${reservationData.updateCheckOut}\nTotal Price: R ${reservationData.GrandTotal}\n\nEnjoy your stay!\n\nBest Regards,\nThe Hotel Team`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });