function skillsMember() {
  var skills = ['html', 'css', 'js', 'react', 'node', 'mongo']
  var member = {
    name: 'John',
    age: 25,
    skills: skills,
    greet: function() {
      console.log('Hello, I am ' + this.name)
    }
  }
  return member
}

