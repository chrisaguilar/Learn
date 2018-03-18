# Base image
FROM ubuntu:latest

# Commands to run to install dependencies
# RUN apt-get update -y
RUN ["apt", "update", "-y"]
RUN apt install -y python3

# When you pass commands to the container, what should interpret them
ENTRYPOINT ["python3"]

# Command to run when the container starts
CMD ["app.py"]

# Working directory
WORKDIR /app

# Copy apps from the local folder to the docker container
COPY app.py app.py
COPY alternate.py alternate.py

# Make port available
EXPOSE 8080

# docker build -t sample-web-app .
# docker run -p 80:8080 sample-web-app
