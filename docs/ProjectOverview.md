# Project Overview

## 1. System Objectives

Trainly aims to provide a centralized digital platform that helps small and medium-sized gyms manage their daily operations more efficiently. The system is designed to improve member monitoring, reduce overcrowding through advance booking and scheduling, and provide gym members with easier access to gym services and information.

## 2. Proposed Scope

Trainly will cover member registration and monitoring, attendance tracking, gym booking and reservation, workout scheduling, GPS-enabled gym location search, and an online store for gym-related products.

The system will allow gym owners and staff to monitor memberships and reservations, while gym members can reserve workout schedules, check relevant gym information, locate nearby gyms, and access available fitness products.

## 3. Stakeholders

- **Gym Owners / staff** — Manage memberships, bookings, schedules, products, and overall gym operations. Also Monitor member attendance, active memberships, reservations, and daily gym activities.
- **Gym Members / Customers** — Use the system to access gym information, reserve schedules, check membership status, and locate gyms.
- **Potential / Walk-in Customers** — Use Trainly to discover nearby gyms and view available gym information before becoming members.

## 4. Tools & Technologies

- **Programming Language/Framework:** Node.js and Express
- **Integration Approach:** REST API
- **Database:** Database system for storing member, membership, attendance, reservation, and other system records
- **Repository:** GitHub
- **Version Control:** Git
- **API Testing:** Postman
- **Development Environment:** Visual Studio Code
- **Diagramming:** Draw.io or equivalent diagramming tool

## 5. High-Level System Overview

Trainly is a web-based gym management and booking system designed primarily for small and medium-sized gyms. It provides a centralized platform where gym owners and staff can manage memberships, monitor attendance, organize workout schedules and reservations, and offer gym-related products. Gym members can use the system to reserve workout schedules, check relevant membership information, discover nearby gyms through GPS-enabled location mapping, and access available fitness products.

### Major Modules/Subsystems

1. **User & Member Management**
   - Handles user accounts, member information, membership records, and member monitoring.

2. **Booking & Schedule Management**
   - Handles workout schedules, booking requests, reservations, and reservation/schedule records.

3. **Attendance & Membership Monitoring**
   - Handles attendance updates, member verification, active membership status, daily reservations, and attendance records.

4. **Gym Information & Location**
   - Provides gym information and GPS-enabled location services for finding nearby gyms.

5. **Product Management**
   - Allows gym owners and staff to manage available gym-related products and product records.

### External Systems/Interfaces

- **GPS-enabled Location Mapping** – Supports the discovery of nearby gyms through location-based services.
- **Application Database** – Stores user/member records, booking and schedule records, attendance records, gym information and location data, and product records.
- **Third-Party APIs** – No specific third-party API is currently identified in the project documentation. The specific mapping/location API can be defined during implementation.

### Data Flow Summary

Gym members and walk-in customers provide account information, booking requests, and gym search or location requests to Trainly. Gym owners and staff provide member data, schedule and reservation updates, attendance updates, member verification, gym information, location data, and product information. Trainly processes these inputs through its major modules and stores the resulting information in the appropriate data stores. The system then provides users with booking confirmations, schedule information, membership information, nearby gym information, active membership status, daily reservations, and other relevant records.


## Integration Pattern Applied

### Selected Integration Pattern
**Hub-Spoke**

### Rationale
Trainly uses the Hub-Spoke integration pattern because its different modules need to exchange information through a centralized communication flow. The Trainly Integration Hub serves as the central point that routes requests and data between the User & Member Management, Booking & Schedule Management, Attendance & Membership Monitoring, Gym Information & Location, and Product Management modules.

Using a central hub reduces the need for direct connections between individual modules and keeps communication organized. This approach also makes the system easier to maintain because changes in one module do not require direct connections to every other module.

### Diagram Reference
The High-Level Architecture Diagram is available at:

`/docs/HighLevelArch.png`

## Messaging Workflow

Trainly implements a simple asynchronous messaging workflow for processing gym booking requests. When a member submits a booking, the Booking Producer creates a booking request and places it into the message queue.

The Booking Consumer retrieves the queued booking requests and processes them one by one. Each booking contains the member ID, member name, gym, date, and time. After processing, the booking is marked as confirmed and the schedule details are displayed.

The messaging flow is:

Member → Booking Producer → Message Queue → Booking Consumer → Booking Confirmation

This implementation demonstrates how messaging middleware can allow the Booking Module and Booking Processing Module to communicate through a queue instead of directly communicating with each other. The current prototype uses an in-memory queue in Node.js for demonstration purposes.