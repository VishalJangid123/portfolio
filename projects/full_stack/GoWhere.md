---
title: "GoWhere"
subtitle: "A mobile app about discovering, creating, and managing local events"
date: "Jan 12, 2025"
tags: ["React Native", "TypeScript", "Expo Router", "Node.js", "MongoDB", "Redux", "JWT"]
bannerImage: "/Images/GoWhere.png"
build_platform: {name : "Mobile App", icon: "mobile-android"}
social: [{ name : "github", link: "https://github.com/VishalJangid123/GoWhere?portfolio"}]
---
Hey there! Welcome to **GoWhere**, my personal project inspired by the **WeGoWhere** app. 🎉

GoWhere is a mobile app built using **React Native**, **Expo Router**, and **MongoDB**. It’s all about discovering, creating, and managing local events while connecting with people in fun, meaningful ways! Whether you're hosting a meetup, going to a concert, or just looking for new activities, GoWhere makes it super easy to express interest, chat with others, follow your favorite users, and search for events — all in one place.

**This app is still a work in progress, but I’m really excited about where it’s going! 💪**

## **Table of Contents**

- [Motivation](#motivation-)
- [Project Overview](#project-overview-)
- [Features](#features-)
- [Technologies Used](#technologies-used-%EF%B8%8F)
- [Work in Progress](#work-in-progress-)
- [Task List](#gowhere-app-task-list-)
- [Screenshots](#screeshot)
  


## **Motivation 💡**

As a **long-time user of [WeGoWhere](https://apps.apple.com/th/app/wegowhere-%E0%B9%81%E0%B8%AD%E0%B8%9E%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%9E-%E0%B8%AD%E0%B8%99/id1458579256?l=th)**, I’ve always appreciated how it connects people to local events, but I often found myself wishing for a few extra features to make the experience more personalized. That’s what inspired me to create **GoWhere** — not as a commercial product, but as a personal learning project to improve my skills in **React Native**, **MongoDB.**

This project has taught me valuable lessons in full-stack development, user-centered design, and how to create intuitive, impactful features. While GoWhere started as a fun experiment for learning, it’s also helped me better understand the kinds of features that would take WeGoWhere to the next level. If I had the chance to join the WeGoWhere team, I’d bring that same passion for creating better experiences and improving apps from the user’s perspective. 🤝


## **Project Overview 📝**

The app lets users:

- **Create and manage events**: Whether it's a weekend hike, a concert, or a casual meetup — you can easily create your own events! 🌄
- **Join events**: Express interest in events you want to attend, or commit to going! 👫
- **Chat with attendees**: You can message other users attending the same event, making planning and coordination easier. 💬
- **Follow users**: Keep track of users you like and stay updated on their events and activities. 🔔
- **Search events**: Find events based on location, date, and more with powerful search and filtering features. 🔍


## **Features 🌟**

### **Current Focused Features:**

- 🎉 Event creation and management (create your own events!)
- 👍 RSVP to events with "Interested" and "Will Go" buttons
- 💬 In-app chat for private and group conversations
- 🧑‍🤝‍🧑 Follow users to track their events and activities
- 🔍 Search for events with filters like location, date, and more
- 🗺️ Map-based event discovery using **MapView** and **OpenStreetMap**
- 🏅 **Event Badges**: Introduce fun gamification with badges for users (e.g., "Social Butterfly" for attending 10 events, "Trailblazer" for creating popular events).
- 🌍 **Nearby Events**: Use your current location to find events that are happening nearby in real-time! 📍
- 📅**Event Calendar**: A calendar view to track your upcoming events and help with planning.
- 🌟 **Event Categories**: Add categories like “Music,” “Outdoor Activities,” “Food & Drink,” etc., to make searching for events even easier.

### **Planned Features 💭:**

- 🎤 **Event Ratings & Reviews**: After attending events, users can rate and leave reviews, helping others know what to expect.
- 🧑‍🤝‍🧑 **Event Collaboration**: Allow users to co-host events, making it easier for groups to organize something together. 🤝
- 🔔 **Push Notifications**: Real-time notifications for new messages, event updates, or when someone interacts with your event. 📲


## **Technologies Used 🛠️**

- **✅ React Native**: A cross-platform framework for building iOS and Android apps with a single codebase.
- **✅ Expo Router**: Simplifies navigation and routing between app screens.
- **✅ MongoDB**: A flexible NoSQL database for storing user data, events, and chat histories.
- **✅ MapView (React Native Map Library)**: Displays events on an interactive map using **OpenStreetMap** data instead of Google Maps.
- **Socket.IO**: Powers real-time chat and event notifications.
- **✅ Redux**: Manages global state across the app for consistency and sync.
- **✅ Node.js**: Backend framework for handling API requests and managing data flow.
- **✅ Express.js**: Builds the RESTful APIs to handle user and event data.
- **Firebase Cloud Messaging (FCM)**: Sends push notifications for new messages and event updates.
- **✅ JWT (JSON Web Tokens)**: Ensures secure user authentication and sessions.
- **OpenStreetMap**: Provides open-source map data for event location display.

## **Work in Progress 🚧**

GoWhere is under active development, and here's where things stand so far! ✅


## **GoWhere App Task List 📝**

### **1. User Authentication 🛡️**

### **API Endpoints:**

- **✅POST /signup**: Handle user registration (username, email, password).
- **✅POST /login**: Authenticate user login and generate JWT tokens.
- **POST /recover-password**: Handle password reset via email.
- **✅GET /profile**: Fetch user profile information (after login).

### **UI Components:**

- **✅Sign-Up Screen**: Create a form with fields for username, email, and password.
- **✅Login Screen**: Design a login form with email and password fields.
- **Password Recovery Screen**: Add a "Forgot Password?" link and a recovery form.
- **✅Profile Screen**: Show user info (name, bio, events created/joined) with edit options.

---

### **2. Event Management 🎉**

### **API Endpoints:**

- **GET /events**: Fetch a list of events with filtering and sorting options.
- **✅POST /events**: Create new events (title, description, date, location).
- **PUT /events/:id**: Update an existing event (edit title, date, location).
- **DELETE /events/:id**: Delete an event.

### **UI Components:**

- **✅Event Feed Screen**: Display a list of events with title, date, location, and creator.
- **✅Event Detail Screen**: Show detailed event information with options to join or mark as interested.
- **✅Create/Edit Event Screen**: Build a form to input/edit event details (title, date, location, description).
- **Event Delete Modal**: Add a delete button with a confirmation dialog.

---

### **3. Chat Feature 💬**

### **API Endpoints:**

- **POST /chat/request**: Send a chat request to another user.
- **GET /chat/:chatId**: Fetch messages for a specific chat.
- **POST /chat/:chatId/message**: Send a new message in an existing chat.
- **POST /chat/group**: Create a group chat for event attendees.
- **GET /chat/group/:eventId**: Fetch group chat messages for a specific event.

### **UI Components:**

- **Chat List Screen**: Show a list of all ongoing private and group chats.
- **Private Chat Screen**: Display individual chat conversations with message input.
- **Group Chat Screen**: Show messages for event group chats, with the ability to send messages.
- **Chat Request Screen**: Add a "Request to Chat" button on user profiles.
- **Typing Indicators & Seen Status**: Indicate when a user is typing or has seen a message.

---

### **4. Follow System 🧑‍🤝‍🧑**

### **API Endpoints:**

- **POST /follow/:userId**: Follow a user.
- **DELETE /follow/:userId**: Unfollow a user.
- **GET /follow/:userId**: Fetch followers and following list for a specific user.

### **UI Components:**

- **Follow/Unfollow Button**: Add a button on user profiles to follow or unfollow.
- **Followers/Following Screen**: Display lists of users a person is following and those who follow them.
- **Activity Feed**: Show recent activities of followed users (new events, posts, etc.).

---

### **5. Event Search & Filters 🔍**

### **API Endpoints:**

- **GET /events?search=**: Search events by keyword.
- **GET /events?category=**: Filter events by category (e.g., Music, Sports, Tech).
- **GET /events?location=**: Filter events by location.
- **GET /events?date=**: Filter events by date range.

### **UI Components:**

- **Search Bar**: Add a search bar to the top of the event feed to search by keyword.
- **Filter Menu**: Create a dropdown or modal to filter events by category, location, and date.
- **Event Sorting**: Allow users to sort events by date, popularity, or relevance.

---

### **6. Notifications 🔔**

### **API Endpoints:**

- **POST /notifications**: Create notifications for user activities (new message, new follow, event update).
- **GET /notifications**: Fetch a list of notifications for a user.
- **DELETE /notifications/:id**: Delete a notification after it’s been viewed.

### **UI Components:**

- **Notification Icon**: Add a bell icon in the app header to indicate new notifications.
- **Notifications Screen**: Display a list of notifications with event and chat-related updates.
- **Push Notifications**: Integrate Firebase Cloud Messaging (FCM) for real-time alerts (new chats, events, follows).

---

### **7. User Profiles 👤**

### **API Endpoints:**

- **✅GET /users/:id**: Fetch user profile details.
- **✅PUT /users/:id**: Update user profile information (name, bio, etc.).

### **UI Components:**

- **✅Profile Screen**: Display user profile details, including bio, photo, and events.
- **✅Edit Profile Screen**: Allow users to update their name, bio, and photo.
- **✅Created Events Tab**: Show a list of events the user has created.
- **✅Joined Events Tab**: Show a list of events the user is attending or marked as interested.

---

### **8. Map Integration 🗺️**

### **API Endpoints:**

- **GET /events/location**: Fetch events based on location coordinates.

### **UI Components:**

- **Event Map Screen**: Use **MapView** to display events on an interactive map.
- **Event Marker**: Mark event locations on the map with pins, showing event details on click.

---

### **9. Backend & Database 🗄️**

### **Database Design (MongoDB)**

- **✅Users Collection**: Store user info (username, email, password, bio, followers, following).
- **✅Events Collection**: Store event details (title, date, location, attendees).
- **Chats Collection**: Store chat conversations and participants.
- **Followers Collection**: Store follower and following relationships.

### **API Implementation**

- **User Authentication**: Implement JWT-based login and registration.
- **Event Management**: Create, update, delete, and retrieve event data.
- **Chat Management**: Handle private and group chat creation, message sending, and real-time updates.
- **Follow System**: Implement follow/unfollow functionality and activity tracking.

---

### **10. Additional Features 🚀**

- **✅User Badges**: Implement badges for users (e.g., "Event Creator", "Top Attendee").
- **Event RSVP**: Add an RSVP system to events (Interested, Will Go).
- **Event Reminder Notifications**: Send push notifications for upcoming events the user has marked as "Interested" or "Will Go".
- **Social Media Integration**: Add options for sharing events on Facebook, Twitter, etc.


## Screeshot
| Login |Sign up | Event Feed | Event Detail|
|-------|--------|------------|--------------|
| ![Login](https://github.com/user-attachments/assets/ba2ea6ed-6e75-4433-9cca-112bd501a984) | ![Sign up](https://github.com/user-attachments/assets/ce68245e-47a9-464b-a6e8-bd0de0469db4) | ![Event Feed](https://github.com/user-attachments/assets/5ab76e8d-3d2d-410b-badd-09b8c93c7651) |![Event Detail](https://github.com/user-attachments/assets/94dc15ef-4a39-4a4c-b076-edebf80c619d) |


| Create Event - Select Type |Create Event - Select Category | Create Event | Create Event - Select Date |
|-------|--------|------------|--------------|
| ![Create Event - Select Type](https://github.com/user-attachments/assets/f6c4ed73-1090-421d-86fe-4a2b0c74e04c) | ![Event Category](https://github.com/user-attachments/assets/c2b9e823-9b12-482b-9cac-c25b13bb226d) | ![Create Event](https://github.com/user-attachments/assets/1f1e39df-344f-4c74-b591-bf79993ca151) | ![Event Create - Select Date](https://github.com/user-attachments/assets/288f58d2-9c24-4f54-97b9-76a386199f84) |

| Create Event - Select Location |Create Event - Select Tags | User Profile | User Profile - Created |
|-------|--------|------------|--------------|
| ![Select Location](https://github.com/user-attachments/assets/a2553eb6-829d-455d-9510-ac035a4f62cd) | ![Create Event - Select Tags](https://github.com/user-attachments/assets/d4e7c8be-e0d8-46bc-a4b8-a365959b8033) | ![User Profile](https://github.com/user-attachments/assets/851cbff9-56ba-4240-9e55-a3d83c214299)  | ![User Profile - Created](https://github.com/user-attachments/assets/2ecd1086-af71-4f0f-9bff-66e7d45c40dc) |

| Event Map |Event Map - List |  | |
|-------|--------|------------|--------------|
| ![Event Map](https://github.com/user-attachments/assets/2cce06dd-7db8-4681-9533-c2497815a7ad) | ![Event Map List](https://github.com/user-attachments/assets/04d808e5-a49f-402e-bd9f-6d153bae865f) | |


