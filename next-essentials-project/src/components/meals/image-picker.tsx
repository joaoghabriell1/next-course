"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

import Image from "next/image";

const ImagePicker = ({ label, name }: { label: string; name: string }) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement | null>(null);

  function handlePickImage() {
    imageInput?.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked!</p>}
          {pickedImage && <Image fill src={pickedImage} alt="Picked Image" />}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button onClick={handlePickImage} className={classes.button} type="button">
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
