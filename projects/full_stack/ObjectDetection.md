---
title: "Object Detection using TensorFlow.js and the COCO-SSD model"
subtitle: "This project demonstrates real-time object detection using TensorFlow.js and the COCO-SSD model."
date: "Jan 08, 2025"
tags: ["React", "TensorflowJS"]
bannerImage: "/Images/ObjectDetection.png"
build_platform: {name : "Web App", icon: "desktop"}
social: [{ name : "github", link: "https://github.com/VishalJangid123/react-tfjs-object-detection?portfolio"}]
---
This project demonstrates real-time object detection using TensorFlow.js and the COCO-SSD model. The application requests camera permission from the user, and once granted, it starts detecting objects from the video stream and overlays the predictions (bounding boxes and labels) on a canvas.

## Live Demo
https://vishaljangid123.github.io/react-tfjs-object-detection/

## Features

- Requests camera permission from the user.
- Displays the live camera feed.
- Performs real-time object detection using the COCO-SSD model from TensorFlow.js.
- Displays bounding boxes around detected objects in the camera feed.
- Continuously updates the predictions as the video plays.

## Technologies Used

- **React**: For building the user interface.
- **TensorFlow.js**: For performing real-time object detection.
- **COCO-SSD**: A pre-trained object detection model in TensorFlow.js.
- **Canvas API**: To draw bounding boxes and labels around detected objects.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/VishalJangid123/react-tfjs-object-detection.git
cd react-tfjs-object-detection
```

### 2. Install dependencies

Ensure you have **Node.js** installed on your system. Then, run:

```bash
npm install
```

### 3. Start the development server

Run the following command to start the application locally:

```bash
npm start

```

This will open the application in your browser at `http://localhost:3000`.

## How it Works

1. **Camera Permission**: When the app is loaded, it will check if the browser has permission to access the camera.
2. **Requesting Permission**: If the camera permission is not granted, it will ask the user to allow camera access.
3. **Object Detection**: Once the camera stream is available, the app uses TensorFlow.js and the COCO-SSD model to perform object detection on the live video stream.
4. **Displaying Results**: The detected objects are drawn with bounding boxes and labels on an HTML `<canvas>` element placed on top of the video feed.
