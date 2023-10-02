define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./src/dist/docs/main.js",
    "group": "/Users/rishuchowdhary/Downloads/developing/temo_delete/node-public/src/dist/docs/main.js",
    "groupTitle": "/Users/rishuchowdhary/Downloads/developing/temo_delete/node-public/src/dist/docs/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/v1/employee/add",
    "title": "Add Employee",
    "version": "0.0.0",
    "name": "Add_Employee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "designation",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\":\"Test Account\",\n    \"email\":\"testOne@yopmail.com\",\n    \"designation\":\"Software Developer\",\n    \"age\":25,\n    \"phone\":\"9843647364\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/v1/routes/employee.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "post",
    "url": "/api/v1/employee/find",
    "title": "Find Employee",
    "version": "0.0.0",
    "name": "Find_Employee",
    "group": "Employee",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "employeeId",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"_id\": \"650740a0fa5b76002b07e065\",\n\"name\": \"Test Account\",\n\"designation\": \"Software Developer\",\n\"email\": \"test@yopmail.com\",\n\"phone\": \"9843647364\",\n\"age\": 25,\n\"createdAt\": \"2023-09-17T18:08:32.720Z\",\n\"updatedAt\": \"2023-09-17T18:08:32.720Z\",\n\"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/v1/routes/employee.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/api/v1/employee",
    "title": "List Of Employees",
    "version": "0.0.0",
    "name": "List_of_Employees",
    "group": "Employee",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"response\": [\n    {\n    \"_id\": \"650740a0fa5b76002b07e065\",\n    \"name\": \"Test Account\",\n    \"designation\": \"Software Developer\",\n    \"email\": \"test@yopmail.com\",\n    \"phone\": \"9843647364\",\n    \"age\": 25,\n    \"createdAt\": \"2023-09-17T18:08:32.720Z\",\n    \"updatedAt\": \"2023-09-17T18:08:32.720Z\",\n    \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./src/api/v1/routes/employee.ts",
    "groupTitle": "Employee"
  },
  {
    "type": "get",
    "url": "/home",
    "title": "Home page",
    "version": "0.0.0",
    "name": "Home",
    "group": "Home",
    "filename": "./src/api/v1/routes/home.ts",
    "groupTitle": "Home"
  }
] });
