
const path = require('path');
const grpc = require('grpc');
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


const server = new grpc.Server();
server.addService(hello_proto.Hello.service, {
    sayHello: (call, callback) =>{
        try {
            let{name,age}=call.request;
            let data=`我叫 ${name},年龄 ${age}`;
            callback && callback(null, { message: data })
        } catch (err) {
            console.log('服务端出错错误');
            callback && callback(err)
        }
    }
});

server.bind('127.0.0.1:50052', grpc.ServerCredentials.createInsecure());
server.start();
console.log('server start......')

