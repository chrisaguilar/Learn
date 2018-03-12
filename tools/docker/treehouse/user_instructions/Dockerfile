# Use ubuntu base image
FROM ubuntu

# Add user chris
RUN useradd chris

# Create /app and change ownership to chris
WORKDIR /app
RUN chown -R chris:chris /app

# Change user to chris
USER chris

# Run these commands
RUN whoami > whoami.txt
CMD whoami
