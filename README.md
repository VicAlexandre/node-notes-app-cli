# Notes App
## A basic Node.js CLI app that allows the user to create, read, update and remove notes. Each note is stored as a .json file and has it's own title and body properties.

### Technologies used:
#### JavaScript
#### Node.js

### Node Modules used:
#### File System(fs): used to implement the basic i/o in regards to the .json files.
#### Chalk: used to add some flavor to the outputs produced by the application.
#### Yargs: used to implement and standardize how the user will interface with the application, using Yargs, the CRUD operations are properly identified, parsed and executed by calling handlers created by myself and located in the _handlers.js_ file.

### Basic usage example:
##### $ node app.js add --title="Title example" --body="Body example"
##### ==================================
                Adding a new note!        
                Title: Title example      
                Content: Body example     
##### ================================== 
