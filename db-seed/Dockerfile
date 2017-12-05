FROM mongo:3

COPY db_users.json /db_users.json
CMD mongoimport --host db --db rddc --collection users --type json --file /db_users.json --jsonArray
