![RM-Banner](/assets/rm-banner.jpg "Real MAdrid")
## Welcome to the Insurace Claim Module. 
###### Version 1.0

This is a ***Spring-Boot MySql React*** project. With this application we try to manage the squad of a soccer team in order to maintain it updated. Players, countries and positions within a soccer game are managed for this application.

### Technologies used
| Tecnology | Description |
| --------- | ----------- |
| Spring Boot | for building our backend |
| MySQL | to store our entities in a database |
| React | to build our frontend |


#### Spring Boot
We use Spring Boot to build our API backend.
* The project structure was made using [Spring Initializer](https://start.spring.io/).
* It contains three **entities**:
    - Player
    - Country
    - Position
* This Backend also contains a ***unit test*** module.

#### MySQL
We use MySQL as a `relational database model` to store data
* This is the ***diagram*** of our realmadrid MySQL database:
![RM-Banner](/assets/mysql.png "realmadrid MySQL diagram")

#### React
We installed or updated *nodejs* to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
We used `SweetAlert2` for alerts:
```sh
npm install --save sweetalert2
```
We worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We also installed `react-roter-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
And `Moment` for formatting dates:
```sh
npm install --save moment react-moment
```
### What we learned?
> Related with the back-end:
>> Go deeper with Spring Boot framework.
>> Better experience working with relationship between entities. 
>> How to configurate and work with uploading images.
>> Allow connection to the front-end.

> Related with the front-end:
>> First and a great experience using React.
>> Using libraries like: SweetAlert2, Moment, Axios, and react-router-dom.
>> Implementing process to interact with the backend.

> Complete a full stack Java application.

> Good introduce to [Kanban Board](https://draft.io/jfpa4ryqxn63gg25dh9wds6gvdq6erg4jjr4rbpvyry6 "Kanban")

![RM-Banner](/assets/rm-banner.jpg "Real MAdrid")
