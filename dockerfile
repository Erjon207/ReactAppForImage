FROM node:14-alpine AS build
RUN apk update && apk upgrade && apk add git
RUN git clone https://github.com/Erjon207/ReactAppForImage.git
WORKDIR /ReactAppForImage
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /ReactAppForImage/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]