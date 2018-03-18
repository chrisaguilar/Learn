# Pull Base Image
FROM mongo

# Define Mountable Directories
VOLUME ["/data/db"]

# Define Working Directory
WORKDIR /data

# Define Default Command
CMD ["mongod"]

# Expose Ports
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017

# Build the Image:
# docker build -t mongotest .

# Run the Image:
# docker run -p 27017:27017 -p 28017:28017 mongotest

# Test Locally:
# mongo
