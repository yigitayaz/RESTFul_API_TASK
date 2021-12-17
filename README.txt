This file is created with Express Generator. 
app.js file creates route and database objects and imports needed modules. 
www file in bin directory creates http server and listens for queries. 
db.js file in db directory is a helper file for database connection and credentials file reading.
schema.js file in models directory defines a schema for countries collection.
endpoint directory has corresponding files for given endpoints. Optimal endpoint does not return optimal answer but returns maximum amounts and a remainder one. Others are working as intended.

FORMAT FOR CREDENTIALS:
File name: credentials.txt
Directory name :bin
1 Host ip
2 username
3 password
4 port id
5 database Name

Row numbers are only for illustration. Use no spaces only new lines.

To Run: npm run start or npm start

Could not upload node_modules to git. Dependencies are specified in package.json.
