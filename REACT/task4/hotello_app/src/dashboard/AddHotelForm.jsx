import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

function AddHotelForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [guest, setGuest] = useState("");
  const [children, setChildren] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hotelData = {
      name,
      description,
      guest,
      children,
      price: parseFloat(price),
    };

    try {
      const docRef = await addDoc(collection(db, "hotels"), hotelData);
      console.log("Document written with ID: ", docRef.id);
      // Clear form fields
      setName("");
      setDescription("");
      setGuest("");
      setChildren("");
      setPrice("");
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
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="guest" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="discription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">

        <select aria-label="Default select"
            type="text"
            className="form-select"
            id="guest"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            required >
         <option selected>Guests</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="2">4</option>
            <option value="3">5</option>
      </select>
        </div>

        <div className="mb-3">

<select aria-label="Default select"
    type="text"
    className="form-select"
    id="children"
    value={children}
    onChange={(e) => setChildren(e.target.value)}
    required >
 <option selected>Children</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="2">4</option>
    <option value="3">5</option>
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
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
    </div>
  );
}

export default AddHotelForm;
