# Use the alpine nginx image as a base
FROM nginx:alpine
COPY ./out /usr/share/nginx/html