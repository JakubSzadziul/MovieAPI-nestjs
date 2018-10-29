FROM node:8-alpine

EXPOSE 3000

WORKDIR /dockerapp

COPY . /dockerapp

ENV NAME Yolo

RUN apk update && apk add bash
RUN ./entrypoint.sh

CMD [ "npm", "run", "start"]



