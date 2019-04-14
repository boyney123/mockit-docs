---
id: how-it-works
title: How it works
---

MockIt is split into three parts: The **client**, **server** and the **mockit-api**.

## The client

This is a React application that reads data from a configuration file and allows developers to create, edit and delete routes (with extra features). When you make changes to the routes, the changes are reflected in the configuration file.

## The server

This is the server the React application uses to make changes to the configuration file. A basic API to add, edit, delete routes and also make settings changes.

## The mockit-api

This is the dynamic server that reads the configuration file and updates it routes on the fly (using nodemon). Any changes to the configuration file forces changes on the server, this is how the hot-reloading concept is working.
