# set base image (host OS)
FROM python:3.12.0-alpine

# set the working direction in the container
WORKDIR /usr/src/app

# copy dependencies into
COPY requirements.txt ./

#  install dependencies
RUN pip install -r requirements.txt

# copy the conent of the local src directory to working directory
COPY ./src .

# entrypoint in working directory
CMD [ "python", "./app.py" ]