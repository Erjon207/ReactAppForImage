FROM node:14-alpine AS build
RUN apk update && apk upgrade && apk add git
RUN git clone <repo>
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]