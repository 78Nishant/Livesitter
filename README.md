1. API Documentation
This section details the CRUD (Create, Read, Update, Delete) API endpoints for overlay management in your MERN stack project.

Base URL:
arduino
Copy code
http://localhost:5000
Endpoints
1. Create Overlay
URL: /overlays
Method: POST
Description: Create a new overlay.

Request Body (JSON):

json
Copy code
{
  "text": "Sample overlay text",
  "position": "top",  // Possible values: "top", "bottom"
  "size": "medium",   // Possible values: "small", "medium", "large"
  "videoURL": "rtsp://example-url.com/stream"
}
Response (JSON):

json
Copy code
{
  "_id": "60b6c76d4f1c4c3f809de6ab",
  "text": "Sample overlay text",
  "position": "top",
  "size": "medium",
  "videoURL": "rtsp://example-url.com/stream"
}
2. Get All Overlays
URL: /overlays
Method: GET
Description: Retrieve all overlay settings.

Response (JSON):

json
Copy code
[
  {
    "_id": "60b6c76d4f1c4c3f809de6ab",
    "text": "Sample overlay text",
    "position": "top",
    "size": "medium",
    "videoURL": "rtsp://example-url.com/stream"
  }
]
3. Update Overlay
URL: /overlays/:id
Method: PUT
Description: Update an existing overlay with the given :id.

Request Body (JSON):

json
Copy code
{
  "text": "Updated overlay text",
  "position": "bottom",  // Possible values: "top", "bottom"
  "size": "large",       // Possible values: "small", "medium", "large"
  "videoURL": "rtsp://example-url.com/stream"
}
Response (JSON):

json
Copy code
{
  "_id": "60b6c76d4f1c4c3f809de6ab",
  "text": "Updated overlay text",
  "position": "bottom",
  "size": "large",
  "videoURL": "rtsp://example-url.com/stream"
}
4. Delete Overlay
URL: /overlays/:id
Method: DELETE
Description: Delete an overlay with the given :id.

Response (JSON):

json
Copy code
{
  "message": "Overlay deleted successfully"
}
2. User Documentation
This section provides setup and usage instructions for the livestream app with overlay management.

System Requirements
Node.js (v12 or later)
MongoDB (locally installed or hosted MongoDB service)
FFmpeg (for RTSP to HLS transcoding)
NPM (Node Package Manager)
Setup Instructions
Step 1: Clone the Repository
First, clone the project repository (if not done already):

bash
Copy code
git clone https://github.com/your-repo/livestream-app.git
cd livestream-app
Step 2: Install Backend Dependencies
Navigate to the backend folder and install the dependencies for Node.js and Express:

bash
Copy code
cd backend
npm install
Step 3: Set Up MongoDB
Make sure MongoDB is running locally or provide a hosted MongoDB connection URL.

If using a local MongoDB instance, start it with the following command:

bash
Copy code
mongod
Step 4: Start Backend Server
Run the backend server:

bash
Copy code
node server.js
The API will now be running at http://localhost:5000.

Step 5: Install Frontend Dependencies
Navigate to the frontend folder and install the dependencies for React:

bash
Copy code
cd frontend
npm install
Step 6: Start Frontend Server
Run the frontend server:

bash
Copy code
npm start
The React app will be running at http://localhost:3000.

Step 7: Transcode RTSP to HLS (Optional)
If using an RTSP stream, you’ll need to transcode it to HLS format. Follow the FFmpeg instructions from the earlier guide:

bash
Copy code
ffmpeg -i rtsp://your-rtsp-url -c:v libx264 -hls_time 10 -hls_list_size 5 -f hls output.m3u8
Use a simple HTTP server to serve the HLS files, as explained earlier.

Using the App
Add a Livestream Video:

The RTSP URL can be input in the backend code or transcoded into HLS for playback in the browser.
Manage Overlays:

Below the video, you'll find an Overlay Form.
Text: Enter the text that will appear on the livestream video.
Position: Choose between Top or Bottom.
Size: Choose between Small, Medium, and Large.
After filling in the form, click Create Overlay to apply it to the video.
View Existing Overlays:

Below the form, you’ll see a list of existing overlays.
Each overlay can be deleted by clicking the Delete button next to it.
Inputting the RTSP URL
If you are using a live RTSP stream:

You need to input the RTSP stream into the backend.
After transcoding with FFmpeg, use the generated HLS URL (output.m3u8) in the app to play the stream.
Changing the RTSP URL:

Open the React code and replace the RTSP_URL with the HLS URL you generated.
Example:
javascript
Copy code
const RTSP_URL = "http://localhost:8080/output.m3u8";
Troubleshooting
RTSP Stream Not Playing:

Make sure the RTSP stream is being transcoded into HLS correctly using FFmpeg.
Use a simple HTTP server (e.g., Python or Nginx) to serve the .m3u8 files.
MongoDB Connection Issues:

Ensure that MongoDB is running locally or that your hosted MongoDB connection string is correct.
API Errors:

Verify that the backend server is running at http://localhost:5000.
Check the console for any API errors and ensure that you have the correct endpoints.
