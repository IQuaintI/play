from crypt import methods
from flask import Flask, render_template, request # Imports the Flask class, render_template function, and request object

app = Flask(__name__, template_folder= 'template') # Creates an instance of the Flask class and passes in the __name__ variable

@app.route('/') # Sets the route to be the home page
def index(): # Defines the function that will be called when the route is accessed
    return render_template('index.html') # Renders the index.html template and passes in the name variable

@app.route("/greet", methods = ['POST'])
def greet():
    name = request.form.get('name') # Gets the name query string from the request object and assigns it to the name variable. If there is no name query string, the default value of 'World' is used
    return render_template('greet.html', name=name)