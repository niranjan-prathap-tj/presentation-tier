#image for a sample angular app

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /src/app

# Add the source code to app
COPY ./ /src/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.17.1-alpine

COPY --from=build /src/app/dist/sample /usr/share/nginx/html

# Copy the build output to replace the default nginx contents.
# COPY /dist/sample /usr/share/nginx/html

# Expose port 80
EXPOSE 80