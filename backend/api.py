from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return {
        'coursePlatform' : "Coursera",
        'title': 'Deeplearning',
        'time': '20 hours',
        'difficulty': 'hard',
        'style': ['video', 'self-paced']
    }
