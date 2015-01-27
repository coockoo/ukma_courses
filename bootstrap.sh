#!/bin/sh

# install common tools
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make

#install apache2 and link /vagrant into /var/www
sudo apt-get update
sudo apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi

#install npm
sudo apt-get update
sudo apt-get install -y npm

#postgresql
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ precise-pgdg main" >> /etc/apt/sources.list.d/postgresql.list'
sudo apt-get update
sudo apt-get install -y postgresql-9.3 # postgresql-9.3-postgis-2.1
sudo apt-get install -y postgresql-contrib

# configure postgresql
sudo cp /vagrant/postgres/pg_hba.conf /etc/postgresql/9.3/main
sudo service postgresql restart

# install rabbitmq
# sudo apt-get install -y rabbitmq-server
# sudo rabbitmq-plugins enable rabbitmq_management
# sudo service rabbitmq-server restart

