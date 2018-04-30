const ApiBuilder = require('claudia-api-builder'),
    AWS = require('aws-sdk');
var api = new ApiBuilder(),
    dynamoDb = new AWS.DynamoDB.DocumentClient();

var generateId = (table) => {
    return new Promise((res, rej) => {
        var params = {
            ExpressionAttributeValues: {
                ":incr": 1
            },
            Key: {
                "table": table 
            },
            ReturnValues: "ALL_NEW",
            TableName: "idGenerator",
            UpdateExpression: "SET id = id + :incr",
        };
        dynamoDb.update(params).promise().then(data => {
            console.log("data returned:" + data);
            res(data.Attributes.id);
        }).catch(err => {
            console.log("errors:" + err);
            rej(err);
        })
    })
}

api.post('/questions', function (request) { // SAVE your question
  var params = {  
    TableName: 'questions',  
    Item: {
        questionId: request.body.questionId,
        question: request.body.question,
        answer: "Coming soon" 
    } 
  }
  return dynamoDb.put(params).promise(); // returns dynamo result 
}, { success: 201 }); // returns HTTP status 201 - Created if successful

api.get('/questions', function (request) { // GET all users
  return dynamoDb.scan({ TableName: 'questions' }).promise()
      .then(response => response)
});

api.get('/id', function (request) { // GET new id
    console.log("requested table:" + request.queryString.table);
    return generateId(request.queryString.table).then((id) =>{
        console.log("id returned:" + id);
        return {"id": id}
    });
    console.log("passed generateId");

});

module.exports = api;