# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP: <strong>54.219.159.229 or campuscantina.com</strong>
2. SSH username: <strong>ubuntu</strong>
3. SSH password or key: <strong>648team04.pem</strong>
4. Database URL or IP and port used: <strong>54.219.159.229 port 3306</strong>
5. Database username: <strong>user</strong>
6. Database password: <strong>CampusCantina2021$</strong>
7. Database name: <strong>campuscantina_test</strong>
8. Instructions on how to use the above information: <strong>see mysql-workbench.png and instructions below</strong>

## Connecting to EC2

### Set permissions for pem file (if linux/mac)
- `sudo chmod 400 648team04.pem`
### Connect to instance
- `ssh -i 648team04.pem ubuntu@18.144.169.222`
### Application folder
- `csc-648-03-sp21-team04`

## Connecting to Database

### First way (Connect via EC2):
### Login to MySQL
- `sudo mysql -u user -p`
### Enter password
- `CampusCantina2021$`
### Development Database
- `campuscantina_test`

### Second way (Connect via MySQL Workbench):

![Alt text](./mysql-workbench.png?raw=true "mysql-workbench")

### Connection Method
- `Standard TCP/IP over SSH`
### SSH Hostname
- `18.144.169.222`
### SSH Username
- `ubuntu`
### No SSH Password
### SSH Key File
- `648team04.pem`
### MySQL Hostname:
- `127.0.0.1`
### MySQL Server Port:
- `3306`
### Username
- `user`
### Password
- `CampusCantina2021$`
### Development Database
- `campuscantina_test`


# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
