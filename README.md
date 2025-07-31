## 🔐 Password Reset Flow (React.js)
- This application implements a secure password reset flow in React JS and Node js and MongoDb.

## 🚀 Features
- 📩 Forgot Password
    - Simple email input form
    - Sends reset token via backend API
    - Displays user-friendly confirmation message

- 🔑 Reset Password
    - Handles secure token from email
    - Validates password and confirm-password match
    - Sends new password to backend
    - Shows success or error messages
    - Clears form inputs after successful reset

- 💬 Inline Validation
    - Alerts for mismatched passwords
    - Required field handling

- 🔄 API Integration
    - Axios-based reusable instance
    - Clear error handling with try/catch
    - Displays backend response messages

- 🎯 Clean UX
    - Form components with clear labels and placeholders
    - Responsive and accessible design

## 🧱 Technologies Used
- ⚛️ React.js – JavaScript library for building user interfaces
- 🧭 React Router DOM – Client-side routing for page navigation
- 🔄 Axios – Promise-based HTTP client for API requests
- 🎨 CSS / Tailwind CSS – For responsive and clean UI (customizable)

## 🛠️ How It Works
- Forgot Password
    - User visits the "Forgot Password" page.
    - Enters their registered email address.
- 2️⃣ Reset Password
    - User clicks the email link and is redirected to the "Reset Password" page in the React app.
    - The app extracts the token from the URL using useParams().
    - User enters a new password and confirms it.
    - Password Reset in database .
## nodemailer :
    - i am using testemail so sharing for validate
    - https://ethereal.email/
    - 'samara.morissette@ethereal.email'
    - PASS = 'VKF7bd6TU9ST26mp6M'
    - And user sample mail-id for testing - 123456@gmail.com

## Deployed Link
- 