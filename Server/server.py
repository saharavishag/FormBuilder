import http.server
import socketserver
import handleData
import socket
import sys
import json

# Create a TCP/IP socket
server_address = ('127.0.0.1', 5000)
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# Bind the socket to the address given on the command line
print ('starting up')
sock.bind(server_address)
# listen to 1 connection at the time
sock.listen(1)
while True:
    print('waiting for a connection')
    # connection to client
    client, client_address = sock.accept()
    try:
        print('client connected:', client_address)
        while True:
            request = client.recv(1024).decode('utf-8')            
            print('received message')
            if request:
                # handledata return json
                response = handleData.handleData(request)     
                client.send(response.encode('utf-8'))
            else:
                break
    finally:
        client.close()

