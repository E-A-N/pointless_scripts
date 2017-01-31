from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return  render_template('index.html')

#Hello World in Phaser
@app.route('/hellophaser')
def hellophaser():
    return render_template('phase.html')

@app.route('/monkeys')
def monk():
    return 'Monkey D Luffy!! <3'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
