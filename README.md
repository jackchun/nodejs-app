# nodejs-app

https://laratutorials.com/node-js-express-get-client-ip-address-tutorial/

https://www.katacoda.com/courses/docker/2

https://github.com/primus/forwarded-for

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

```bash
git clone git@github.com:jackchun/nodejs-app.git

# git clone https://github.com/jackchun/nodejs-app.git

curl -i --header "X-Forwarded-For: 192.168.0.2" http://docker:49160

curl -i --header "X-Forwarded-For: 192.168.0.2" http://localhost:8080
```
