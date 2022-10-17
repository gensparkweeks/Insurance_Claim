![Claim-Banner](/assets/claim.png "Claim")
## Welcome to the Insurace Claim Module. 
###### Version 1.0

This is a ***Spring-Boot MySql React*** project. With this application we try to manage the claim module of an insurance process in order to provide information to the App. 

### Technologies used
| Tecnology | Description |
| --------- | ----------- |
| Spring Boot | for building our backend |
| MySQL | to store our entities in a database |
| React | to build our frontend |


#### Spring Boot
We use Spring Boot to build our API backend.
* The project structure was made using [Spring Initializer](https://start.spring.io/).
* It contains eigth **entities**:
    - Car
    - Claim
    - Insurance
    - Role
    - Status
    - Type
    - User
    - UserInfo
* This Backend also contains a ***unit test*** module.

#### MySQL
We use MySQL as a `relational database model` to store data
* This is the ***diagram*** of our [Insurace Claim MySQL database](https://drawsql.app/teams/minardo/diagrams/insurance-claim "Insurace Claim MySQL diagram")

#### React
We installed or updated *nodejs* to create our React module for our Front:
```sh
npm install npm -g 
cd main directory
npx create-react-app rm-frontend
```
We worked with `axios` for doing http requests:
```sh
npm install --save axios
```
We install bootstrap to use con styles:
```sh
npm install bootstrap
```
We also installed `react-roter-dom` for manage routes and more:
```sh
npm install --save react-router-dom
```
We also used `react-hook-form` for manage and validate forms:
```sh
npm install react-hook-form
```


### What we learned?
> Related with the back-end:
>> Better experience working with relationship between entities. 
>> How to configurate and work with uploading files (word/pdfs).
>> Allow connection to the front-end.

> Related with the front-end:
>> Implementing process to interact with the backend.
>> Better use of react-hook-form to validate and manage forms.

> Complete a full stack Java application.

> Good introduce to [Trello Board](https://trello.com/b/ExOWpGHq/claim "Trello")

![Claim-Banner](/assets/claim.png "Claim")
