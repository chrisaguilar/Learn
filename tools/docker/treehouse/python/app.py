#!/usr/bin/env python

from http.server import BaseHTTPRequestHandler, HTTPServer

class testHttpServer_RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-Type', 'text/html')
        self.end_headers()
        self.wfile.write(bytes('Hello from Python!', 'utf8'))
        return

def run():
    httpd = HTTPServer(('0.0.0.0', 8080), testHttpServer_RequestHandler)
    httpd.serve_forever()

run()
