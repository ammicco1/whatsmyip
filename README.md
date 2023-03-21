# Simple Node.js server for get your own public IP address
Run with ``` npm start ``` and make an HTTP request to get a JSON object like:
``` json
{
    "ipv4": "192.168.0.1", 
    "ipv6": "::ffff"
} 
```

specify the port in an environment variable named WMIPORT.