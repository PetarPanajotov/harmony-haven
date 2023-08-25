# Introduction
Harmony Haven is a web application developed using Angular as a part of the SoftUni course defense on August 20, 2023. This platform is designed to provide users with the ability to explore and discover their dream travel destinations while enabling them to select and book hotels.

## Deployment
The application is deployed in Firebase and Renderer. https://harmony-haven-4e17a.web.app/
Since I'am using the free tier on renderer, there will be loading time ~1-2 mins on initial open. This occurs only once, if the site is not used ~15-20mins.

## Technologies Used
- Angular: The front-end of Harmony Haven is developed using Angular, a popular TypeScript-based web application framework.

- HTML/CSS: The website's structure and styling are implemented using HTML and CSS, ensuring a visually appealing design.

- Node.js: The back-end of Harmony Haven is powered by Node.js, facilitating communication between the Angular front-end and other components.

- MongoDB: Harmony Haven utilizes MongoDB, a NoSQL database, to store and manage user profiles, travel destinations, hotel information, and booking records.

## How to use
1. Clone the repository to your local machine:
   ```shell
   git clone https://github.com/PetarPanajotov/harmony-haven
2. Navigate to project directory:
    ```shell
    cd harmony-haven
3. Navigate to client directory:
    ```shell
    cd client
4. Start the Angular development server:
    ```shell
    ng serve
5. Open your web browser and access the application at http://localhost:4200.

## Account Login Information

To access the Harmony Haven platform, you can use one of the following pre-registered accounts:

1. **Peter's Account:**
   - Email: peter@abv.bg
   - Password: 123456

2.  **Admin Account:**
   - Email: admin@admin.com
   - Password: 123456

Alternatively, you can easily create your own account using the provided registration form. Simply enter your email, first name, last name, and password. The server will automatically log you in after your account is created, providing you with seamless access to the platform.

## Navigation Based on User Status

The navigation options available on Harmony Haven's platform are tailored to your user status. Here's what you can expect:

### Logged-in Users:

Logged-in users are granted access to the following navigation options:

- Home
- Logout
- Destinations

### Guests:

Guests, or users who are not logged in, have access to the following navigation options:

- Home
- Register
- Login
- Destinations

## Functionality

### Admin can access:
- Create destiantion
- Edit destination
- Delete destination
- Add destiantion to popular
- Add Hotel
- Edit Hotel
- Delete Hotel
- Leave Review
- Search

### User can access:
- Logout
- Booking
- Leave review
- Edit his own review
- Delete his own review
- Search

### Guest can access:
- Login
- Register

### Both Guest and Users can:
- See destinations
- See hotels
- Search

## Disclaimer 

The resources utilized on this website are exclusively intended for educational purposes. It's important to note that these resources have not been created nor are they owned by the application developer. They have been incorporated with permission or aligned with fair use guidelines.

While efforts are made to ensure the accuracy and reliability of the resources, it's important to understand that the ownership and legal rights of the images provided cannot be guaranteed. In the event that you are the rightful owner of an image used on this platform and you wish for it to be removed, please don't hesitate to contact us, and we will promptly address your request.

It's essential to recognize that any reliance on the resources presented within this application is undertaken at the user's own discretion and risk. We appreciate your understanding and commitment to responsible use.

For any concerns or requests regarding resource removal, please feel free to reach out to me.
