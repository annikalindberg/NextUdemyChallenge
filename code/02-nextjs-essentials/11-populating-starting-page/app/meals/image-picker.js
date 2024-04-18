'use client';
import classes from './image-picker.module.css';
import { useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(); // [1]
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0]; // could add the "multiple" attribute to the input element to allow multiple files to be selected
    if (!file) {
      setPickedImage(null);
      return;
    }
    // this
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt='Image selected bu user'
              fill
            />
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          name={name}
          accept='image/png, image/jpeg'
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
        >
          pick image
        </button>
      </div>
    </div>
  );
}
