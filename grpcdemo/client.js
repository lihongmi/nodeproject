
const grpc = require('grpc');

const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'hello.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
);
const hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;




console.log('init client...');

const client = new hello_proto.Hello( '127.0.0.1:50052', grpc.credentials.createInsecure());


client.sayHello({name: 'lucy', age: 21}, (err, response)=> {
  if (err) {
    console.log(err);
    return;
  }
  console.log('hi! ', response.message)
});
 

