# Web Application Frontend

## Libraries used

- React
- React Router DOM: For routing
- Axios: For calling the Nodejs API
- Antd: For creating Table for the music list and Button to got to list page
- Moment: For converting date string to date object

## How to run the application

1. Run frontend code

   `$ npm run start`

2. Go to your browser and enter `http://localhost:8000` to run frontend

## Steps

1. First page is the landing/home page and it has a button to go to the 2nd page that is the music list page

2. In the music list page, API is called to get the response in componentDidMount to get the response from the server

3. After getting the response, data is stored in the state and shown in the table
