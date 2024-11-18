from http.server import BaseHTTPRequestHandler, HTTPServer
import threading

ready_instances = set()  # Almacena las instancias que han reportado "ready"

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/ready":
            # Marca la IP como lista
            ready_instances.add(self.client_address[0])
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"Instance marked as ready")
    
    def do_GET(self):
        if self.path == "/ready":
            # Devuelve la lista de instancias listas
            self.send_response(200)
            self.end_headers()
            response = "\n".join(ready_instances)
            self.wfile.write(response.encode())

# Inicia el servidor en un hilo separado
def run_server():
    server = HTTPServer(("0.0.0.0", 8000), RequestHandler)
    print("Starting server on port 8000...")
    server.serve_forever()

thread = threading.Thread(target=run_server, daemon=True)
thread.start()
