FROM wordpress:latest

# installs php zip extensions - used for plugins like duplicator
RUN docker-php-ext-install zip 

# Copy the existing app into our wp directory

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html/

CMD ["apache2-foreground"]