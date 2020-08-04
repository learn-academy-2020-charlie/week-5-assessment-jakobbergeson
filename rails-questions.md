# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - This is connecting the URL to the server
library - This is the URL for the web page
:id - This is the params which will dynamically update information displayed on the page "library"
book - This is the name of the controller
show - This the name of the method that lives in the "book" controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

First we are going to have to make a migration file in terminal by using the command below

rails g migration add_foreign_key_to_model 

Next, navigate to your migration file in your text editor by following the file path db > migrate > *times_stamp_here*_add_foreign_key_to_model.rb. Here we'll make the changes to the model in the change method by entering the following 

add_column :*table_name*, :*column_name*, :*data_type*

Finally, in order to save the changes we just made to the schema we must input the following command in terminal 

rails db:migrate

4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

After we've created a new Rails app and have cd into it the command is following

rails g model Person shirt:string pants:string shoes:string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

After we arrive at the Person model in our text editor by going through the file path of app > models > person.rb we input the following code in the Person class

vaidates :shirt, :pants, :shoes, presence:true

6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The model should be singular and in PascalCase

The table that comes with it should be plural and in snake_case

The columns should singular and in snake_case