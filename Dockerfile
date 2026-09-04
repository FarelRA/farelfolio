FROM joseluisq/static-web-server:2
COPY build/ /var/public/
EXPOSE 8080
