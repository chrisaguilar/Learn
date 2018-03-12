FROM ubuntu

RUN apt update
RUN apt install -y tree

WORKDIR /files

COPY host_file.txt image_file.txt
COPY host_file.txt image/path/image_file.txt
COPY host_file.txt /image_file.txt
# ADD http://google.com/robots.txt robots.txt
# ADD zyps.tar.gz zyps/
