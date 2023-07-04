import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../../config/firebase";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";

function AddHotelForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [guest, setGuest] = useState("");
  const [children, setChildren] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Generate a unique filename for the image
      const imageName = Date.now() + "_" + image.name;

      // Upload the image file to Firebase Storage
      const imageRef = ref(storage, `images/${imageName}`); // Add a forward slash before "images"
      await uploadBytes(imageRef, image);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(imageRef);

      const hotelData = {
        name,
        description,
        guest,
        children,
        price: parseFloat(price),
        imageUrl: downloadURL, // Add the image URL to the hotel data
      };

      // Save the hotel data to Firestore
      const docRef = await addDoc(collection(db, "hotels"), hotelData);
      console.log("Document written with ID: ", docRef.id);
      // Clear form fields
      setName("");
      setDescription("");
      setGuest("");
      setChildren("");
      setPrice("");
      setImage(null);
      alert("Hotel details saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while saving hotel details. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div>
        <h3>Add Hotel</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <select
              aria-label="Guests"
              className="form-select"
              id="guest"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              required
            >
              <option disabled selected>Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              aria-label="Children"
              className="form-select"
              id="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              required
            >
              <option disabled selected>Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddHotelForm;