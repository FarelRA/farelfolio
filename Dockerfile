FROM joseluisq/static-web-server:2
COPY build/ /public/
EXPOSE 8080
