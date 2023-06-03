* Logic behind this task:
  - The user enters their email for login.
  - If the email exists and is not verified, the user is informed that they need to verify their account.
  - If the email exists and is verified, a new OTP is generated, updated in the database, and sent to the user's email.
  - The user enters the OTP for verification.
  - If the OTP is correct and not expired, the user is considered successfully logged in.
  - If the OTP is correct but expired, the user is informed that they need to request a new OTP.
  - If the OTP is incorrect, the user is informed that the entered OTP is incorrect.
  - If the user details (email or OTP) are incorrect, the user is informed that the entered details are incorrect.

* The flow of pages in the application is as follows: Signup -> ValidateOTP -> Successful -> Login -> OTP -> Welcome.

* JSON Web Token is used for authentication. The code for authentication is written in the auth.js file in the middleware folder.

* Sendinblue is used for sending the OTP to the user's email. The code for sending emails is written in the sendemail.js file in the util folder. I have created a function to send emails to make the code more readable.This function is used twice in the code.

* An OTP generator is used to generate a new OTP.The function written in the generateuniqueotp.js file in the util folder is responsible for generating a unique OTP. It ensures that each OTP generated is unique and not repeated. This function is used twice in the code.

* Bcrypt.hash is used for hashing the OTP so that others cannot retrieve the OTP from the database even if they have access to it. Bcrypt.compare and salt are used for OTP verification.

* The validateemail function, presumably written using regular expressions (regex), is responsible for validating the format of an email address. It uses a pattern defined by the regex to check if the provided email address matches the expected format. This helps ensure that the email entered by the user is in a valid format before further processing.

* Secrets and important information are stored in the .env file.

* All possible edge cases are handled in the controller folder.

* Bootstrap is used for styling purposes, including responsiveness for different media sizes, such as mobile devices.