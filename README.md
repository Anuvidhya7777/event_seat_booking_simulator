# Event Seat Booking Simulation Web App

    This project is a simple and professional **event seat booking simulation web application** designed for organizers who do not have an existing seat booking system for their event halls.

    The application allows organizers to dynamically create a seating layout based on the number of rows and columns, and enables users to book seats through an intuitive web interface.

---

## Problem Statement

    Many small to medium event halls do not have a proper digital seat booking system unless they already maintain a full-fledged web application. This makes seat management difficult and error-prone during events.

    This project aims to provide a **lightweight, web-based seat booking solution** that can be used independently without complex setup.

---

## Features

- Dynamic seat layout generation using rows and columns
- Interactive seat selection
- Visual indication of available and booked seats
- Prevention of double booking
- live booked seat count display
- Simple and user-friendly interface

---

## Tech Stack

- HTML
- CSS
- JavaScript

---

## Project Structure

```text
event-seat-booking-simulator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## What Was Implemented

### HTML
- Created a simple user interface with inputs to accept the number of rows and columns
- Added a button to trigger seat generation
- Included a container element to dynamically display the generated seats
- Linked external CSS and JavaScript files for separation of concerns

### CSS
- Applied basic styling for readability and spacing
- Used CSS Grid to arrange seats dynamically based on column count
- Styled each seat with fixed dimensions, background color, and centered text
- Added cursor interaction and rounded corners for a clean UI feel

### JavaScript
- Added an event listener to handle the "Generate Seats" button click
- Read row and column values from user input fields
- Dynamically created seat elements using DOM manipulation
- Generated seat labels programmatically (A1, A2, B1, B2, etc.)
- Updated the grid layout dynamically using `gridTemplateColumns`
- Cleared previous seat layouts before generating a new one
- Implemented seat booking logic using class-based state management
- Prevented multiple bookings of the same seat
- Maintained and displayed a live count of booked seats

## How to Use

1. Enter the number of rows
2. Enter the number of columns
3. Click the **Generate Seats** button
4. Click on a seat to book it
5. Booked seats are visually highlighted and locked
6. The total number of booked seats is displayed live



## Project Status

🚧 In Active Development

This project is being developed incrementally with daily commits,
focusing on clean code, real-world logic, and progressive enhancements.
