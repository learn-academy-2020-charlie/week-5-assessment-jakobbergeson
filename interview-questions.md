# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for model, view, and controller which are essesntially the main parts that make up Rails. The model is what holds the information. The view is what the user actually sees and interacts with. The controller houses much of the logic and acts as the "conductor" of the system. 

  Researched answer: Upon further research I discovered that my definition was a little off. The model holds not only the information but also the logic. It is often linked to a database as well. The view generates the UI. The controller doesn't hold the logic but it does interect with the model. It also receives events from the outside world, usually through the view.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: CRUD stands for create, read, update, delete. If an application has this it means that it is considered to have full functionality. Essentially, the model can has functions that create, display, update, and delete content.

  Researched answer: After looking through the internet I found that CRUD makes up the four basic components of persistent storage for a web app. 



3. What is a migration? Why would you use one?

  Your answer: A migration is a file that is used to create, update, or deletes parts of a model. 

  Researched answer: After loking in the syllabus 
  it looks like migrations are used to modify the shape of databases by adding or deleting columns, changing the name of the column, or changing the data type of a column.



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer:

   class Person 
   has_many :computers 

   class Computer 
   belongs_to :person >>> Holds the foreign key
   ------------------------------------------------------------

   class Computer 
   has_many :persons 

   class Person 
   belongs_to :computer >>> Holds the foreign key
   -------------------------------------------------------------

   class Person
   has_one :computers 

   class computers
   belongs_to :person >>> Holds the foreign key
   -------------------------------------------------------------


  Researched answer: After researching it looks like my answer is mostly correct but maybe I would add a many_to_many relationship as well



5. What is object-relational mapping?

  Your answer: ORM is a programming technique that allows information from two or more different languages to be transfered and used

  Researched answer: After looking at the syllabus it looks like I was a little off in that ORM allows incompatible systems to convert data by using object-oriented programming languages.



6. What is a gem?

  Your answer: A gem is downloadable extension of Ruby

  Researched answer: After looking into this I found that even Rails is considered a gem



7. Why is it important to have validations in your application?

  Your answer: Validations ensure that only desired data enters the database of an app.

  Researched answer: To expand on my answer; validations are also important to protect the database from mailcious data entries



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
A RESTful route is a route that provides mapping between HTTP verbs to controller CRUD actions
- JSON
JSON (JavaScript Object Notation) is a syntax for storing and exchanging data. JSON is text, written with JavaScript object notation.
- API
A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.
- Endpoints
Delivers some sort of resource or action when reached
- Strong params
Provides an interface for protecting attributes from end-user assignment
