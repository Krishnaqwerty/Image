# 📸 Camera Web App (Image)

A simple browser-based camera web app that allows users to capture photos, apply filters, and download the processed images. Built using **React.js** and **Webcam.js**, this app offers multiple aspect ratios and real-time filter application.

---

## 🚀 Features

- 📷 **Capture Photos** using a webcam
- 🎨 **Apply Filters** like grayscale, negative, sepia, brightness, etc.
- 💾 **Download Processed Image**
- 📐 **Adjust Aspect Ratio** for different photo sizes (to be added)
- 📱 **Responsive Design** for different screen sizes
- 🔄 **Retake Photos** if needed
- 🖼 **Live Filter Preview** before capturing the photo

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Webcam.js
- **Styling:** CSS (Flexbox & Responsive Design)
- **State Management:** React Hooks (useState, useEffect, useRef, useCallback)

---

## 🎯 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/krishnaqwerty/image.git
cd image
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm start
```
This will launch the app on `http://localhost:3000/`.

---

## 📂 Project Structure
```
📦 camera-webapp
├── 📂 src
│   ├── 📄 App.js          # Main component
│   ├── 📄 Camera.js       # Camera component (Webcam + Filters + Capture)
│   ├── 📄 styles.css      # Stylesheet
│   ├── 📄 index.js        # Entry point
│   ├── 📄 filters.js      # Handles filters logic (if separated)
├── 📄 package.json       # Dependencies & Scripts
├── 📄 README.md          # Documentation
└── 📄 .gitignore         # Ignored files
```

---

## 📸 Usage Guide
1. Open the app in your browser.
2. Select a filter from the right panel.
3. Click **"Capture"** to take a photo.
4. The image will be displayed with the applied filter.
5. Click **"Download"** to save the processed image.
6. Click **"Retake"** to capture a new photo.

---

## 🎨 Available Filters
- **None** (Original image)
- **Grayscale** (Black & White effect)
- **Sepia** (Vintage look)
- **Negative** (Inverted colors)
- **Brightness** (Enhanced exposure)

---

## 🛠️ Customization
### Add More Filters
You can easily add more filters by modifying the `setFilter` function inside `Camera.js`. For example:
```jsx
<button onClick={() => setFilter("contrast(200%)")}>High Contrast</button>
```

### Aspect Ratio Support (To be added)
We plan to add an **aspect ratio selection** feature where users can choose between:
- **Square (1:1)**
- **Landscape (16:9)**
- **Portrait (9:16)**

---

## 🐞 Troubleshooting
**Issue:** Camera not working?  
🔹 Check browser permissions for webcam access.  
🔹 Restart the app and refresh the page.

**Issue:** Filters not applying?  
🔹 Make sure the `canvasRef` is correctly referenced.  
🔹 Open the browser console (`F12` > Console) and check for errors.

---

## 👨‍💻 Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

### Steps to Contribute:
1. **Fork** this repo.
2. **Clone** your forked repo:
   ```bash
   git clone https://github.com/your-username/camera-webapp.git
   ```
3. **Create a new branch** for your feature/fix:
   ```bash
   git checkout -b feature-new-filter
   ```
4. **Commit your changes**:
   ```bash
   git commit -m "Added new filter option"
   ```
5. **Push and create a pull request**:
   ```bash
   git push origin feature-new-filter
   ```

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## 📞 Contact
If you have any questions, feel free to reach out:
- 📧 Email: meet.kumarkrishna.com
- 🔗 GitHub: [krishnaqwerty](https://github.com/krishnaqwerty)

🌟 If you like this project, consider giving it a **star ⭐** on GitHub!

