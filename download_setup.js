// This is a helper script to ensure CV files are properly copied to the web/download folder
// It's not actually needed during runtime, but is here as documentation for the build process

// During deployment, make sure to:
// 1. Create the web/download folder if it doesn't exist
// 2. Copy the CV files from the download folder to the web/download folder
// 3. Ensure the files are served with the correct MIME types

// Example commands for manual deployment:
// mkdir -p web/download
// cp download/FuadAbughaliCV.pdf web/download/
// cp download/FuadAbughaliCV.docx web/download/

// For hosting platforms like Firebase, also ensure proper MIME type configuration:
// For Firebase, you can add to firebase.json:
/*
"hosting": {
  "headers": [
    {
      "source": "download/*.pdf",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/pdf"
        }
      ]
    },
    {
      "source": "download/*.docx",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        }
      ]
    }
  ]
}
*/ 